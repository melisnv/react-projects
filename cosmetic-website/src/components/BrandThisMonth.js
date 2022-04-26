import React from 'react';
import { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=glossier';

const BrandThisMonth = () => {
  const [brand, setBrand] = useState([]);

  const getBrand = async () => {
    const checkBrand = localStorage.getItem('brandItem');

    if (checkBrand) {
      // if item is already in the localstorage
      setBrand(JSON.parse(checkBrand));
    } else {
      // if it's not there
      const response = await fetch(url);
      const data = await response.json();

      localStorage.setItem('brandItem', JSON.stringify(data));

      setBrand(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="popular__items">
      <Wrapper>
        <h3>Sephora Loves Glossier</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {brand.map((product, id) => {
            if (product.category === null) {
              product.category = 'Skincare';
            }
            return (
              <SplideSlide key={id}>
                <Card>
                  <img src={product.api_featured_image} alt={product.name} />
                  <h2>{product.category}</h2>
                  <p>{product.name}</p>
                  <h3>{product.price}€</h3>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styledComponents.div`
margin: 4rem 0rem;

h3{
  font-family: AvantGardeItalicBlod;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  margin: 1rem;
}`;

const Card = styledComponents.div`
min-height : 20rem; 
min-width : 20rem; 
border-radius: 2rem;
overflow: hidden;
position: relative;
margin: 2rem;
background: white;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);


img{
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
}

p{
  color: #102a42;
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  font-family: AvantGardeStd;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: .5rem;
}

h2{
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: AvantGardeItalicBlod;
  letter-spacing: 2px;
  color: #102a42;
  text-align: center;
  margin-top: 1.5rem;
}

h3{
  color: #102a42;
  width: 100%;
  margin: 0 auto;
  text-transform: capitalize;
  text-align: center;
  font-family: AvantGardeBold;
  font-size: .8rem;
  letter-spacing: 1px;}
  margin-bottom: 1rem;
  `;

export default BrandThisMonth;
