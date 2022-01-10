import React, { useState, useEffect } from 'react';

const Menu = ({ data }) => {
  return (
    <div className="section__center">
      {data.map((menuItem) => {
        const { id, title, category, price, img, desc } = menuItem;
        return (
          <article key={id} className="menu__item">
            <img src={img} alt={title} className="item__img" />
            <div className="item__info">
              <header>
                <h4>{title}</h4>
                <h4 className="item__price">€{price}</h4>
              </header>
              <p className="item__text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
