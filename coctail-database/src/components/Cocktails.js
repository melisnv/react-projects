import React from 'react';
import { Link } from 'react-router-dom';

const Cocktails = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="cocktail__img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail__footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn__details btn__primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktails;
