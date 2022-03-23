import React from 'react';
import { useGlobalContext } from './context';

const Main = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="main__section">
      <div className="main__center">
        <article className="main__info">
          <h1>Delicious</h1>
          <h2>Appease the Hunger</h2>
          <p>
            Thousands of different kinds of food from every cuisine are only a
            few clicks away. You may select one of the cuisines that best suits
            your taste, and enjoy easy and fast online food ordering.{' '}
          </p>
          <button className="btn__main">Explore</button>
        </article>
      </div>
    </section>
  );
};

export default Main;
