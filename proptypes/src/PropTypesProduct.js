import React from 'react';
import Product from './Product';
import { useFetch } from './useFetch';

const url = 'https://www.course-api.com/react-prop-types-example';

const PropTypesProduct = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default PropTypesProduct;
