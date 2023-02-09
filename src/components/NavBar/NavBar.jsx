import { Link, NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [navIsExpanded, setNavIsExpanded] = useState(false);

  return (
    <div className="nav">
      <button className="hamburger">
        <Hamburger
          size={30}
          duration={1.3}
          distance="sm"
          color="black"
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

      <nav className={navIsExpanded ? 'nav-contents expanded' : 'nav-contents'}>
        <NavLink exact to="/">
          <span className="nav-text">Home</span>
          <img src="" alt="Home" className="nav-img" />
        </NavLink>
        <NavLink to="/about">
          <span className="nav-text">About</span>
          <img src="" alt="About" className="nav-img" />
        </NavLink>
        <NavLink to="/projects">
          <span className="nav-text">Projects</span>
          <img src="" alt="Projects" className="nav-img" />
        </NavLink>
        <NavLink to="/connect">
          <span className="nav-text">Connect</span>
          <img src="" alt="Connect" className="nav-img" />
        </NavLink>
        <Link to={{ pathname: 'https://github.com/geosauer' }} target="_blank">
          <span className="nav-text">GitHub</span>
          <img src="" alt="Github" className="nav-img" />
        </Link>
        <Link to={{ pathname: 'https://www.linkedin.com/in/geosauer' }} target="_blank">
          <span className="nav-text">LinkedIn</span>
          <img src="" alt="LinkedIn" className="nav-img" />
        </Link>
        <a href="" target="_blank">
          <span className="nav-text">Resume</span>
          <img src="" alt="Resume" className="nav-img" />
        </a>
      </nav>
    </div>
  );
}
