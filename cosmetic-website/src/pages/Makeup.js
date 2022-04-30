import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import styledComponents from 'styled-components';

const mostLovedUrl =
  'https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.9';

const Makeup = () => {
  const [mostLovedMakeup, setMostLovedMakeup] = useState([]);

  const getMostLoved = async () => {
    const response = await fetch(mostLovedUrl);
    const data = await response.json();
    console.log(data);
    setMostLovedMakeup(data);
  };

  useEffect(() => {
    getMostLoved();
  }, []);

  return (
    <Grid>
      {mostLovedMakeup.map((item) => {
        return (
          <Card key={item.id}>
            <StyledLink to={'/products/' + item.id}>
              <img src={item.image_link} alt={item.name} />
              <h4>{item.name}</h4>
            </StyledLink>
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
}`;

const StyledLink = styledComponents(Link)`
text-decoration: none;
color: black;
cursor: pointer;
text-align: center;
`;

export default Makeup;
