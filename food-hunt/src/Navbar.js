import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import signin from './images/sign_in.svg';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__header">
          <img src={logo} className="nav__logo" alt="food hunt" />
          <button className="btn toggle__btn" onClick={openSidebar}>
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

        <button className="btn btn__signin">
          <img src={signin} alt="Sign In" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
