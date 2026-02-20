import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <section className="section">
      <h2 className="section-title">Choose Registration</h2>
      <p className="section-subtitle">Select the event you want to register for.</p>

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        <div className="card">
          <h4>Hackathon</h4>
          <p>Cube# 12-hour hackathon registration.</p>
          <Link className="btn btn-primary" to="/hackathon">
            Register Hackathon
          </Link>
        </div>
        <div className="card">
          <h4>Kinetic Showdown</h4>
          <p>RC car competition. Team fee INR 300.</p>
          <Link className="btn btn-primary" to="/kinetic-showdown">
            Register Kinetic Showdown
          </Link>
        </div>
        <div className="card">
          <h4>Workshops</h4>
          <p>Pick your workshop and complete payment.</p>
          <Link className="btn btn-primary" to="/workshops">
            Register Workshop
          </Link>
        </div>
        <div className="card">
          <h4>eSports</h4>
          <p>Valorant (INR 249) or BGMI (INR 99).</p>
          <Link className="btn btn-primary" to="/esports">
            Register eSports
          </Link>
        </div>
        <div className="card">
          <h4>Open Mic</h4>
          <p>Free registration with performance details.</p>
          <Link className="btn btn-primary" to="/open-mic">
            Register Open Mic
          </Link>
        </div>
      </div>
    </section>
  );
}
