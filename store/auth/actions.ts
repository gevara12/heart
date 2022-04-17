import axios from 'axios';
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { apiUrl, CURRENT_USER, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, SNACKBAR_OPEN } from '@store/constants';

import {
  USER_LOGOUT_ENDPOINT,
  userCurrentAPI,
  userLogInAPI,
  userRegisterAPI,
  userUpdateContactsAPI,
  userUpdateInfoAPI,
} from '@store/auth/api';
import { SeverityEnum } from '@components/CustomSnackBar';
import { error } from '@store/error/reducers';

const userRegisterRequest = createAction(REGISTER_SUCCESS);
const userLogInAction = createAction(LOGIN_SUCCESS);
const userLogOutAction = createAction(LOGOUT);
const userCurrentAction = createAction(CURRENT_USER);

type TUserRegister = {
  email: string;
  password: string;
  phoneNumber: string;
};

type TUserLogin = {
  userName: string;
  password: string;
};

export const fetchCurrentUser = () => async (dispatch: Dispatch) => {
  userCurrentAPI()
    .then(({ data }) => {
      dispatch(userCurrentAction(data));
    })
    .catch((error) => {
      dispatch({
        type: SNACKBAR_OPEN,
        message: error?.data?.code,
        severity: SeverityEnum.error,
      });
    });
};

export const userUpdateInfo = (userInfo) => async () => {
  userUpdateInfoAPI(userInfo)
    .then(({ data }) => {})
    .catch((error) => {
      console.error(error);
    });
};

export const userUpdateContacts = (userContacts) => async () => {
  console.info('userContacts', userContacts);
  userUpdateContactsAPI(userContacts)
    .then(({ data }) => {
      console.info('data', data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const userUpdate = (userInfo) => async (dispatch: Dispatch) => {
  console.info('userInfo', userInfo);
  userUpdateInfoAPI(userInfo)
    .then(({ data }) => {
      console.info('userUpdate', data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const userRegister =
  ({ email, password, phoneNumber }: TUserRegister) =>
  async (dispatch: Dispatch) => {
    userRegisterAPI({
      phonenumber: phoneNumber,
      email,
      password,
    })
      .then(({ data }) => {
        dispatch(userRegisterRequest(data.data));
        localStorage.setItem('accessToken', JSON.stringify(data.data.token));
      })
      .catch((error) => {
        dispatch({
          type: SNACKBAR_OPEN,
          message: error?.data?.code,
          severity: SeverityEnum.error,
        });
      });
  };

export const userLogin =
  ({ userName, password }: TUserLogin) =>
  async (dispatch: Dispatch) => {
    userLogInAPI({
      username: userName,
      password,
    })
      .then(({ data }) => {
        dispatch(userLogInAction(data.data.user));
        sessionStorage.setItem('username', data.data.user.username);
        sessionStorage.setItem('accessToken', data.data.token);
      })
      .catch((error) => {
        dispatch({
          type: SNACKBAR_OPEN,
          message: error?.data?.code,
          severity: SeverityEnum.error,
        });
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
