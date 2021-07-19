import { Dispatch } from 'redux';
import { INCREMENT, DECREMENT } from '../actionType';

export const actionIncrementAsync = () => async (dispatch: Dispatch) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });

  dispatch({ type: INCREMENT });
};

export const actionDecrementAsync = () => async (dispatch: Dispatch) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });

  dispatch({ type: DECREMENT });
};
