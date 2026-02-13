import { useState } from 'react';
import { fetchJson } from '../../lib/api';

type TeamCreateResponse = { teamCode: string };

type JoinResponse = { message: string };

type Mode = 'create' | 'join';

export default function Hackathon() {
  const [mode, setMode] = useState<Mode>('create');
  const [createForm, setCreateForm] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderGender: 'female'
  });
  const [joinForm, setJoinForm] = useState({
    teamCode: '',
    memberName: '',
    memberEmail: '',
    memberPhone: '',
    memberGender: 'female'
  });
  const [result, setResult] = useState<string>('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    try {
      const res = await fetchJson<TeamCreateResponse>('/api/hackathon/teams', {
        method: 'POST',
        body: JSON.stringify(createForm)
      });
      setResult(`Team created successfully. Your team code is ${res.teamCode}`);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to create team');
    }
  };

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    try {
      const res = await fetchJson<JoinResponse>('/api/hackathon/teams/join', {
        method: 'POST',
        body: JSON.stringify(joinForm)
      });
      setResult(res.message);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to join team');
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Unstop Hackathon</h2>
      <p className="section-subtitle">
        Each team has 5 members and must include at least one female member. Create a team to get a code, or join using an existing code.
      </p>

      <div className="cards-grid" style={{ alignItems: 'center' }}>
        <div className="card">
          <h4>Team Access</h4>
          <p>Choose how you want to continue.</p>
          <select value={mode} onChange={e => setMode(e.target.value as Mode)}>
            <option value="create">Create New Team</option>
            <option value="join">Join Existing Team</option>
          </select>
          <p style={{ marginTop: '12px' }}>
            {mode === 'create'
              ? 'You will receive a unique team code after creating your team.'
              : 'Enter the unique team code shared by your team leader.'}
          </p>
        </div>
        <div className="card">
          <img src="/hackathon-hero.svg" alt="Inertia Hackathon" style={{ borderRadius: '16px' }} />
        </div>
      </div>

      {mode === 'create' ? (
        <div className="card" style={{ marginTop: '24px' }}>
          <h4>Create Team</h4>
          <form className="form-grid" onSubmit={handleCreate}>
            <input
              placeholder="Team name"
              value={createForm.teamName}
              onChange={e => setCreateForm({ ...createForm, teamName: e.target.value })}
              required
            />
            <input
              placeholder="Leader name"
              value={createForm.leaderName}
              onChange={e => setCreateForm({ ...createForm, leaderName: e.target.value })}
              required
            />
            <input
              placeholder="Leader email"
              type="email"
              value={createForm.leaderEmail}
              onChange={e => setCreateForm({ ...createForm, leaderEmail: e.target.value })}
              required
            />
            <input
              placeholder="Leader phone"
              value={createForm.leaderPhone}
              onChange={e => setCreateForm({ ...createForm, leaderPhone: e.target.value })}
              required
            />
            <select
              value={createForm.leaderGender}
              onChange={e => setCreateForm({ ...createForm, leaderGender: e.target.value })}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <button className="btn btn-primary" type="submit">
              Create Team
            </button>
          </form>
        </div>
      ) : (
        <div className="card" style={{ marginTop: '24px' }}>
          <h4>Join Team</h4>
          <form className="form-grid" onSubmit={handleJoin}>
            <input
              placeholder="Unique team code"
              value={joinForm.teamCode}
              onChange={e => setJoinForm({ ...joinForm, teamCode: e.target.value })}
              required
            />
            <input
              placeholder="Member name"
              value={joinForm.memberName}
              onChange={e => setJoinForm({ ...joinForm, memberName: e.target.value })}
              required
            />
            <input
              placeholder="Member email"
              type="email"
              value={joinForm.memberEmail}
              onChange={e => setJoinForm({ ...joinForm, memberEmail: e.target.value })}
              required
            />
            <input
              placeholder="Member phone"
              value={joinForm.memberPhone}
              onChange={e => setJoinForm({ ...joinForm, memberPhone: e.target.value })}
              required
            />
            <select
              value={joinForm.memberGender}
              onChange={e => setJoinForm({ ...joinForm, memberGender: e.target.value })}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <button className="btn btn-primary" type="submit">
              Join Team
            </button>
          </form>
        </div>
      )}

      {result && (
        <div className="banner" style={{ marginTop: '24px' }}>
          {result}
        </div>
      )}
    </section>
  );
}
