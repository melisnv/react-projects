import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Cocktails from './Cocktails';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section__title">
        No cocktails matched your search criteria!
      </h2>
    );
  }

  return <h3>Cocktail List Component</h3>;
};

export default CocktailList;
