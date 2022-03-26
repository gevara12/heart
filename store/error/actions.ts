import { HIDE_ERROR, SET_ERROR } from '@store/constants';

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const hideError = () => ({
  type: HIDE_ERROR,
});
