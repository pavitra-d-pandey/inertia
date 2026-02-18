import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/hackathon', label: 'Hackathon' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/robo-race', label: 'Robo Race' },
  { to: '/culture', label: 'Culture' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' }
];

export default function Header() {
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
      <div className="header-cta">
        <Link className="btn btn-primary" to="/register">
          Register Now
        </Link>
      </div>
    </header>
  );
}
