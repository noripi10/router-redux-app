import { LOGIN, LOGOUT, LOGIN_THUNK } from '../actionType';

export const actionLogin = (userID) => {
  return {
    type: LOGIN,
    payload: { USER_ID: userID },
  };
};

export const actionLoginThunk = (userID) => async (dispatch) => {
  const result = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(userID + '_thunk');
      }, 1500);
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
