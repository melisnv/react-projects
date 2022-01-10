import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Category from './Category';
import data from './data';

const allCategories = ['All', ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(data);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu__section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu data={menuItems} />
      </section>
    </main>
  );
}

export default App;
