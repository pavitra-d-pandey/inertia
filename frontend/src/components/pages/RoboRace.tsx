import { useState } from 'react';
import { fetchJson } from '../../lib/api';

type RegisterResponse = { message: string };

export default function RoboRace() {
  const [form, setForm] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    robotName: ''
  });
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    try {
      const res = await fetchJson<RegisterResponse>('/api/robo-race/register', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      setResult(res.message);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Robo Race</h2>
      <p className="section-subtitle">Register your bot for the high-speed track challenge at Inertia 2.0.</p>

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
          <button className="btn btn-primary" type="submit">
            Register Robo Race
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
