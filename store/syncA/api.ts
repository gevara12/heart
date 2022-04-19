import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const SYNC_A_GET_DATA_ENDPOINT = 'draft/get';


export const userGetDataAAPI = (data) => axiosService.post(apiUrl(SYNC_A_GET_DATA_ENDPOINT), data);
