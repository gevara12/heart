import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';


export const SYNC_A_GET_DATA_ENDPOINT = 'draft/get';
export const SYNC_A_SAVE_DATA_ENDPOINT = 'draft/save';

export const userGetDataAAPI = (data) => axiosService.post(apiUrl(SYNC_A_GET_DATA_ENDPOINT), data);
export const userSaveDataAAPI = (data) => axiosService.post(apiUrl(SYNC_A_SAVE_DATA_ENDPOINT), data);
