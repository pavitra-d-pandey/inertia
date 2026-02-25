import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';
import { HackathonIDCardRequest, HackathonIssuedIDCard, HackathonProblemStatementChoice } from '../../lib/types';

type GenerateCodeResponse = {
  message: string;
  code: string;
};

type IssuedCodeLog = {
  requestId: number;
  teamName: string;
  code: string;
  issuedAt: string;
};

function participantKey(name: string, phone: string): string {
  return `${name.trim().toLowerCase()}|${phone.replace(/\D/g, '')}`;
}

export default function HackathonManager() {
  const [isUnlocked, setIsUnlocked] = useState(isSecretAdminUnlocked());
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState<HackathonIDCardRequest[]>([]);
  const [selected, setSelected] = useState<Record<number, Record<string, boolean>>>({});
  const [processingRequestId, setProcessingRequestId] = useState<number | null>(null);
  const [issuedLogs, setIssuedLogs] = useState<IssuedCodeLog[]>([]);
  const [issuedTeams, setIssuedTeams] = useState<HackathonIssuedIDCard[]>([]);
  const [problemChoices, setProblemChoices] = useState<HackathonProblemStatementChoice[]>([]);

  const loadRequests = async () => {
    if (!isUnlocked) {
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const data = await fetchJson<HackathonIDCardRequest[]>('/api/admin/hackathon/id-card/requests', {
        headers: { 'X-Admin-Token': getSecretAdminToken() }
      });
      const choices = await fetchJson<HackathonProblemStatementChoice[]>('/api/admin/hackathon/problem-statements', {
        headers: { 'X-Admin-Token': getSecretAdminToken() }
      });
      const issued = await fetchJson<HackathonIssuedIDCard[]>('/api/admin/hackathon/id-card/issued', {
        headers: { 'X-Admin-Token': getSecretAdminToken() }
      });
      const safe = Array.isArray(data) ? data : [];
      const safeChoices = Array.isArray(choices) ? choices : [];
      const safeIssued = Array.isArray(issued) ? issued : [];
      setRequests(safe);
      setProblemChoices(safeChoices);
      setIssuedTeams(safeIssued);
      setSelected(prev => {
        const next: Record<number, Record<string, boolean>> = {};
        for (const req of safe) {
          next[req.requestId] = prev[req.requestId] || {};
        }
        return next;
      });
    } catch (err) {
      setRequests([]);
      setProblemChoices([]);
      setIssuedTeams([]);
      setResult(err instanceof Error ? err.message : 'Unable to load requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
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

  const toggleParticipant = (requestId: number, key: string) => {
    setSelected(prev => ({
      ...prev,
      [requestId]: {
        ...(prev[requestId] || {}),
        [key]: !(prev[requestId] || {})[key]
      }
    }));
  };

  const generateCode = async (request: HackathonIDCardRequest) => {
    const flags = selected[request.requestId] || {};
    const picked = request.participants
      .filter(item => flags[participantKey(item.name, item.phone)])
      .map(item => ({ name: item.name, phone: item.phone }));

    if (picked.length === 0) {
      setResult(`Select at least one participant for ${request.teamName}.`);
      return;
    }

    setProcessingRequestId(request.requestId);
    setResult('');
    try {
      const res = await fetchJson<GenerateCodeResponse>('/api/admin/hackathon/id-card/generate-code', {
        method: 'POST',
        headers: { 'X-Admin-Token': getSecretAdminToken() },
        body: JSON.stringify({ requestId: request.requestId, participants: picked })
      });

      setIssuedLogs(prev => [
        {
          requestId: request.requestId,
          teamName: request.teamName,
          code: res.code,
          issuedAt: new Date().toLocaleString()
        },
        ...prev
      ]);
      setRequests(prev => prev.filter(item => item.requestId !== request.requestId));
      setResult(`${request.teamName}: 4-digit code generated successfully.`);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to generate code');
    } finally {
      setProcessingRequestId(null);
    }
  };

  if (!isUnlocked) {
    return (
      <section className="section">
        <h2 className="section-title">Hackathon Manager Access</h2>
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
      <h2 className="section-title">Hackathon Manager</h2>
      <p className="section-subtitle">Review team requests, select participants, and generate 4-digit ID-card code.</p>

      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin">Back To Admin</Link>
        <button className="btn btn-ghost" type="button" onClick={loadRequests} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh Requests'}
        </button>
      </div>

      {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        {requests.map(request => (
          <div className="card" key={request.requestId}>
            <h4>{request.teamName}</h4>
            <p><strong>Team ID:</strong> {request.teamId}</p>
            <p><strong>College:</strong> {request.collegeName}</p>
            <p><strong>Leader:</strong> {request.leaderName} ({request.leaderPhone})</p>
            <p><strong>Requested At:</strong> {request.requestedAt}</p>

            <div className="form-grid" style={{ marginTop: '12px' }}>
              {request.participants.map(participant => {
                const key = participantKey(participant.name, participant.phone);
                const checked = (selected[request.requestId] || {})[key] || false;
                return (
                  <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      style={{ width: '18px', height: '18px' }}
                      checked={checked}
                      onChange={() => toggleParticipant(request.requestId, key)}
                    />
                    <span>{participant.name} | {participant.phone} | {participant.role}{participant.gender ? ` | ${participant.gender}` : ''}</span>
                  </label>
                );
              })}
            </div>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => generateCode(request)}
              disabled={processingRequestId === request.requestId}
              style={{ marginTop: '16px' }}
            >
              {processingRequestId === request.requestId ? 'Generating...' : 'Generate 4-Digit Code'}
            </button>
          </div>
        ))}
      </div>

      {requests.length === 0 && (
        <div className="banner" style={{ marginTop: '20px' }}>
          No pending hackathon ID-card requests.
        </div>
      )}

      {issuedLogs.length > 0 && (
        <div className="card" style={{ marginTop: '24px' }}>
          <h4>Recently Generated Codes</h4>
          <div className="table-wrap">
            <table className="admin-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Code</th>
                  <th>Generated At</th>
                </tr>
              </thead>
              <tbody>
                {issuedLogs.map(item => (
                  <tr key={`${item.requestId}-${item.code}-${item.issuedAt}`}>
                    <td>{item.teamName}</td>
                    <td><strong>{item.code}</strong></td>
                    <td>{item.issuedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Chosen Problem Statements</h4>
        <div className="table-wrap">
          <table className="admin-table" style={{ minWidth: '920px' }}>
            <thead>
              <tr>
                <th>Team ID</th>
                <th>Team Name</th>
                <th>Leader</th>
                <th>Theme</th>
                <th>Domain</th>
                <th>Chosen Statement</th>
                <th>Confirmed At</th>
              </tr>
            </thead>
            <tbody>
              {problemChoices.length === 0 ? (
                <tr>
                  <td colSpan={7}>No team has confirmed a problem statement yet.</td>
                </tr>
              ) : (
                problemChoices.map(item => (
                  <tr key={`${item.teamId}-${item.confirmedAt}-${item.title}`}>
                    <td><strong>{item.teamId}</strong></td>
                    <td>{item.teamName}</td>
                    <td>{item.leaderName}</td>
                    <td>{item.themeName}</td>
                    <td>{item.domain}</td>
                    <td>{item.title}</td>
                    <td>{item.confirmedAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Approved e-ID Teams (Fixed Team IDs)</h4>
        <div className="table-wrap">
          <table className="admin-table" style={{ minWidth: '760px' }}>
            <thead>
              <tr>
                <th>Team ID</th>
                <th>Team Name</th>
                <th>Leader</th>
                <th>Code</th>
                <th>Approved At</th>
              </tr>
            </thead>
            <tbody>
              {issuedTeams.length === 0 ? (
                <tr>
                  <td colSpan={5}>No team has been approved for e-ID yet.</td>
                </tr>
              ) : (
                issuedTeams.map(item => (
                  <tr key={`${item.teamId}-${item.code}-${item.issuedAt}`}>
                    <td><strong>{item.teamId}</strong></td>
                    <td>{item.teamName}</td>
                    <td>{item.leaderName}</td>
                    <td>{item.code}</td>
                    <td>{item.issuedAt}</td>
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
