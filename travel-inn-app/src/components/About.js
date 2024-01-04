import React from 'react'
import aboutImg from '../images/about.jpg'
import { Title } from './Title';

export const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to Travel Inn, where we've been crafting
            unforgettable journeys since 2005. Our passion for exploration
            drives us to offer exceptional travel experiences, connecting people
            with captivating destinations worldwide. Committed to sustainability
            and authenticity, we minimize environmental impact while supporting
            local communities.
          </p>
          <p>
            Our expert guides ensure you delve into the heart of each
            destination, creating memories that last a lifetime. Join us for
            adventures that go beyond the ordinary, making your travel dreams a
            reality.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
