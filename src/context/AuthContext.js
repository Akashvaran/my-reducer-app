import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../components/reducer/Reducer';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <UserContext.Provider value={{ cart, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
