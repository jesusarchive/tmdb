import { CREATE_GUEST_SESSION, LOGOUT, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { ActionType, GuestProps, StateType } from './types';

const rootReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case CREATE_GUEST_SESSION:
      return { ...state, guest: action.payload };
    case UPDATE_GUEST_SESSION_RATED_MOVIES:
      return { ...state, guest: { ...state.guest, rated_movies: action.payload } as GuestProps };
    case LOGOUT:
      return { ...state, guest: null };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
