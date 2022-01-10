import React, { useState, useEffect } from 'react';
import data from './data';

function App() {
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>
      <h2>
        {data.map((item) => {
          const { id, order, title, dates, duties } = item;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <h4>{dates}</h4>
              <p>{duties}</p>
            </article>
          );
        })}
      </h2>
    </div>
  );
}

export default App;
