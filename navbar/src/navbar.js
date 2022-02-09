import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null); // for div
  const linksRef = useRef(null); // for unordered list

  // Every time showLinks changes call the callback function
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    // if showLinks is true
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className="nav__main">
      <div className="nav__center">
        <div className="nav__header">
          <img
            className="nav__logo"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-react-6eca4.appspot.com/o/%C4%B0cons-Logos%2Fing_logo.png?alt=media&token=14983f0d-5761-4022-8ab3-bac6cf5dff5a"
            alt="logo"
          />
          <button
            className="nav__toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links__container" ref={linksContainerRef}>
          <ul className="nav__links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav__social-icons">
          {social.map((s) => {
            const { id, url, icon } = s;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
