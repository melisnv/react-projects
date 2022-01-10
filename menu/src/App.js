import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Category from './Category';
import data from './data';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu__section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Category />
        <Menu data={menuItems} />
      </section>
    </main>
  );
}

export default App;
