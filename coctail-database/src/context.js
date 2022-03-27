import React, { useCallback, useContext, useEffect, useState } from 'react';

const url = 'https://www.thecoctaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={'coctail app'}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
