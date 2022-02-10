import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
  // the custom hook
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar__toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn__modal" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
