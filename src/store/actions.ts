import { RatedMovieType } from '../services/movie';
import { CREATE_GUEST_SESSION, LOGOUT, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { ActionType, GuestProps, ThemeType } from './types';

export const addGuestSession = (payload: GuestProps): ActionType => {
  return {
    type: CREATE_GUEST_SESSION,
    payload
  };
};

export const updateGuestSessionRatedMovies = (payload: Array<RatedMovieType>): ActionType => {
  return {
    type: UPDATE_GUEST_SESSION_RATED_MOVIES,
    payload
  };
};

export const logout = (): ActionType => {
  return {
    type: LOGOUT
  };
};

export const setTheme = (payload: ThemeType): ActionType => {
  return {
    type: SET_THEME,
    payload
  };
};
