import { INCREMENT, DECREMENT } from '../actionType';
import { CounterType } from '../../types/CounterType';

const initialState: CounterType = {
  Counter: 0,
};

type ActionType = {
  type: typeof INCREMENT | typeof DECREMENT;
  payload: CounterType;
};

export const countReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, Counter: state.Counter + 1 };
    case DECREMENT:
      return { ...state, Counter: state.Counter - 1 };
    default:
      return state;
  }
};
