import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Review from './Review';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
