import React from 'react';
import { useEffect } from 'react';

const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';

const Popular = () => {
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Popular</div>;
};

export default Popular;
