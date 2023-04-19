import { ADD_USER, SET_THEME } from './constants';
import { StoreType } from './types';

const rootReducer = (state: StoreType, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
