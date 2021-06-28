import { LOGIN, LOGOUT, LOGIN_THUNK } from '../actionType';

const initialState = {
  USER_ID: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        USER_ID: action.payload.USER_ID,
      };
    case LOGIN_THUNK:
      return {
        ...state,
        USER_ID: action.payload.USER_ID,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
