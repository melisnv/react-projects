import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const previousSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
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
        <button className="btn__prev" onClick={previousSlide}>
          <FiChevronLeft />
        </button>
        <button className="btn__next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
