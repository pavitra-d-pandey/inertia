import { useMemo, useRef, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPaymentWithOptions } from '../../lib/payment';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';

type RegisterResponse = { message: string };

type RoboMember = {
  name: string;
  email: string;
  phone: string;
  branch: string;
  semester: string;
  collegeName: string;
};

export default function RoboRace() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState({
    teamName: '',
    teamLeaderName: '',
    email: '',
    phone: '',
    collegeName: '',
    memberCount: 2
  });
  const [members, setMembers] = useState<RoboMember[]>([
    { name: '', email: '', phone: '', branch: '', semester: '', collegeName: '' },
    { name: '', email: '', phone: '', branch: '', semester: '', collegeName: '' }
  ]);
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const normalizedCount = useMemo(() => Math.max(2, Math.min(4, form.memberCount)), [form.memberCount]);

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
        ...Array.from({ length: count - prev.length }, () => ({ name: '', email: '', phone: '', branch: '', semester: '', collegeName: '' }))
      ];
    });
  };

  const handleCountChange = (value: string) => {
    const parsed = Number(value);
    const count = Number.isNaN(parsed) ? 2 : Math.max(2, Math.min(4, parsed));
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
        'kinetic-showdown',
        { name: form.teamLeaderName, email: form.email, contact: form.phone },
        'Kinetic Showdown'
      );

      const enrichedMembers = members.map(member => ({
        ...member,
        collegeName: member.collegeName || form.collegeName
      }));

      const res = await fetchJson<RegisterResponse>('/api/kinetic-showdown/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          memberCount: normalizedCount,
          members: enrichedMembers,
          ...payment
        })
      });
      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setForm({
        teamName: '',
        teamLeaderName: '',
        email: '',
        phone: '',
        collegeName: '',
        memberCount: 2
      });
      setMembers([
        { name: '', email: '', phone: '', branch: '', semester: '', collegeName: '' },
        { name: '', email: '', phone: '', branch: '', semester: '', collegeName: '' }
      ]);
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.kineticShowdown), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Kinetic Showdown</h2>
      <p className="section-subtitle">Team entry: INR 300 per team. Choose 2 to 4 members and complete payment.</p>

      <div className="banner">
        <h4 style={{ marginTop: 0 }}>RC Car Competition - Information Brochure</h4>
        <p>COSMOS JEC is organizing the Kinetic Showdown RC Car competition during Inertia.</p>
        <ul>
          <li>Team size: minimum 2 and maximum 4.</li>
          <li>Car limit: max 20cm x 20cm, max height 15cm, max weight 1.2kg.</li>
          <li>No readymade framework/design; participants must build their own solution.</li>
          <li>Wireless control required (Wi-Fi/Bluetooth/LoRa/Zigbee/RF modules).</li>
          <li>Allowed stacks include Arduino, ESP, STM, Raspberry Pi, and similar platforms.</li>
          <li>Chassis can be MDF/foam/cardboard/acrylic/3D print or other strong material.</li>
          <li>Power must be on-board; no wired external power source.</li>
          <li>Scoring: Build quality 10%, component decisions 10%, architecture 20%, creativity 10%, race 50%.</li>
        </ul>
      </div>

      <div style={{ marginTop: '22px' }}>
        <button className="btn btn-primary" type="button" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          Registration
        </button>
      </div>

      <div className="card" style={{ marginTop: '24px' }} ref={formRef}>
        <h4>Kinetic Showdown Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            placeholder="Team name"
            value={form.teamName}
            onChange={e => setForm({ ...form, teamName: e.target.value })}
            required
          />
          <input
            placeholder="Team leader name"
            value={form.teamLeaderName}
            onChange={e => setForm({ ...form, teamLeaderName: e.target.value })}
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
            placeholder="College name"
            value={form.collegeName}
            onChange={e => setForm({ ...form, collegeName: e.target.value })}
            required
          />
          <input
            type="number"
            min={2}
            max={4}
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
                <input
                  placeholder="Branch"
                  value={member.branch}
                  onChange={e => updateMember(index, 'branch', e.target.value)}
                  required
                />
                <input
                  placeholder="Semester / Year"
                  value={member.semester}
                  onChange={e => updateMember(index, 'semester', e.target.value)}
                  required
                />
                <input
                  placeholder="College name"
                  value={member.collegeName}
                  onChange={e => updateMember(index, 'collegeName', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay INR 300 & Register'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
