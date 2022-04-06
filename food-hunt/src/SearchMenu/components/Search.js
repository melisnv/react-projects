import React from 'react';

const Search = () => {
  return (
    <section className="search__section">
      <form className="search__form">
        <div className="search__control">
          <label htmlFor="name">Search for meals</label>
          <input type="text" id="name" />
        </div>
      </form>
    </section>
  );
};

export default Search;
