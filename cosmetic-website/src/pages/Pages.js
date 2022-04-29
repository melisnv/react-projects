import Home from './Home';
import React from 'react';
import SearchResults from './SearchResults';
import BrandsSearchResult from './BrandsSearchResult';
import SearchBrand from '../components/SearchBrand';
import Makeup from './Makeup';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from '../components/Search';
import Category from '../components/Category';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/searched/:search" element={<SearchResults />} />
      <Route path="/brands" element={<SearchBrand />} />
      <Route path="/brands/:brand" element={<BrandsSearchResult />} />
    </Routes>
  );
};

export default Pages;
