import React from 'react';
import { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const urlBrand =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit&product_type=lipstick';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getData = async () => {
    const checkItem = localStorage.getItem('popularItem');

    if (checkItem) {
      // if item is already in the localstorage
      setPopular(JSON.parse(checkItem));
    } else {
      // if it's not there
      const response = await fetch(urlBrand);
      const data = await response.json();

      localStorage.setItem('popularItem', JSON.stringify(data));
      setPopular(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="popular__items">
      <Wrapper>
        <h3>Popular Items</h3>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            arrows: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {popular.map((product, id) => {
            return (
              <SplideSlide key={id}>
                <Card>
                  <StyledLink to={'/products/' + product.id}>
                    <img src={product.api_featured_image} alt={product.name} />
                    <p>{product.name}</p>
                  </StyledLink>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const StyledLink = styledComponents(Link)`
text-decoration: none;
color: black;
cursor: pointer;
`;

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
min-width : 15rem; 
border-radius: 2rem;
overflow: hidden;
position: relative;
margin: 2rem;
background: white;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);


img{
  border-radius: 2rem;
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
  margin-top: 1.5rem;
  margin-bottom: .5rem;
}`;

export default Popular;
