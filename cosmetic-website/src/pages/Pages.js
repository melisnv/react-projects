import Home from './Home';
import React from 'react';
import SearchResults from './SearchResults';
import Makeup from './Makeup';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/searched/:search" element={<SearchResults />} />
    </Routes>
  );
};

export default Pages;
