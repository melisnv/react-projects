import React from 'react';
import cocktailphoto from '../images/cocktail_about.jpg';

const About = () => {
  return (
    <section className="section about__section">
      <div className="about__section-photo">
        <img src={cocktailphoto} alt="About Us" />
      </div>
      <h1 className="section__title">About Us</h1>
      <p className="section__paragraph">
        We are restless people who like to try new things with our drinks. We
        are continually trying to come up with novel flavors that you won't find
        anywhere else. We developed completely new flavor combinations to spice
        up the classic cocktails we all know and love as a result of our
        unquenchable need for unique combinations. Our Matcha Mojito is ready to
        drink with a slice of lime and some ice.
      </p>
    </section>
  );
};

export default About;
