import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { countReducer } from './count';

export const reducer = combineReducers({
  auth: authReducer,
  count: countReducer,
});
