import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/hackathon', label: 'CodeHunt Hackathon' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/kinetic-showdown', label: 'Kinetic Showdown' },
  { to: '/esports', label: 'eSports' },
  { to: '/open-mic', label: 'Open Mic' },
  { to: '/culture', label: 'Culture' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' }
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPath = location.pathname === '/robo-race' ? '/kinetic-showdown' : location.pathname;

  return (
    <header className="site-header">
      <div className="brand">
        <img className="logo-image" src="/logo.png" alt="Inertia logo" />
      </div>
      <nav className="nav-links">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mobile-nav">
        <select
          className="mobile-nav-select"
          aria-label="Select page"
          value={selectedPath}
          onChange={e => navigate(e.target.value)}
        >
          {navItems.map(item => (
            <option key={item.to} value={item.to}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="header-cta">
        <Link className="btn btn-primary" to="/register">
          Register Now
        </Link>
      </div>
    </header>
  );
}
