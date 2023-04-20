import { ADD_GUEST_SESSION, SET_THEME } from './constants';
import { GuestProps } from './types';

export const addGuestSession = (payload: GuestProps) => {
  return {
    type: ADD_GUEST_SESSION,
    payload
  };
};

export const setTheme = (payload: string) => {
  return {
    type: SET_THEME,
    payload
  };
};
