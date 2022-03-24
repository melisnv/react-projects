import React from 'react';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar__wrapper show' : 'sidebar__wrapper'
      }`}
    >
      <div className="sidebar">
        <button className="close__btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar__links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="sidebar__article">
                <h4>{page}</h4>
                <div className="sidebar__sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
