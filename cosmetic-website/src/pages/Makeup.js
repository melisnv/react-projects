import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

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

  return <h3>Makeup Component</h3>;
};

export default Makeup;
