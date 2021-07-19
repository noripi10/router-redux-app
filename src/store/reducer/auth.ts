import { LOGIN, LOGOUT, LOGIN_THUNK } from '../actionType';
import { AuthUserType } from '../../types/AuthUserType';

const initialState: AuthUserType = {
  USER_ID: null,
};

type ActionType = {
  type: typeof LOGIN | typeof LOGOUT | typeof LOGIN_THUNK;
  payload: AuthUserType;
};

export const authReducer = (state = initialState, action: ActionType) => {
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
