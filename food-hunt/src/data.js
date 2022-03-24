import React from 'react';
import {
  GiMeal,
  GiHotMeal,
  GiBowlOfRice,
  GiFruitBowl,
  GiIceCreamCone,
} from 'react-icons/gi';

const sublinks = [
  {
    page: 'breakfast',
    links: [
      { label: 'Breakfast Tray', icon: <GiFruitBowl />, url: '/breakfast' },
      { label: 'Omelette', icon: <GiFruitBowl />, url: '/breakfast' },
      { label: 'Pancakes', icon: <GiFruitBowl />, url: '/breakfast' },
    ],
  },
  {
    page: 'lunch',
    links: [
      { label: 'Salads', icon: <GiBowlOfRice />, url: '/lunch' },
      { label: 'Pasta', icon: <GiBowlOfRice />, url: '/lunch' },
      { label: 'Crispies', icon: <GiBowlOfRice />, url: '/lunch' },
      { label: 'Pizza', icon: <GiBowlOfRice />, url: '/lunch' },
    ],
  },
  {
    page: 'dinner',
    links: [
      { label: 'Cafê de Paris ', icon: <GiHotMeal />, url: '/dinner' },
      {
        label: 'Seabass Baked on Bamboo ',
        icon: <GiHotMeal />,
        url: '/dinner',
      },
      {
        label: 'Lebanese Meat with Humus ',
        icon: <GiHotMeal />,
        url: '/dinner',
      },
      {
        label: 'Grilled Norwegian Salmon',
        icon: <GiHotMeal />,
        url: '/dinner',
      },
    ],
  },
  {
    page: 'dessert',
    links: [
      {
        label: 'White Chocolate Soufflê',
        icon: <GiIceCreamCone />,
        url: '/dessert',
      },
      {
        label: 'San Sebastian Cheesecake',
        icon: <GiIceCreamCone />,
        url: '/dessert',
      },
    ],
  },
];
export default sublinks;
