import React, { createContext, useContext, useEffect, useReducer } from 'react';

import rootReducer from './root-reducer';

export type GuestProps = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
  rated_movies: any;
};

export type StateType = {
  guest: GuestProps | null;
  theme: string;
};

const initialState = {
  guest: null,
  theme: 'dark'
} as StateType;

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, JSON.parse(localStorage.getItem('tmdb')) || initialState);

  useEffect(() => {
    localStorage.setItem('tmdb', JSON.stringify(state));
  }, [state]);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
