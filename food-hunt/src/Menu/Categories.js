const Categories = ({ categories, filterItems }) => {
  return (
    <div className="buttons_container">
      {categories.map((category, index) => {
        return (
          <button
            className="category__button"
            key={index}
            type="button"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
