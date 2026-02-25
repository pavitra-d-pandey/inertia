import { Link } from 'react-router-dom';

export default function Hackathon() {
  return (
    <section className="section">
      <h2 className="section-title">CodeHunt Hackathon</h2>
      <div className="banner" style={{ marginBottom: '18px' }}>
        <strong>Top Note: We only need the solution for the idea.</strong>
        <p style={{ margin: '8px 0 0' }}>
          Focus on solving the problem clearly. Your implementation can be simple, scrappy, or polished. Vibe coding is allowed.
        </p>
      </div>
      <div className="banner" style={{ marginBottom: '18px' }}>
        <strong>Important: Team size is fixed to 4 members only</strong>
        <p style={{ margin: '8px 0 0' }}>1 Leader + 3 Team Members</p>
      </div>
      <div className="prize-pool-spotlight">
        <span className="prize-pool-label">Prize Pool</span>
        <div className="prize-pool-value">INR 12,000</div>
      </div>
      <p className="section-subtitle">Two-day hackathon with internship interview opportunities, prototype building, and live stage presentations.</p>

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        <div className="card">
          <h4>Hackathon Sponsors</h4>
          <div className="sponsor-row">
            <img className="sponsor-logo" src="/time.png" alt="Time sponsor" onError={e => ((e.currentTarget.style.display = 'none'))} />
            <img className="sponsor-logo" src="/upgrad.png" alt="upGrad sponsor" onError={e => ((e.currentTarget.style.display = 'none'))} />
          </div>
          <p style={{ marginTop: '12px' }}>Sponsors: TIME and upGrad.</p>
        </div>
      </div>

      <div className="banner" style={{ marginTop: '22px' }}>
        <h4 style={{ marginTop: 0 }}>Why Join CodeHunt Hackathon</h4>
        <ul>
          <li><strong>Day 1 (26 February):</strong> Build your prototype.</li>
          <li><strong>Day 2 (27 February):</strong> Present and explain your prototype live on stage.</li>
          <li><strong>Team size rule:</strong> Exactly 4 members (1 leader + 3 members).</li>
          <li>Problem statements are available in your team dashboard.</li>
          <li><strong>Vibe coding is allowed:</strong> Use AI tools, rapid prototyping, and creative workflows to build your solution faster.</li>
          <li>100% internship opportunity path: 10 participants will be shortlisted for internship interviews at upGrad or TIME.</li>
          <li>Refreshments will be provided during the hackathon.</li>
          <li>Strong exposure for students across Jabalpur.</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Problem Statements</h4>
        <p>Use your Team ID to unlock your assigned theme and choose your final problem statement.</p>
        <Link className="btn btn-primary" to="/problemstatement">
          View Problem Statement
        </Link>
      </div>
    </section>
  );
}
