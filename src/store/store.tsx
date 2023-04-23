import React, { createContext, useContext, useEffect, useReducer } from 'react';

import rootReducer from './root-reducer';
import { StateType } from './types';

const initialState = {
  guest: null,
  theme: 'dark'
} as StateType;

export const Store = createContext(initialState);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, JSON.parse(localStorage.getItem('tmdb') || '') || initialState);

  useEffect(() => {
    localStorage.setItem('tmdb', JSON.stringify(state));
  }, [state]);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
