import React, { useState, useEffect } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#9CAF88').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="generator__container">
        <h3 className="container__heading">Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${
              error ? 'container__input-error' : 'container__form-input'
            }`}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#9CAF88"
          />
          <button className="generator__button" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="section__colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
