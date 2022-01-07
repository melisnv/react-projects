import React, { useState, useEffect } from 'react';
import {
  FaHeart,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import people from './data';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number >= people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="btn-prev" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="btn-next" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn-random" onClick={randomReview}>
        Random Reviews
      </button>
    </article>
  );
};

export default Review;
