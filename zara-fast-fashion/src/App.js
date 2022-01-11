import React from 'react';
import data from './data';

function App() {
  return (
    <div className="App">
      <h2>Zara</h2>
      {data.map((item) => {
        const { id, title, category, price, img } = item;
        return (
          <article key={id}>
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{price}</h4>
          </article>
        );
      })}
    </div>
  );
}

export default App;
