import React, { useContext, useEffect, useState } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState('A');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { meals } = data;

      if (meals) {
        const newMeal = meals.map((meal) => {
          const { idMeal, strMeal, strArea, strMealThumb, strTags } = meal;

          return {
            id: idMeal,
            name: strMeal,
            origin: strArea,
            image: strMealThumb,
            info: strTags,
          };
        });
        setMenu(newMeal);
      } else {
        setMenu([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, menu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, SearchProvider };
