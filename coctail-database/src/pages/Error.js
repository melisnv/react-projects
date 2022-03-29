import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error__page section">
      <div className="error__container">
        <h1>Page Not Found</h1>
        <div className="error__container-paragraph">
          <h2>
            The page you were looking for could not be found. It might have been
            removed, renamed, or did not exist in the first place.
          </h2>
        </div>

        <Link to="/" className="btn btn__primary">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
