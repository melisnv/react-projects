import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaPlaneDeparture,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h3 className="footer-subscription-heading">
          Join the newsletter to plan and book your next trip.
        </h3>
        <p className="footer-subscription-text">
          Unsubscribe anytime is possible.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
          </form>
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Press</Link>
            <Link to="/sign-up">Resources and Policies</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investor Relations</Link>
            <Link to="/sign-up">Trust and Safety</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Business</h2>
            <Link to="/sign-up">Owners</Link>
            <Link to="/sign-up">Business Advantage</Link>
            <Link to="/sign-up">Sponsored Placements</Link>
            <Link to="/sign-up">Content API</Link>
            <Link to="/sign-up">Become an Affiliate</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Explore</h2>
            <Link to="/sign-up">Travelers' Choice</Link>
            <Link to="/sign-up">Insurance</Link>
            <Link to="/sign-up">Blog</Link>
            <Link to="/sign-up">Travel Articles</Link>
            <Link to="/sign-up">Help Center</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <FaPlaneDeparture className="fa-plane" />
            </Link>
          </div>
          <small className="website-rights">
            © 2022 TRVL LLC All rights reserved.
          </small>
          <div className="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Pinterest"
              className="social-icon-link"
            >
              <FaPinterest />
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
