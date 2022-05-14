import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/image9.jpg"
              text="Discover the hidden beauties of the nature"
              label="Adventure Tours"
              path="/tours"
            />
            <CardItem
              src="img/image8.jpg"
              text="Explore the islands of Greece with a private boat"
              label="Luxury tours"
              path="/tours"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/image6.jpg"
              text="Visit Cappadocia's famous unique rock formations and amazing hot air ballooning opportunities"
              label="City Tours"
              path="/tours"
            />
            <CardItem
              src="img/image7.jpg"
              text="Visit Scotland's icy mountain peaks and charming villages"
              label="Sightseeing"
              path="/sightseeing"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/image5.jpg"
              text="Visit Rome for fabulous mix of history, archeology, art, religion and religious culture"
              label="Sightseeing"
              path="/sightseeing"
            />
            <CardItem
              src="img/image4.jpg"
              text="Explore Lisbon's amazing old city, the nice buildings with cute colourful tiles"
              label="Sightseeing"
              path="/sightseeing"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
