import { RatedMovieType } from '../services/movie';
import { ADD_GUEST_SESSION, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { ActionType, GuestProps, ThemeType } from './types';

export const addGuestSession = (payload: GuestProps): ActionType => {
  return {
    type: ADD_GUEST_SESSION,
    payload
  };
};

export const updateGuestSessionRatedMovies = (payload: Array<RatedMovieType>): ActionType => {
  return {
    type: UPDATE_GUEST_SESSION_RATED_MOVIES,
    payload
  };
};

export const setTheme = (payload: ThemeType): ActionType => {
  return {
    type: SET_THEME,
    payload
  };
};
