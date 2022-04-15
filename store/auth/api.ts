import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const USER_REGISTER_ENDPOINT = 'public/users/register';
export const USER_LOGIN_ENDPOINT = 'public/users/login';
export const USER_LOGOUT_ENDPOINT = 'users/logout';
export const USER_CURRENT_ENDPOINT = 'users/current';
export const USER_UPDATE_ENDPOINT = 'users/update';

export const userRegisterAPI = (data) => axiosService.post(apiUrl(USER_REGISTER_ENDPOINT), data);

export const userLogInAPI = (data) => axiosService.post(apiUrl(USER_LOGIN_ENDPOINT), data);
export const userUpdateAPI = (data) => axiosService.post(apiUrl(USER_UPDATE_ENDPOINT), data);

export const userLogOutAPI = () => axiosService.get(apiUrl(USER_LOGOUT_ENDPOINT));
export const userCurrentAPI = () => axiosService.get(apiUrl(USER_CURRENT_ENDPOINT));
