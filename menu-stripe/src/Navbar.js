import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.png';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    e.preventDefault();
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('btn__link')) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav__center">
        <div className="nav__header">
          <img src={logo} alt="luna logo" className="nav__logo" />
          <button className="btn btn__toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav__links">
          <li>
            <button className="btn__link" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="btn__link" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="btn__link" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn btn__signin">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
