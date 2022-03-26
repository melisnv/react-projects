import React from 'react';
import Navbar from './Main/Navbar';
import Submenu from './Submenu';
import Sidebar from './Main/Sidebar';
import Main from './Main/Main';
import MenuComponent from './Menu/MenuComponent';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
      <Submenu />
      <MenuComponent />
    </>
  );
}

export default App;
