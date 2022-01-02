import React, { useState } from 'react';

// setValue is asynchronous

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((previousState) => {
        return previousState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section className="section_counter">
        <h2>Basic Counter</h2>
        <h1 className="heading_counter">{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>

      <section className="section_counter-complex">
        <h2>Complex Counter</h2>
        <h1 className="heading_counter">{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
