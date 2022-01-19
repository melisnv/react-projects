import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const InfluencerSlider = ({ data }) => {
  const [influencer, setInfluencer] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      // check if it extends the influencer list
      //then return the first element in the list
      if (index > influencer.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const previousSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = influencer.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > influencer.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    // cleaning it
    return () => clearInterval(slider);
  }, [index]); // [index] is for all indexes in the list(data)

  return (
    <section className="slider">
      <div className="slider__title">
        <h3 className="influencer__title">STYLE STORIES</h3>
        <div className="underline"></div>
      </div>

      <div className="section__slider">
        {data.map((inf, infIndex) => {
          const { id, image, name, desc } = inf;

          // influencer slide positioning
          let position = 'nextInfluencer';

          if (infIndex === index) {
            position = 'activeInfluencer';
          }
          if (
            infIndex === index - 1 ||
            (index === 0 && infIndex === influencer.length - 1)
          ) {
            position = 'previousInfluencer';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="influencer__img" />
              <h4 className="influencer__name">{name}</h4>
              <p className="influencer__style__desc">{desc}</p>
            </article>
          );
        })}
        <button className="button__previous">
          <FiChevronLeft onClick={previousSlide} />
        </button>
        <button className="button__next">
          <FiChevronRight onClick={nextSlide} />
        </button>
      </div>
    </section>
  );
};

export default InfluencerSlider;
