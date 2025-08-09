import React, { createContext, useContext } from 'react';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // Здесь храним ссылку на API
  const apiUrl = 'https://dfbe6ba98570.ngrok-free.app'; 

  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  return useContext(ApiContext);
};