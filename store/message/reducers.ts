import { SET_MESSAGE, CLEAR_MESSAGE } from '@store/constants';

const initialState = {};

// @ts-ignore
export const message = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { ...state, message: payload };
    case CLEAR_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};
