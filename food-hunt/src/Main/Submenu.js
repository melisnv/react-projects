import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './Main/context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  const [columns, setColumns] = useState('column-2');

  useEffect(() => {
    setColumns('column-2');
    const submenu = container.current;
    const { center, bottom } = location;

    if (links.length === 3) {
      setColumns('column-3');
    }
    if (links.length > 3) {
      setColumns('column-4');
    }

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, links]); // everytime location changes we want to run this effect

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4 className="submenu__heading">{page}</h4>
      <div className={`submenu__center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a className="submenu__center-links" key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
