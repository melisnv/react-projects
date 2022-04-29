import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styledComponents from 'styled-components';
import Category from '../components/Category';

const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';

const BrandsSearchResult = () => {
  const [clickedBrand, setClickedBrand] = useState([]);
  let params = useParams();

  const fetchBrand = async () => {
    const response = await fetch(`${url}${params.brand}`);
    const brandsData = await response.json();
    console.log(brandsData);
    setClickedBrand(brandsData);
  };

  useEffect(() => {
    fetchBrand(params.brand);
  }, [params.brand]);

  return (
    <BrandWrapper>
      {clickedBrand.map((br) => {
        if (br.category === null) {
          br.category = 'skincare';
        }
        const { id, name, api_featured_image, price, category } = br;
        return (
          <Card key={id}>
            <img src={api_featured_image} alt={name} />
            <InfoWrapper>
              <h2>{name}</h2>
              <h3>{price}€</h3>
              <p>{category}</p>
            </InfoWrapper>
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

const InfoWrapper = styledComponents.div`
margin: 1rem;

h2{
  font-size: 1.3rem;
  font-family: AvantGardeItalicBlod;
}

h3{
  font-size: 1rem;
  font-family: AvantGardeBold;
}

p{
  font-size:.6rem;
  font-family: AvantGardeStd;
  letter-spacing: 1px;

}
`;

export default BrandsSearchResult;
