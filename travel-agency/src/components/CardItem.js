import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(probs) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={probs.path}>
          <figure className="cards__item__pic-wrap" data-category={probs.label}>
            <img
              src={probs.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{probs.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
