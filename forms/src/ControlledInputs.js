import React, { useState, useEffect } from 'react';

// Could add onSubmit on the form element or add it on the button.

const ControlledInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent refreshing the page
    console.log('Subscribed!');
  };

  return (
    <div>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail : </label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </article>
    </div>
  );
};

export default ControlledInput;
