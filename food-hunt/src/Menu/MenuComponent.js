import React from 'react';
import { useState, useEffect } from 'react';
import data from './item_data';
import Categories from './Categories';
import Menu from './Menu';

const uniqueCategories = ['All', ...new Set(data.map((item) => item.category))];

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu__section">
        <div className="menu__section-title">
          <h2>Our Menu</h2>
          <div className="menu__underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default MenuComponent;
