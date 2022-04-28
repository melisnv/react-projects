import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styledComponents from 'styled-components';

const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=';

const SearchResults = () => {
  const [searchedItems, setSearchedItems] = useState([]);
  let params = useParams();

  const getSearchedItem = async () => {
    const response = await fetch(`${url}${params.search}`);
    const data = await response.json();
    console.log(data);
    setSearchedItems(data);
  };

  useEffect(() => {
    getSearchedItem(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedItems.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image_link} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}€</p>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styledComponents.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 3rem;
margin: 2rem;
`;

const Card = styledComponents.div`
display: grid;
grid-template-columns: 1fr;
margin: 1rem;

img{
  margin: 0 auto;
  max- width: 10rem;
  height: 10rem;
  margin-bottom: .8rem;
}

a{
  text-decoration: none; 
}

h4{
  text-align: center;
  padding: 1rem;
  max-width: 15rem;

  text-align: center;
  font-family: AvantGardeStd;
  font-size: 1rem;
  margin: 0 auto;
  letter-spacing: 2px;
}

p{
    text-align: center;
    padding: 1rem;
    text-align: center;
    font-family: AvantGardeBold;
    font-size: .8rem;
    margin: 0 auto;
    letter-spacing: 2px;
}`;

export default SearchResults;
