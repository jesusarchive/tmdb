import { SET_THEME } from './constants';
import { ActionType, ThemeType } from './types';

export const setTheme = (payload: ThemeType): ActionType => {
  return {
    type: SET_THEME,
    payload
  };
};
