import React from 'react';
import {
  FaFacebook,
  FaSearchLocation,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaPeopleCarry,
  FaUserFriends,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: 'https://www.ing.com/Home.htm',
    text: 'Home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: 'https://www.ing.com/About-us.htm',
    text: 'About Us',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: 'https://www.ing.com/Investor-relations.htm',
    text: 'Investor Relations',
    icon: <FaPeopleCarry />,
  },
  {
    id: 4,
    url: 'https://www.ing.com/ING-in-your-area.htm',
    text: 'Contact',
    icon: <FaSearchLocation />,
  },
];

export const social = [
  { id: 1, url: 'https://www.facebook.com/ING/', icon: <FaFacebook /> },
  {
    id: 2,
    url: 'https://www.instagram.com/ingturkiye/',
    icon: <FaInstagram />,
  },
  { id: 3, url: 'https://twitter.com/ING_news', icon: <FaTwitter /> },
];
