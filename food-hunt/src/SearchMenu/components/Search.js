import React, { useEffect } from 'react';
import { useGlobalContext } from '../contextSearch';

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search__section">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__control">
          <label htmlFor="name">Search for meals</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchMeal}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
