import React, { useState, useEffect } from 'react';
import data from './data';
import Catalog from './Catalog';
import Category from './Category';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [catalogItems, setCatalogItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == 'all') {
      setCatalogItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setCatalogItems(newItems);
  };

  return (
    <main>
      <section className="catalog__section">
        <div className="catalog__title">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/birthday-react-6eca4.appspot.com/o/Clothing%2Fzara_icon.png?alt=media&token=2b1c6098-44db-4a21-bd64-f1f3062f590a"
            className="catalog__brand-logo"
            alt="Brand Logo"
          />
          <h2>TRENDS</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Catalog data={catalogItems} />
      </section>
    </main>
  );
}

export default App;
