import React from 'react';
import { useEffect, useState } from 'react';
import styledComponents from 'styled-components';

const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPopular(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {popular.map((item, id) => {
        return (
          <article key={id}>
            <h3>{item.name}</h3>
          </article>
        );
      })}
    </div>
  );
};

export default Popular;
