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
          duration={0.3}
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
