import React, { createContext, useContext, useReducer } from 'react';

import rootReducer from './root-reducer';

const initialState = {
  guest: null,
  theme: 'dark'
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
