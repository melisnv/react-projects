import Home from './Home';
import React from 'react';
import SearchResults from './SearchResults';
import BrandsSearchResult from './BrandsSearchResult';
import SearchBrand from '../components/SearchBrand';
import Makeup from './Makeup';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/searched/:search" element={<SearchResults />} />
      <Route path="/brands" element={<SearchBrand />} />
      <Route path="/brands/:brand" element={<BrandsSearchResult />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Pages;
