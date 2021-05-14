import { LOGIN, LOGOUT } from '../actionType';

export const actionLogin = (USER_ID) => {
  return {
    type: LOGIN,
    payload: { USER_ID },
  };
};

export const actionLogout = () => {
  return {
    type: LOGOUT,
  };
};
