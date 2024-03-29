import urlParse from 'url-parse';

export const SERVER_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8443' : 'https://www.heartapart.ru:8443';

export const apiUrl = (pathname?: string) => {
  const URL = urlParse(SERVER_URL);
  URL.set('pathname', `/v1/${pathname}`);
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

export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const SNACKBAR_OPEN = 'SNACKBAR_OPEN';
export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const FORM_VALUE = 'FORM_VALUE';
export const FORM_GROUP_VALUE = 'FORM_GROUP_VALUE';
export const FORM_GROUP_OBJECT = 'FORM_GROUP_OBJECT';
export const FORM_ADDRESS = 'FORM_ADDRESS';

export const UPDATE_AVATAR = 'UPDATE_AVATAR';

export const GET_A_DATA = 'GET_A_DATA';

export const SYNC_INCREASE_STEP = 'SYNC_INCREASE_STEP';
export const SYNC_DECREASE_STEP = 'SYNC_DECREASE_STEP';

export const USER_GET = 'USER_GET';
