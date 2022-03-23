import urlParse from 'url-parse';

export const SERVER_URL =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8088';

export const apiUrl = (pathname?: string) => {
  const URL = urlParse(SERVER_URL);
  URL.set('pathname', `/v1/${pathname}`);
  console.info(URL.toString());
  return URL.toString();
};

export const DELETE_APARTMENT = 'DELETE_APARTMENT';
export const GET_APARTMENTS = 'GET_APARTMENTS';
export const CREATE_APARTMENT = 'CREATE_APARTMENT';
export const GET_ITEM_APARTMENT = 'GET_ITEM_APARTMENT';
export const EDIT_APARTMENT = 'EDIT_APARTMENT';
export const SET_APARTMENT = 'SET_APARTMENT';

export const ADD_IMAGE = 'ADD_IMAGE';
export const GET_IMAGES = 'GET_IMAGES';

export const CURRENT_USER = 'CURRENT_USER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

