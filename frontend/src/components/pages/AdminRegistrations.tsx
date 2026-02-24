import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';
import { ContactSubmission, EsportsRegistration, HackathonRegistration, OpenMicRegistration, RoboRegistration, WorkshopRegistration } from '../../lib/types';

type TableKey = 'codehunt' | 'kinetic' | 'esports' | 'openMic' | 'workshop';

const TABLE_PASSWORDS: Record<TableKey, string> = {
  codehunt: 'codehunt@09',
  kinetic: 'kineticshowdown@15',
  esports: 'esports@19',
  openMic: 'openmic@07',
  workshop: 'workshop@08'
};

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

  const [tableInputs, setTableInputs] = useState<Record<TableKey, string>>({
    codehunt: '',
    kinetic: '',
    esports: '',
    openMic: '',
    workshop: ''
  });
  const [tableUnlocked, setTableUnlocked] = useState<Record<TableKey, boolean>>({
    codehunt: false,
    kinetic: false,
    esports: false,
    openMic: false,
    workshop: false
  });

  const [codehunt, setCodehunt] = useState<HackathonRegistration[]>([]);
  const [kinetic, setKinetic] = useState<RoboRegistration[]>([]);
  const [esports, setEsports] = useState<EsportsRegistration[]>([]);
  const [openMic, setOpenMic] = useState<OpenMicRegistration[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopRegistration[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    if (!isUnlocked) {
      return;
    }

    const headers = { 'X-Admin-Token': getSecretAdminToken() };

    fetchJson<HackathonRegistration[]>('/api/admin/registrations/hackathon', { headers })
      .then(data => setCodehunt(Array.isArray(data) ? data : []))
      .catch(() => setCodehunt([]));

    fetchJson<RoboRegistration[]>('/api/admin/registrations/kinetic-showdown', { headers })
      .then(data => setKinetic(Array.isArray(data) ? data : []))
      .catch(() => setKinetic([]));

    fetchJson<EsportsRegistration[]>('/api/admin/registrations/esports', { headers })
      .then(data => setEsports(Array.isArray(data) ? data : []))
      .catch(() => setEsports([]));

    fetchJson<OpenMicRegistration[]>('/api/admin/registrations/open-mic', { headers })
      .then(data => setOpenMic(Array.isArray(data) ? data : []))
      .catch(() => setOpenMic([]));

    fetchJson<WorkshopRegistration[]>('/api/admin/registrations/workshops', { headers })
      .then(data => setWorkshops(Array.isArray(data) ? data : []))
      .catch(() => setWorkshops([]));

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

  const unlockTable = (table: TableKey) => {
    if (tableInputs[table] !== TABLE_PASSWORDS[table]) {
      setResult('Table password is incorrect.');
      return;
    }
    setResult('');
    setTableUnlocked(prev => ({ ...prev, [table]: true }));
    setTableInputs(prev => ({ ...prev, [table]: '' }));
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
      <h2 className="section-title">Management Panel - Event Tables</h2>
      <p className="section-subtitle">Each table has separate access.</p>
      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin">Back To Content Panel</Link>
      </div>
      {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>CodeHunt Teams</h4>
        {!tableUnlocked.codehunt ? (
          <div className="form-grid">
            <input
              type="password"
              placeholder="Enter table password"
              value={tableInputs.codehunt}
              onChange={e => setTableInputs(prev => ({ ...prev, codehunt: e.target.value }))}
            />
            <button className="btn btn-primary" type="button" onClick={() => unlockTable('codehunt')}>Unlock Table</button>
          </div>
        ) : (
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
                {codehunt.length === 0 ? (
                  <tr>
                    <td colSpan={5}>No registrations yet.</td>
                  </tr>
                ) : (
                  codehunt.map(item => (
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
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Kinetic Showdown Teams</h4>
        {!tableUnlocked.kinetic ? (
          <div className="form-grid">
            <input
              type="password"
              placeholder="Enter table password"
              value={tableInputs.kinetic}
              onChange={e => setTableInputs(prev => ({ ...prev, kinetic: e.target.value }))}
            />
            <button className="btn btn-primary" type="button" onClick={() => unlockTable('kinetic')}>Unlock Table</button>
          </div>
        ) : (
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
                {kinetic.length === 0 ? (
                  <tr>
                    <td colSpan={5}>No registrations yet.</td>
                  </tr>
                ) : (
                  kinetic.map(item => (
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
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>eSports Teams</h4>
        {!tableUnlocked.esports ? (
          <div className="form-grid">
            <input
              type="password"
              placeholder="Enter table password"
              value={tableInputs.esports}
              onChange={e => setTableInputs(prev => ({ ...prev, esports: e.target.value }))}
            />
            <button className="btn btn-primary" type="button" onClick={() => unlockTable('esports')}>Unlock Table</button>
          </div>
        ) : (
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
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Open Mic Registrations</h4>
        {!tableUnlocked.openMic ? (
          <div className="form-grid">
            <input
              type="password"
              placeholder="Enter table password"
              value={tableInputs.openMic}
              onChange={e => setTableInputs(prev => ({ ...prev, openMic: e.target.value }))}
            />
            <button className="btn btn-primary" type="button" onClick={() => unlockTable('openMic')}>Unlock Table</button>
          </div>
        ) : (
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
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Workshop Registrations</h4>
        {!tableUnlocked.workshop ? (
          <div className="form-grid">
            <input
              type="password"
              placeholder="Enter table password"
              value={tableInputs.workshop}
              onChange={e => setTableInputs(prev => ({ ...prev, workshop: e.target.value }))}
            />
            <button className="btn btn-primary" type="button" onClick={() => unlockTable('workshop')}>Unlock Table</button>
          </div>
        ) : (
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
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Contact Us Submissions</h4>
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Phone</th>
                <th>Issue</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={4}>No contact submissions yet.</td>
                </tr>
              ) : (
                contacts.map(item => (
                  <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td style={{ whiteSpace: 'pre-wrap', minWidth: '280px' }}>{item.issue}</td>
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
