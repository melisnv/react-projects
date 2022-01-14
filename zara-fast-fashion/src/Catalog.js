import React, { useEffect, useState } from 'react';

const Catalog = ({ data }) => {
  return (
    <div className="catalog__center">
      {data.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="catalog__item">
            <img src={img} alt={title} className="catalog__item-img" />
            <div className="catalog__item-details">
              <header className="catalog__item-header">
                <h4>{title}</h4>
                <h4 className="catalog__item-price">€{price}</h4>
              </header>
              <p className="catalog__item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Catalog;
