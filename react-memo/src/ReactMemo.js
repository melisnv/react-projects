import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useFetch } from './useFetch';

const url = 'https://course-api.com/javascript-store-products';

const calculateTheMostExpensiveOne = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;

      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const ReactMemo = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateTheMostExpensiveOne(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('Big list called');
  });

  return (
    <section className="section__products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log('Single list called');
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>€{price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  );
};

export default ReactMemo;
