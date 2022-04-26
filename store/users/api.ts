import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const USER_GET_ENDPOINT = 'users';

export const userGetAPI = (userId) => axiosService.get(apiUrl(`${USER_GET_ENDPOINT}/${userId}`));
