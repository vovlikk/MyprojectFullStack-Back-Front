import React, { createContext, useContext } from 'react';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // Здесь храним ссылку на API
  const apiUrl = 'https://907fc7c3a0c7.ngrok-free.app'; // замени на свою ссылку

  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  return useContext(ApiContext);
};