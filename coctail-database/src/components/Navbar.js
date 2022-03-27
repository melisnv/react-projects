import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
