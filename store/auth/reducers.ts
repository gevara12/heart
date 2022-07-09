import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CURRENT_USER } from '@store/constants';

const iSServer = typeof window === 'undefined';

const username = !iSServer ? sessionStorage.getItem('username') : null;

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
const initialState = { isLoggedIn: false, user: { username } };

// @ts-ignore
export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: { ...payload },
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload?.user,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.username,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: { username: null },
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: { username: null },
      };
    default:
      return state;
  }
};
