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
      <h2 className="section-title">Core Team</h2>

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
