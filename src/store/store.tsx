import React, { createContext, useContext, useReducer } from 'react';

import rootReducer from './root-reducer';

const initialState = {
  theme: 'dark',
  user: {
    name: 'User1',
    image: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg'
  }
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
