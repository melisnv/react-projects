import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const SingleMeal = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getMeal = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strArea: origin,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newMeal = { name, image, origin, instructions, ingredients };
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMeal();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!meal) {
    return <h2 className="section__title">No meal to display</h2>;
  }

  const { name, image, origin, instructions, ingredients } = meal;
  return (
    <section className="section__singlemeal single-meal__section">
      <Link to="/" className="btn btn__primary">
        Back
      </Link>
      <h2 className="title__single-meal">{name}</h2>
      <div className="meal">
        <img className="meal__img" src={image} alt={name} />
        <div className="meal__info">
          <p>
            <span className="meal__data">name : </span>
            {name}
          </p>
          <p>
            <span className="meal__data">origin :</span> {origin}
          </p>
          <p>
            <span className="meal__data">instructions :</span> {instructions}
          </p>
          <p>
            <span className="meal__data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? (
                <span className="not_highlight" key={index}>
                  {item}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
