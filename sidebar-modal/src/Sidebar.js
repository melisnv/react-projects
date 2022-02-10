import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show__sidebar' : 'sidebar'}`}>
      <div className="sidebar__header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/birthday-react-6eca4.appspot.com/o/%C4%B0cons-Logos%2Fing_logo.png?alt=media&token=14983f0d-5761-4022-8ab3-bac6cf5dff5a"
          alt="Logo"
          className="sidebar__logo"
        />
        <button className="btn__sidebar-close" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar__links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar_social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
