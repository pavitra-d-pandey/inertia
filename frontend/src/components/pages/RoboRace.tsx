import { useMemo, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPaymentWithOptions } from '../../lib/payment';

type RegisterResponse = { message: string };

type RoboMember = {
  name: string;
  email: string;
  phone: string;
};

export default function RoboRace() {
  const [form, setForm] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    robotName: '',
    memberCount: 1
  });
  const [members, setMembers] = useState<RoboMember[]>([{ name: '', email: '', phone: '' }]);
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const normalizedCount = useMemo(() => Math.max(1, Math.min(20, form.memberCount)), [form.memberCount]);

  const resizeMembers = (count: number) => {
    setMembers(prev => {
      if (prev.length === count) {
        return prev;
      }
      if (prev.length > count) {
        return prev.slice(0, count);
      }
      return [
        ...prev,
        ...Array.from({ length: count - prev.length }, () => ({ name: '', email: '', phone: '' }))
      ];
    });
  };

  const handleCountChange = (value: string) => {
    const parsed = Number(value);
    const count = Number.isNaN(parsed) ? 1 : Math.max(1, Math.min(20, parsed));
    setForm(prev => ({ ...prev, memberCount: count }));
    resizeMembers(count);
  };

  const updateMember = (index: number, key: keyof RoboMember, value: string) => {
    setMembers(prev => prev.map((member, i) => (i === index ? { ...member, [key]: value } : member)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const payment = await collectPaymentWithOptions(
        'robo-race',
        { name: form.captainName, email: form.email, contact: form.phone },
        'Robo Race',
        { memberCount: normalizedCount }
      );

      const res = await fetchJson<RegisterResponse>('/api/robo-race/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          memberCount: normalizedCount,
          members,
          ...payment
        })
      });
      setResult(res.message);
      setForm({
        teamName: '',
        captainName: '',
        email: '',
        phone: '',
        robotName: '',
        memberCount: 1
      });
      setMembers([{ name: '', email: '', phone: '' }]);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Robo Race</h2>
      <p className="section-subtitle">Choose team size and register all students with payment in one flow.</p>

      <div className="banner">
        Track highlights include tight corners, ramp drops, laser gates, and a final sprint zone.
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Robo Race Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            placeholder="Team name"
            value={form.teamName}
            onChange={e => setForm({ ...form, teamName: e.target.value })}
            required
          />
          <input
            placeholder="Captain name"
            value={form.captainName}
            onChange={e => setForm({ ...form, captainName: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Phone"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            placeholder="Robot name"
            value={form.robotName}
            onChange={e => setForm({ ...form, robotName: e.target.value })}
            required
          />
          <input
            type="number"
            min={1}
            max={20}
            value={normalizedCount}
            onChange={e => handleCountChange(e.target.value)}
            required
          />

          {members.map((member, index) => (
            <div className="card" key={index}>
              <h4>Student {index + 1}</h4>
              <div className="form-grid">
                <input
                  placeholder="Student name"
                  value={member.name}
                  onChange={e => updateMember(index, 'name', e.target.value)}
                  required
                />
                <input
                  placeholder="Student email"
                  type="email"
                  value={member.email}
                  onChange={e => updateMember(index, 'email', e.target.value)}
                  required
                />
                <input
                  placeholder="Student phone"
                  value={member.phone}
                  onChange={e => updateMember(index, 'phone', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay & Register Robo Race'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
