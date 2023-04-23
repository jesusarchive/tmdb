import React, { createContext, Dispatch, useContext, useEffect, useReducer } from 'react';

import { DARK_THEME } from '../layouts/layout/constants';
import { LOCAL_STORAGE_STORE_KEY } from './constants';
import rootReducer from './root-reducer';
import { ActionType, StateType } from './types';

const initialState = {
  guest: null,
  theme: DARK_THEME
} as StateType;

export const Store = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(
    rootReducer,
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_STORE_KEY) as string) || initialState
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_STORE_KEY, JSON.stringify(state));
  }, [state]);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
