import React, { useState, useEffect } from 'react';
import data from './data';
import Catalog from './Catalog';
import Category from './Category';
import SubscriptionComponent from './SubscriptionComponent';
import InfluencerSlider from './InfluencerSlider';
import influencer_data from './influencer_data';

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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-react-6eca4.appspot.com/o/Clothing%2F1200px-Zara_Logo.svg.png?alt=media&token=933633e6-a16f-4ea5-a11a-1203a5e9d2b7"
            className="catalog__brand-logo"
            alt="Brand Logo"
          />
        </div>
        <InfluencerSlider data={influencer_data} />
        <div className="catalog__title">
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
