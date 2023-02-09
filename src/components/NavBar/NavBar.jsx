import { Link, NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import './NavBar.css';
import { useState } from 'react';

export default function NavBar() {
  const [navIsExpanded, setNavIsExpanded] = useState(false);

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
        <Hamburger
          size={32}
          duration={0.3}
          distance="md"
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
      </nav>
    </div>
  );
}
