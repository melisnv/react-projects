import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]); // will run when the index or people array changes

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

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
          // managing the classes and positioning

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person__img" />
              <h4 className="person__name">{name}</h4>
              <p className="person__title">{title}</p>
              <p className="person__quote">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="btn__prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="btn__next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
