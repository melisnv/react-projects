import React from 'react';
import Navbar from './Main/Navbar';
import Submenu from './Main/Submenu';
import Sidebar from './Main/Sidebar';
import Main from './Main/Main';
import MenuComponent from './Menu/MenuComponent';
import SearchHome from './SearchMenu/pages/SearchHome';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
      <Submenu />
      <MenuComponent />
      <SearchHome />
    </>
  );
}

export default App;
