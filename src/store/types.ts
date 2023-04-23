import { themes } from '../layouts/layout/constants';
import { GuestSessionType } from '../services/auth';
import { RatedMovieType } from '../services/movie';
import { CREATE_GUEST_SESSION, LOGOUT, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';

export interface GuestProps extends GuestSessionType {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
  rated_movies: Array<RatedMovieType>;
}

export type ThemeType = (typeof themes)[number];

export type StateType = {
  guest: GuestProps | null;
  theme: ThemeType;
};

export type ActionType =
  | { type: typeof CREATE_GUEST_SESSION; payload: GuestProps }
  | { type: typeof UPDATE_GUEST_SESSION_RATED_MOVIES; payload: Array<RatedMovieType> }
  | { type: typeof LOGOUT }
  | { type: typeof SET_THEME; payload: ThemeType };
