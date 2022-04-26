import {
  USER_GET,
} from '@store/constants';


const initialState = { user: null };

// @ts-ignore
export const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_GET:
      return {
        ...state,
        user: { ...payload },
      };
    default:
      return state;
  }
};
