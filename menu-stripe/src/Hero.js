import React from 'react';
import phone from './images/phone.png';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero__center">
        <article className="hero__info">
          <h1>Tour selections for adventurous people</h1>
          <p>
            Turkey is home to the freshest and tastiest fruits and vegetables
            since it enjoys a temperate climate with all four seasons. The food
            here is mind-blowing! It is a true culinary paradise!
          </p>
          <button className="btn">Search now</button>
        </article>
        <article className="hero__images">
          <img src={phone} alt="mobile app" className="hero__img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
