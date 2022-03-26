import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section__center">
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu__item">
            <img src={img} alt={title} className="menu__item-photo" />
            <div className="menu__item-info">
              <header className="menu__item-header">
                <h4 className="heading__title">{title}</h4>
                <h4 className="heading__price">{price}</h4>
              </header>
              <p className="item__description">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
