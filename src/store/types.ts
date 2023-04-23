import { themes } from '../layouts/layout/constants';
import { SET_THEME } from './constants';

export type ThemeType = (typeof themes)[number];

export type StateType = {
  theme: ThemeType;
};

export type ActionType = { type: typeof SET_THEME; payload: ThemeType };
