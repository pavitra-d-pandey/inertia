import { useMemo, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';

type RegisterResponse = { message: string };

type EsportsMember = {
  name: string;
  branch: string;
  semester: string;
  collegeName: string;
};

function createMembers(count: number): EsportsMember[] {
  return Array.from({ length: count }, () => ({ name: '', branch: '', semester: '', collegeName: '' }));
}

export default function Esports() {
  const [game, setGame] = useState<'valorant' | 'bgmi'>('valorant');
  const [form, setForm] = useState({
    teamName: '',
    collegeName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamLeaderPhone: ''
  });
  const [members, setMembers] = useState<EsportsMember[]>(createMembers(5));
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const requiredCount = useMemo(() => (game === 'valorant' ? 5 : 4), [game]);
  const feeLabel = game === 'valorant' ? 'INR 249' : 'INR 99';
  const paymentEvent = game === 'valorant' ? 'esports-valorant' : 'esports-bgmi';

  const onGameChange = (value: 'valorant' | 'bgmi') => {
    setGame(value);
    setMembers(createMembers(value === 'valorant' ? 5 : 4));
  };

  const updateMember = (index: number, key: keyof EsportsMember, value: string) => {
    setMembers(prev => prev.map((member, i) => (i === index ? { ...member, [key]: value } : member)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const payment = await collectPayment(
        paymentEvent,
        { name: form.teamLeaderName, email: form.teamLeaderEmail, contact: form.teamLeaderPhone },
        `eSports ${game.toUpperCase()}`
      );

      const payloadMembers = members.map(member => ({
        ...member,
        collegeName: member.collegeName || form.collegeName
      }));

      const res = await fetchJson<RegisterResponse>('/api/esports/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          game,
          members: payloadMembers,
          ...payment
        })
      });
      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.esports), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">eSports</h2>
      <p className="section-subtitle">Select game first: Valorant (5 players, INR 249) or BGMI (4 players, INR 99).</p>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>eSports Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <select value={game} onChange={e => onGameChange(e.target.value as 'valorant' | 'bgmi')}>
            <option value="valorant">Valorant (5 players)</option>
            <option value="bgmi">BGMI (4 players)</option>
          </select>
          <input placeholder="Team name" value={form.teamName} onChange={e => setForm({ ...form, teamName: e.target.value })} required />
          <input placeholder="College name" value={form.collegeName} onChange={e => setForm({ ...form, collegeName: e.target.value })} required />
          <input placeholder="Team leader name" value={form.teamLeaderName} onChange={e => setForm({ ...form, teamLeaderName: e.target.value })} required />
          <input placeholder="Team leader email" type="email" value={form.teamLeaderEmail} onChange={e => setForm({ ...form, teamLeaderEmail: e.target.value })} required />
          <input placeholder="Team leader phone" value={form.teamLeaderPhone} onChange={e => setForm({ ...form, teamLeaderPhone: e.target.value })} required />

          {members.map((member, index) => (
            <div className="card" key={index}>
              <h4>Player {index + 1}</h4>
              <div className="form-grid">
                <input placeholder="Name" value={member.name} onChange={e => updateMember(index, 'name', e.target.value)} required />
                <input placeholder="Branch" value={member.branch} onChange={e => updateMember(index, 'branch', e.target.value)} required />
                <input placeholder="Semester / Year" value={member.semester} onChange={e => updateMember(index, 'semester', e.target.value)} required />
                <input placeholder="College name" value={member.collegeName} onChange={e => updateMember(index, 'collegeName', e.target.value)} required />
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : `Pay ${feeLabel} & Register`}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>

      <p style={{ marginTop: '14px', opacity: 0.8 }}>Required players for selected game: {requiredCount}</p>
    </section>
  );
}
