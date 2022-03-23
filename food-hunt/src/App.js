import React from 'react';
import Navbar from './Navbar';
import Submenu from './Submenu';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
      <Submenu />
    </>
  );
}

export default App;
