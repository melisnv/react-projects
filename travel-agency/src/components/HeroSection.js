import React from 'react';
import hero_image from '../images/hero_image.jpg';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Planned Tours</h1>
      <p className="hero-paragraph">Top destinations for your next vacation</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
