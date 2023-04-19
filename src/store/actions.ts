import { ADD_USER, SET_THEME } from './constants';
import { UserType } from './types';

export const addUser = (payload: UserType) => {
  return {
    type: ADD_USER,
    payload
  };
};

export const setTheme = (payload: string) => {
  return {
    type: SET_THEME,
    payload
  };
};
