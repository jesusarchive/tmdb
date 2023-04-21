import { ADD_GUEST_SESSION, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { GuestProps } from './store';

export const addGuestSession = (payload: GuestProps) => {
  return {
    type: ADD_GUEST_SESSION,
    payload
  };
};

export const updateGuestSessionRatedMovies = (payload: any) => {
  return {
    type: UPDATE_GUEST_SESSION_RATED_MOVIES,
    payload
  };
};

export const setTheme = (payload: string) => {
  return {
    type: SET_THEME,
    payload
  };
};
