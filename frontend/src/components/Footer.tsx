import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">Inertia 2026</p>
          <p className="footer-text">
            The annual festival of Jabalpur Engineering College. Build, compete, and celebrate innovation.
          </p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p className="footer-text">Jabalpur Engineering College, Jabalpur</p>
          <Link className="btn btn-ghost" to="/contact">Contact Page</Link>
        </div>
        <div>
          <p className="footer-title">Events</p>
          <p className="footer-text">CodeHunt Hackathon, Workshops, Kinetic Showdown, eSports, Open Mic</p>
          <p className="footer-text">Culture Fest and gallery highlights</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with ❤️ by Pavitra Durgesh Pandey</p>
      </div>
    </footer>
  );
}
