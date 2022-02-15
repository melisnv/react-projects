import React from 'react';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar__wrapper show' : 'sidebar__wrapper'
      }`}
    >
      <aside className="sidebar">
        <button className="btn__close" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar__links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar__sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
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
      </aside>
    </div>
  );
};

export default Sidebar;
