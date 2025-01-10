import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="front" spy={true} smooth={true} offset={-100} duration={500}>
          <h2>
            V<span>ashvi</span> S<span>rivastava</span>
          </h2>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? 'active' : ''}>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            onClick={toggleMenu}
          >
            <span>A</span>bout
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            onClick={toggleMenu}
          >
            <span>S</span>ervices
          </Link>
        </li>
        <li>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            onClick={toggleMenu}
          >
            <span>P</span>rojects
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            onClick={toggleMenu}
          >
            <span>C</span>ertificates
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            onClick={toggleMenu}
          >
            <span>C</span>ontact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
