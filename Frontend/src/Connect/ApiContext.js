import React, { createContext, useContext } from 'react';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  
  const apiUrl = 'https://myprojectfullstack-back-front-1.onrender.com'; 

  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  return useContext(ApiContext);
};