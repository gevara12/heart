import { SET_ERROR, HIDE_ERROR } from '@store/constants';

const initialState = { error: null };

// @ts-ignore
export const error = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERROR:
      return { ...state, error: payload, isOpen: true };
    case HIDE_ERROR:
      return { ...state, error: null, isOpen: false };
    default:
      return state;
  }
};
