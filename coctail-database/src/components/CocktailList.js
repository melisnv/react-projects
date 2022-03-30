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
      <h2 className="cocktails__section-title">
        No cocktails matched your search criteria!
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="cocktails__section-title">cocktails</h2>
      <div className="cocktails__center">
        {cocktails.map((item) => {
          return <Cocktails key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
