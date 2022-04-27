import Home from './Home';
import React from 'react';
import Makeup from './Makeup';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
    </Routes>
  );
};

export default Pages;
