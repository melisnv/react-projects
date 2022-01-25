import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem }) => {
  return (
    <div className="todolist__div">
      {items.map((item, index) => {
        const { id, title } = item;
        return (
          <article key={id} className="todo__list-item">
            <p className="list__title">{title}</p>
            <div className="btn__container">
              <button type="button" className="btn__edit">
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn__delete"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
