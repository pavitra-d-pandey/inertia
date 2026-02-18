import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { TeamMember } from '../../lib/types';

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetchJson<TeamMember[]>('/api/team')
      .then(data => setTeam(Array.isArray(data) ? data : []))
      .catch(() => setTeam([]));
  }, []);

  return (
    <section className="section">
      <div className="team-feature-wrap">
        <div className="team-card team-feature-card">
          <img src="/photo.jpg" alt="Pavitra Durgesh Pandey" />
          <div className="team-meta">
            <strong>Pavitra Durgesh Pandey</strong>
            <p className="team-role">Technical Head</p>
            <p>Created the official website of Inertia 2.0</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Core Team</h2>
      <p className="section-subtitle">
        Meet the team behind Inertia 2.0.
      </p>

      {team.length === 0 ? (
        <div className="banner empty-state">Team details will be published soon.</div>
      ) : (
        <div className="team-grid">
          {team.map(member => (
            <div className="team-card" key={member.id}>
              <img src={member.imageUrl} alt={member.name} />
              <div className="team-meta">
                <strong>{member.name}</strong>
                <p className="team-role">{member.role}</p>
                <p className="team-preview">{member.preview}</p>
                <p>{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
