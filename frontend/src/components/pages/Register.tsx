import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <section className="section">
      <h2 className="section-title">Choose Registration</h2>
      <p className="section-subtitle">Select the event you want to register for.</p>

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        <div className="card">
          <h4>Hackathon</h4>
          <p>4-member team registration with payment.</p>
          <Link className="btn btn-primary" to="/hackathon">
            Register Hackathon
          </Link>
        </div>
        <div className="card">
          <h4>Robo Race</h4>
          <p>Choose team size and register all members.</p>
          <Link className="btn btn-primary" to="/robo-race">
            Register Robo Race
          </Link>
        </div>
        <div className="card">
          <h4>Workshops</h4>
          <p>Pick your workshop and complete payment.</p>
          <Link className="btn btn-primary" to="/workshops">
            Register Workshop
          </Link>
        </div>
      </div>
    </section>
  );
}
