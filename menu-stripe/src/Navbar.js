import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.png';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__header">
          <img src={logo} alt="luna logo" className="nav__logo" />
          <button className="btn btn__toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav__links">
          <li>
            <button className="btn__link">products</button>
          </li>
          <li>
            <button className="btn__link">developers</button>
          </li>
          <li>
            <button className="btn__link">company</button>
          </li>
        </ul>
        <button className="btn btn__signin">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
