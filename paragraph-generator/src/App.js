import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); // converting string to int

    if (count <= 0) {
      amount = 1;
    }

    if (count > 20) {
      amount = 20;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section__generator">
      <h3 className="generator__title">Random Paragraph Generator</h3>
      <form className="generator__form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="generator__form-label">
          Paragraphs :
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="generator__form-input"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="generator__btn">
          Generate
        </button>
      </form>
      <article className="generator__paragraph">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
