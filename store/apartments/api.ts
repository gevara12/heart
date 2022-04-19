import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const CREATE_APARTMENT_ENDPOINT = 'apartments';
export const SEARCH_APARTMENT_ENDPOINT = 'public/apartments/search';
export const GET_APARTMENT_ENDPOINT = 'apartments';
export const UPDATE_APARTMENT_ENDPOINT = 'apartments';
export const DELETE_APARTMENT_ENDPOINT = 'apartments/delete';

export const createApartmentAPI = (data) => axiosService.post(apiUrl(CREATE_APARTMENT_ENDPOINT), data);

export const updateApartmentAPI = (data) => axiosService.post(apiUrl(UPDATE_APARTMENT_ENDPOINT), data);

export const searchApartmentAPI = (data) => axiosService.post(apiUrl(SEARCH_APARTMENT_ENDPOINT), data);

export const fetchApartmentByIdAPI = (id: string) => axiosService.get(apiUrl(`${GET_APARTMENT_ENDPOINT}/${id}`));

export const deleteApartmentByIdAPI = (id: string) =>
  axiosService.post(apiUrl(`${DELETE_APARTMENT_ENDPOINT}/${id}`), {});
