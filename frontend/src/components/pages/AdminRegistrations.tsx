import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';
import { HackathonRegistration, RoboRegistration, WorkshopRegistration } from '../../lib/types';

export default function AdminRegistrations() {
  const [isUnlocked, setIsUnlocked] = useState(isSecretAdminUnlocked());
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const [hackathon, setHackathon] = useState<HackathonRegistration[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopRegistration[]>([]);
  const [roboRace, setRoboRace] = useState<RoboRegistration[]>([]);

  useEffect(() => {
    if (!isUnlocked) {
      return;
    }

    const headers = { 'X-Admin-Token': getSecretAdminToken() };
    fetchJson<HackathonRegistration[]>('/api/admin/registrations/hackathon', { headers })
      .then(data => setHackathon(Array.isArray(data) ? data : []))
      .catch(() => setHackathon([]));

    fetchJson<WorkshopRegistration[]>('/api/admin/registrations/workshops', { headers })
      .then(data => setWorkshops(Array.isArray(data) ? data : []))
      .catch(() => setWorkshops([]));

    fetchJson<RoboRegistration[]>('/api/admin/registrations/robo-race', { headers })
      .then(data => setRoboRace(Array.isArray(data) ? data : []))
      .catch(() => setRoboRace([]));
  }, [isUnlocked]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = unlockSecretAdmin(password);
    if (!ok) {
      setResult('Wrong password.');
      return;
    }
    setResult('');
    setPassword('');
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return (
      <section className="section">
        <h2 className="section-title">Management Access - Registrations</h2>
        <div className="card" style={{ maxWidth: '520px' }}>
          <h4>Enter Password</h4>
          <form className="form-grid" onSubmit={handleUnlock}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">Unlock</button>
          </form>
          {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Registrations</h2>
      <p className="section-subtitle">All submitted registrations across Hackathon, Workshops, and Robo Race.</p>
      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin">Back To Content Panel</Link>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Hackathon Registrations</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Code</th>
                <th>Member</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {hackathon.length === 0 ? (
                <tr>
                  <td colSpan={7}>No registrations yet.</td>
                </tr>
              ) : (
                hackathon.map(item => (
                  <tr key={item.id}>
                    <td>{item.teamName}</td>
                    <td>{item.teamCode}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Workshop Registrations</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Workshop</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {workshops.length === 0 ? (
                <tr>
                  <td colSpan={5}>No registrations yet.</td>
                </tr>
              ) : (
                workshops.map(item => (
                  <tr key={item.id}>
                    <td>{item.workshop}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Robo Race Registrations</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Captain</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Robot</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {roboRace.length === 0 ? (
                <tr>
                  <td colSpan={6}>No registrations yet.</td>
                </tr>
              ) : (
                roboRace.map(item => (
                  <tr key={item.id}>
                    <td>{item.teamName}</td>
                    <td>{item.captainName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.robotName}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
