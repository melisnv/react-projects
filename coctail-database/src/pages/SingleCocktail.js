import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strGlass: glass,
            strAlcoholic: info,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]); // everytime id changes

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section__title">No cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section single-cocktail__section">
      <Link to="/" className="btn btn__primary">
        Back
      </Link>
      <h2 className="section__title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink__info">
          <p>
            <span className="drink__data">name : {name}</span>
          </p>
          <p>
            <span className="drink__data">category : {category}</span>
          </p>
          <p>
            <span className="drink__data">info : {info}</span>
          </p>
          <p>
            <span className="drink__data">glass : {glass}</span>
          </p>
          <p>
            <span className="drink__data">instructions : {instructions}</span>
          </p>
          <p>
            <span className="drink__data">
              ingredients :{' '}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
