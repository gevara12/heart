import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const CREATE_APARTMENT_ENDPOINT = 'apartments';
export const SEARCH_APARTMENT_ENDPOINT = 'apartments/list';
export const GET_APARTMENT_ENDPOINT = 'apartments';
export const UPDATE_APARTMENT_ENDPOINT = 'apartments';
export const DELETE_APARTMENT_ENDPOINT = 'apartments/delete';
export const STATUS_UPDATE_APARTMENT_ENDPOINT = 'apartments/status/update';

export const activateApartmentAPI = (id: string, ...data) =>
  axiosService.post(apiUrl(`apartments/activate/${id}`), data);
export const createApartmentAPI = (data) => axiosService.post(apiUrl(CREATE_APARTMENT_ENDPOINT), data);
export const updateApartmentAPI = (data) => axiosService.post(apiUrl(UPDATE_APARTMENT_ENDPOINT), data);
export const statusUpdateApartmentAPI = (...data) => axiosService.post(apiUrl(STATUS_UPDATE_APARTMENT_ENDPOINT), data);
export const searchApartmentAPI = (data) => axiosService.post(apiUrl(SEARCH_APARTMENT_ENDPOINT), data);
export const fetchApartmentByIdAPI = (id: string) => axiosService.get(apiUrl(`${GET_APARTMENT_ENDPOINT}/${id}`));
export const deleteApartmentByIdAPI = (id: string) =>
  axiosService.post(apiUrl(`${DELETE_APARTMENT_ENDPOINT}/${id}`), {});
