import { Dispatch } from 'redux';
import { LOGIN, LOGOUT, LOGIN_THUNK } from '../actionType';

export const actionLogin = (userID: string) => {
  return {
    type: LOGIN,
    payload: { USER_ID: userID },
  };
};

export const actionLoginThunk = (userID: string) => async (dispatch: Dispatch) => {
  const result = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(userID + '_thunk');
      }, 5000);
    } catch {
      reject('NG');
    }
  });

  dispatch({ type: LOGIN_THUNK, payload: { USER_ID: result } });
};

export const actionLogout = () => {
  return {
    type: LOGOUT,
  };
};
