import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>

      <div className="section__center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // adding more

          return (
            <article key={id}>
              <img src={image} alt={name} className="person__img" />
              <h4 className="person__name">{name}</h4>
              <p className="person__title">{title}</p>
              <p className="person__quote">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="btn__prev">
          <FiChevronLeft />
        </button>
        <button className="btn__next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
