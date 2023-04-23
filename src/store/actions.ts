import { RatedMovieType } from '../services/movie';
import { ADD_GUEST_SESSION, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { GuestProps, ThemeType } from './types';

export const addGuestSession = (payload: GuestProps) => {
  return {
    type: ADD_GUEST_SESSION,
    payload
  };
};

export const updateGuestSessionRatedMovies = (payload: Array<RatedMovieType>) => {
  return {
    type: UPDATE_GUEST_SESSION_RATED_MOVIES,
    payload
  };
};

export const setTheme = (payload: ThemeType) => {
  return {
    type: SET_THEME,
    payload
  };
};
