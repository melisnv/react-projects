import React from 'react';
import { useGlobalContext } from '../contextSearch';
import Loading from './Loading';
import Meals from './Meals';

const MenuList = () => {
  const { menu, loading } = useGlobalContext();

  if (loading) {
    <Loading />;
  }

  if (menu.length < 1) {
    return (
      <h2 className="menulist__subtitle">
        No meals matched to the search criteria.
      </h2>
    );
  }

  return (
    <section className="menulist__section">
      <h2 className="menulist__title">Meals</h2>
      <div className="menulist__center">
        {menu.map((item) => {
          return <Meals key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default MenuList;
