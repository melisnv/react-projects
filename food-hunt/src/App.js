import React from 'react';
import Navbar from './Main/Navbar';
import Submenu from './Main/Submenu';
import Sidebar from './Main/Sidebar';
import Main from './Main/Main';
import MenuComponent from './Menu/MenuComponent';
import SearchHome from './SearchMenu/pages/SearchHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleMeal from './SearchMenu/pages/SingleMeal';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
      <Submenu />
      <MenuComponent />
      <SearchHome />
      <Router></Router>
    </>
  );
}

export default App;
