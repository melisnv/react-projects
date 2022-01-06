import React, { useState, useEffect } from 'react';

const Tour = ({ id, image, info, price, name, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h3>{name}</h3>
            <h4 className="tour-price">€{price}</h4>
          </div>
          <p className="tour-paragraph">
            {readMore ? info : `${info.substring(0, 210)}...`}

            <button
              className="single-tour-button"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTours(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
