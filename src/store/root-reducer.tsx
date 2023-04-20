import { ADD_GUEST_SESSION, SET_THEME } from './constants';
import { StateType } from './types';

const rootReducer = (state: StateType, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_GUEST_SESSION:
      return { ...state, guestSession: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
