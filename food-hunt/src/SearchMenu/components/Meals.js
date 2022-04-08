import React from 'react';
import { Link } from 'react-router-dom';

const Meals = ({ id, name, image, info, origin }) => {
  return (
    <article className="meals">
      <div className="meals__image">
        <img src={image} alt={name} />
        <div className="meals__footer">
          <h3>{name}</h3>
          <h4>{origin}</h4>
          <p>{info}</p>
        </div>
      </div>
    </article>
  );
};

export default Meals;
