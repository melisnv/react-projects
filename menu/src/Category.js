import React, { useState, useEffect } from 'react';

const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn__container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter__btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
