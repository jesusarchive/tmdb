import { SET_THEME } from './constants';
import { ActionType, StateType } from './types';

const rootReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
