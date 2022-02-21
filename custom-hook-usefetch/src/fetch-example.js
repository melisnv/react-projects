import React, { useState } from 'react';
import { useFetch } from './useFetch';

const url = 'https://course-api.com/javascript-store-products';

const FetchExample = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default FetchExample;
