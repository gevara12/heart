import axios from 'axios';
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import {
  apiUrl,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_ERROR,
} from '@store/constants';

import {
  USER_LOGOUT_ENDPOINT,
  userLogInAPI,
  userRegisterAPI,
  USER_REGISTER_ENDPOINT,
} from '@store/auth/api';

const userRegisterRequest = createAction(REGISTER_SUCCESS);
const userRegisterFailRequest = createAction(REGISTER_FAIL);
const userLogInAction = createAction(LOGIN_SUCCESS);
const userLogInFailAction = createAction(LOGIN_FAIL);
const userLogOutAction = createAction(LOGOUT);

const setErrorAction = createAction(SET_ERROR);

type TUserRegister = {
  userName: string;
  email: string;
  password: string;
};

type TUserLogin = {
  userName: string;
  password: string;
};

export type TUser = {
  enabled: boolean;
  id: string;
  username: string;
  status: 'ACTIVE' | 'DISABLED';
};

export const userRegister =
  ({ userName, password }: TUserRegister) =>
  async (dispatch: Dispatch) => {
    userRegisterAPI({
      username: userName,
      password,
    }).then(
      ({ data }) => {
        dispatch(userRegisterRequest(data.data));
        localStorage.setItem('accessToken', JSON.stringify(data.data.token));
        return Promise.resolve();
      },
      (error) => {
        console.error(error?.data?.code);
        dispatch(setErrorAction(error?.data?.code));
        dispatch(userRegisterFailRequest());
        return Promise.reject();
      }
    );
  };

export const userLogin =
  ({ userName, password }: TUserLogin) =>
  async (dispatch: Dispatch) => {
    userLogInAPI({
      username: userName,
      password,
    })
      .then(({ data }) => {
        console.info('data.data', data.data);
        dispatch(userLogInAction(data.data.user));
        sessionStorage.setItem('username', data.data.user.username);
        sessionStorage.setItem('accessToken', data.data.token);
      })
      .catch((error) => {
        dispatch(setErrorAction(error?.data?.code));
        // dispatch(userLogInFailAction(error?.data?.code));
      });
  };

export const logout = () => (dispatch: Dispatch<any>) => {
  const token = sessionStorage.getItem('accessToken');

  axios
    .get(apiUrl(USER_LOGOUT_ENDPOINT), {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(() => {
      dispatch(userLogOutAction());
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('username');
    })
    .catch((error) => {
      console.log('error', error);
    });
};
