import React, { createContext, useContext } from 'react';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  
  const apiUrl = 'https://1498525e40a1.ngrok-free.app'; 

  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  return useContext(ApiContext);
};