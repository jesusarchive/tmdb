import { ADD_GUEST_SESSION, SET_THEME, UPDATE_GUEST_SESSION_RATED_MOVIES } from './constants';
import { StateType } from './store';

const rootReducer = (state: StateType, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_GUEST_SESSION:
      return { ...state, guest: action.payload };
    case UPDATE_GUEST_SESSION_RATED_MOVIES:
      return { ...state, guest: { ...state.guest, rated_movies: action.payload } };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
