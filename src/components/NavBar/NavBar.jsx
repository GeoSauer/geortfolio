import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav className="fancy-ternary-toggle">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/connect">Connect</NavLink>
        <Link to={{ pathname: 'https://github.com/geosauer' }} target="_blank">
          GitHub
        </Link>
        <Link to={{ pathname: 'https://www.linkedin.com/in/geosauer' }} target="_blank">
          LinkedIn
        </Link>
        <a href="" target="_blank">
          Resume
        </a>
      </nav>
    </div>
  );
}
