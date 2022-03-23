import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const USER_REGISTER_ENDPOINT = 'public/users/register';
export const USER_LOGIN_ENDPOINT = 'public/users/login';
export const USER_LOGOUT_ENDPOINT = 'users/logout';

export const userRegisterAPI = (data) =>
  axiosService.post(apiUrl(USER_REGISTER_ENDPOINT), data);

export const userLogInAPI = (data) =>
  axiosService.post(apiUrl(USER_LOGIN_ENDPOINT), data);

export const userLogOutAPI = () =>
  axiosService.get(apiUrl(USER_LOGOUT_ENDPOINT));
