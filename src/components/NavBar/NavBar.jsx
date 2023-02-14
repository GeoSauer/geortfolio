/* eslint-disable indent */
import { Link, NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [navIsExpanded, setNavIsExpanded] = useState(null);

  return (
    <div className="navbar">
      <button className="hamburger">
        <Hamburger
          size={30}
          duration={1.3}
          distance="sm"
          color="var(--space-cadet)"
          easing="ease-in"
          rounded
          label="Show menu"
          onToggle={(toggled) => {
            if (toggled) {
              setNavIsExpanded(true);
            } else {
              setNavIsExpanded(false);
            }
          }}
        />
      </button>

      <nav
        className={
          navIsExpanded === null
            ? 'hidden'
            : navIsExpanded
            ? 'nav-contents expanded'
            : 'nav-contents collapsed'
        }
      >
        <NavLink exact to="/">
          <span className="nav-text">Home</span>
          <img src="/home.png" alt="Home" className="nav-img" />
        </NavLink>
        <NavLink to="/about">
          <span className="nav-text">About</span>
          <img src="/about.png" alt="About" className="nav-img" />
        </NavLink>
        <NavLink to="/projects">
          <span className="nav-text">Projects</span>
          <img src="/projects.png" alt="Projects" className="nav-img" />
        </NavLink>
        <NavLink to="/connect">
          <span className="nav-text">Connect</span>
          <img src="/connect.png" alt="Connect" className="nav-img" />
        </NavLink>
        <Link to={{ pathname: 'https://github.com/geosauer' }} target="_blank">
          <span className="nav-text">GitHub</span>
          <img src="/github.png" alt="Github" className="nav-img" />
        </Link>
        <Link to={{ pathname: 'https://www.linkedin.com/in/geosauer' }} target="_blank">
          <span className="nav-text">LinkedIn</span>
          <img src="/linkedin.png" alt="LinkedIn" className="nav-img" />
        </Link>
        <a href="" target="_blank">
          <span className="nav-text">Resume</span>
          <img src="/resume.png" alt="Resume" className="nav-img" />
        </a>
      </nav>
    </div>
  );
}
