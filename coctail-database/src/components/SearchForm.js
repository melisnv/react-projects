import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return <h3>Search Component</h3>;
};

export default SearchForm;
