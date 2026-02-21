import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';
import { ContactSubmission, EsportsRegistration, HackathonRegistration, OpenMicRegistration, RoboRegistration, WorkshopRegistration } from '../../lib/types';

function formatMembersForHackathon(item: HackathonRegistration) {
  return item.members
    .map((member, index) => `${index + 1}. ${member.name} (${member.gender}) | ${member.phone}`)
    .join('\n');
}

function formatMembersForRobo(item: RoboRegistration) {
  return item.members
    .map((member, index) => `${index + 1}. ${member.name} | ${member.phone} | ${member.branch} | ${member.semester} | ${member.collegeName}`)
    .join('\n');
}

export default function AdminRegistrations() {
  const [isUnlocked, setIsUnlocked] = useState(isSecretAdminUnlocked());
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const [hackathon, setHackathon] = useState<HackathonRegistration[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopRegistration[]>([]);
  const [roboRace, setRoboRace] = useState<RoboRegistration[]>([]);
  const [esports, setEsports] = useState<EsportsRegistration[]>([]);
  const [openMic, setOpenMic] = useState<OpenMicRegistration[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);

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

    fetchJson<RoboRegistration[]>('/api/admin/registrations/kinetic-showdown', { headers })
      .then(data => setRoboRace(Array.isArray(data) ? data : []))
      .catch(() => setRoboRace([]));

    fetchJson<EsportsRegistration[]>('/api/admin/registrations/esports', { headers })
      .then(data => setEsports(Array.isArray(data) ? data : []))
      .catch(() => setEsports([]));

    fetchJson<OpenMicRegistration[]>('/api/admin/registrations/open-mic', { headers })
      .then(data => setOpenMic(Array.isArray(data) ? data : []))
      .catch(() => setOpenMic([]));

    fetchJson<ContactSubmission[]>('/api/admin/registrations/contact', { headers })
      .then(data => setContacts(Array.isArray(data) ? data : []))
      .catch(() => setContacts([]));
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
      <h2 className="section-title">Registrations Dashboard</h2>
      <p className="section-subtitle">Segregated event-wise records with payment status and member details.</p>
      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin">Back To Content Panel</Link>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Hackathon Teams</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Leader</th>
                <th>Members</th>
                <th>Payment</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {hackathon.length === 0 ? (
                <tr>
                  <td colSpan={5}>No registrations yet.</td>
                </tr>
              ) : (
                hackathon.map(item => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.teamName}</strong>
                      <p>{item.memberCount} members, {item.femaleCount} female</p>
                    </td>
                    <td>
                      <strong>Leader: {item.contactName}</strong>
                      <p>{item.contactPhone}</p>
                      <p>{item.collegeName}</p>
                    </td>
                    <td style={{ whiteSpace: 'pre-wrap', minWidth: '360px' }}>{formatMembersForHackathon(item)}</td>
                    <td>
                      <strong>{item.paymentStatus || 'unknown'}</strong>
                      <p>{item.paymentId || '-'}</p>
                    </td>
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
                <th>Phone</th>
                <th>College</th>
                <th>Payment</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {workshops.length === 0 ? (
                <tr>
                  <td colSpan={6}>No registrations yet.</td>
                </tr>
              ) : (
                workshops.map(item => (
                  <tr key={item.id}>
                    <td>{item.workshop}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.collegeName}</td>
                    <td>
                      <strong>{item.paymentStatus || 'unknown'}</strong>
                      <p>{item.paymentId || '-'}</p>
                    </td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Kinetic Showdown Teams</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Team Leader</th>
                <th>Members</th>
                <th>Payment</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {roboRace.length === 0 ? (
                <tr>
                  <td colSpan={5}>No registrations yet.</td>
                </tr>
              ) : (
                roboRace.map(item => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.teamName}</strong>
                      <p>College: {item.collegeName}</p>
                      <p>Team size: {item.memberCount}</p>
                    </td>
                    <td>
                      <strong>{item.captainName}</strong>
                      <p>{item.phone}</p>
                    </td>
                    <td style={{ whiteSpace: 'pre-wrap', minWidth: '360px' }}>{formatMembersForRobo(item)}</td>
                    <td>
                      <strong>{item.paymentStatus || 'unknown'}</strong>
                      <p>{item.paymentId || '-'}</p>
                    </td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>eSports Teams</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Leader</th>
                <th>Players</th>
                <th>Payment</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {esports.length === 0 ? (
                <tr>
                  <td colSpan={5}>No registrations yet.</td>
                </tr>
              ) : (
                esports.map(item => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.teamName}</strong>
                      <p>Game: {item.game}</p>
                      <p>{item.isCollegeParticipant ? `College: ${item.collegeName || '-'}` : 'Not a college team'}</p>
                      <p>Substitute: {item.hasSubstitute ? 'Yes' : 'No'}</p>
                      {item.hasSubstitute && (
                        <p>{`${item.substitutePlayer?.name || '-'} | ${item.substitutePlayer?.gameId || '-'} | ${item.substitutePlayer?.whatsappNumber || '-'}`}</p>
                      )}
                    </td>
                    <td>
                      <strong>{item.teamLeaderName}</strong>
                      <p>{item.teamLeaderPhone}</p>
                    </td>
                    <td style={{ whiteSpace: 'pre-wrap', minWidth: '360px' }}>
                      {item.members.map((member, index) => `${index + 1}. ${member.name} | ${member.whatsappNumber || '-'} | ${member.gameId || '-'} | ${member.collegeName || '-'}`).join('\n')}
                    </td>
                    <td>
                      <strong>{item.paymentStatus || 'unknown'}</strong>
                      <p>{item.paymentId || '-'}</p>
                    </td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Contact Submissions</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Phone</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={3}>No contact submissions yet.</td>
                </tr>
              ) : (
                contacts.map(item => (
                  <tr key={item.id}>
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
        <h4>Open Mic Registrations</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Enrollment</th>
                <th>Performance</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {openMic.length === 0 ? (
                <tr>
                  <td colSpan={5}>No registrations yet.</td>
                </tr>
              ) : (
                openMic.map(item => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.name}</strong>
                      <p>{item.collegeName}</p>
                    </td>
                    <td>
                      <p>{item.phone}</p>
                    </td>
                    <td>
                      <p>{item.enrollmentNumber}</p>
                      <p>{item.year}</p>
                    </td>
                    <td>
                      <p>{item.performanceType}</p>
                      <p>{item.scriptPdfUrl || '-'}</p>
                    </td>
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
