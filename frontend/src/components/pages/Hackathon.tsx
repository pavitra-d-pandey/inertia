import { useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';

type RegisterResponse = { message: string };

type HackathonMember = {
  name: string;
  email: string;
  phone: string;
  gender: string;
};

const createMembers = (): HackathonMember[] =>
  Array.from({ length: 4 }, () => ({
    name: '',
    email: '',
    phone: '',
    gender: 'female'
  }));

export default function Hackathon() {
  const [form, setForm] = useState({
    teamName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [members, setMembers] = useState<HackathonMember[]>(createMembers());
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const updateMember = (index: number, key: keyof HackathonMember, value: string) => {
    setMembers(prev => prev.map((member, i) => (i === index ? { ...member, [key]: value } : member)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const femaleCount = members.filter(m => m.gender.toLowerCase() === 'female').length;
      if (femaleCount < 1) {
        throw new Error('At least one female member is required.');
      }

      const payment = await collectPayment(
        'hackathon',
        { name: form.contactName, email: form.contactEmail, contact: form.contactPhone },
        'Hackathon'
      );

      const res = await fetchJson<RegisterResponse>('/api/hackathon/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          members,
          ...payment
        })
      });

      setResult(res.message);
      setForm({
        teamName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: ''
      });
      setMembers(createMembers());
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to complete registration');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Unstop Hackathon</h2>
      <p className="section-subtitle">
        Register one team with exactly 4 members. At least one member must be female. Team code is not required.
      </p>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Hackathon Team Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            placeholder="Team name"
            value={form.teamName}
            onChange={e => setForm({ ...form, teamName: e.target.value })}
            required
          />
          <input
            placeholder="Contact person name"
            value={form.contactName}
            onChange={e => setForm({ ...form, contactName: e.target.value })}
            required
          />
          <input
            placeholder="Contact email"
            type="email"
            value={form.contactEmail}
            onChange={e => setForm({ ...form, contactEmail: e.target.value })}
            required
          />
          <input
            placeholder="Contact phone"
            value={form.contactPhone}
            onChange={e => setForm({ ...form, contactPhone: e.target.value })}
            required
          />

          {members.map((member, index) => (
            <div className="card" key={index}>
              <h4>Member {index + 1}</h4>
              <div className="form-grid">
                <input
                  placeholder="Member name"
                  value={member.name}
                  onChange={e => updateMember(index, 'name', e.target.value)}
                  required
                />
                <input
                  placeholder="Member email"
                  type="email"
                  value={member.email}
                  onChange={e => updateMember(index, 'email', e.target.value)}
                  required
                />
                <input
                  placeholder="Member phone"
                  value={member.phone}
                  onChange={e => updateMember(index, 'phone', e.target.value)}
                  required
                />
                <select
                  value={member.gender}
                  onChange={e => updateMember(index, 'gender', e.target.value)}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay & Register Hackathon'}
          </button>
        </form>
      </div>

      {result && <div className="banner" style={{ marginTop: '20px' }}>{result}</div>}
    </section>
  );
}
