import { AuthUserType } from './AuthUserType';
import { CounterType } from './CounterType';

export type RouteStateType = {
  auth: AuthUserType;
  count: CounterType;
};
