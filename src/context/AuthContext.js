import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../components/reducer/Reducer';

export const ReducerContext = createContext();

export const ReducerProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <ReducerContext.Provider value={{ cart, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
