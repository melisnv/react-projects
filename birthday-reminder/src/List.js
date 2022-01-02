import React, { useState } from 'react';
import data from './data';

const List = ({ people }) => {
  return (
    <>
      <h2>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div className="div__info">
                <div className="div__list">
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
                <button className="btn__remove">Remove</button>
              </div>
            </article>
          );
        })}
      </h2>
    </>
  );
};

export default List;
