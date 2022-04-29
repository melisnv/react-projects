import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styledComponents from 'styled-components';
import Category from './Category';

const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';

const BrandSearch = () => {
  const [clickedBrand, setClickedBrand] = useState([]);
  let params = useParams();

  const fetchBrand = async () => {
    const response = await fetch(`${url}${params.brand}`);
    const brandsData = await response.json();
    console.log(brandsData);
    setClickedBrand(brandsData);
  };

  useEffect(() => {
    fetchBrand();
  }, [params.brand]);

  return (
    <BrandWrapper>
      {clickedBrand.map((br) => {
        const { id, name, api_featured_image, price, category } = br;
        return (
          <Card key={id}>
            <img src={api_featured_image} alt={name} />
            <div>
              <h2>{name}</h2>
              <h3>{price}€</h3>
              <p>{category}</p>
            </div>
          </Card>
        );
      })}
    </BrandWrapper>
  );
};

const BrandWrapper = styledComponents.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 3rem;
margin: 2rem;
`;

const Card = styledComponents.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 1.5rem;


img{
  margin: 0 auto;
  max- width: 10rem;
  height: 10rem;
  margin-bottom: .8rem;
}
`;

export default BrandSearch;
