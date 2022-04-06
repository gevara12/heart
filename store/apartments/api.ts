import axiosService from '@services/axiosService';
import { apiUrl } from '@store/constants';

export const CREATE_APARTMENT_ENDPOINT = 'APARTMENTS';
export const SEARCH_APARTMENT_ENDPOINT = 'APARTMENTS/search';
export const GET_APARTMENT_ENDPOINT = 'APARTMENTS';
export const UPDATE_APARTMENT_ENDPOINT = 'APARTMENTS';
export const DELETE_APARTMENT_ENDPOINT = 'APARTMENTS/delete';

export const createApartmentAPI = (data) =>
  axiosService.post(apiUrl(CREATE_APARTMENT_ENDPOINT), data);

export const updateApartmentAPI = (data) =>
  axiosService.post(apiUrl(UPDATE_APARTMENT_ENDPOINT), data);

export const searchApartmentAPI = (data) =>
  axiosService.post(apiUrl(SEARCH_APARTMENT_ENDPOINT), data);

export const fetchApartmentByIdAPI = (id: string) =>
  axiosService.get(apiUrl(`${GET_APARTMENT_ENDPOINT}/${id}`));

export const deleteApartmentByIdAPI = (id: string) =>
  axiosService.post(apiUrl(`${DELETE_APARTMENT_ENDPOINT}/${id}`), {});
