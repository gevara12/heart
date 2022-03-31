import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import {
  createApartmentAPI,
  deleteApartmentByIdAPI,
  fetchApartmentByIdAPI,
  searchApartmentAPI,
  updateApartmentAPI,
} from '@store/apartments/api';
import {
  CREATE_APARTMENT,
  DELETE_APARTMENT,
  GET_APARTMENTS,
  GET_ITEM_APARTMENT,
  SET_ERROR,
} from '../constants';

import type { TApartment, TPlaceType } from '@utils/types';

export const APARTMENTS = 'APARTMENTS';

const getApartmentsRequest = createAction(GET_APARTMENTS);
const getItemApartmentRequest = createAction(GET_ITEM_APARTMENT);
const createApartmentRequest = createAction(CREATE_APARTMENT);
const deleteApartmentRequest = createAction(DELETE_APARTMENT);

const setErrorAction = createAction(SET_ERROR);

// @ts-ignore
export const fetchApartments = () => async (dispatch: Dispatch) => {
  searchApartmentAPI({}).then(({ data }) => {
    dispatch(getApartmentsRequest(data.data));
  });
};

export const fetchApartmentById =
  (id: string) => async (dispatch: Dispatch) => {
    fetchApartmentByIdAPI(id)
      .then(({ data }) => {
        console.info('data', data.data);
        dispatch(getItemApartmentRequest(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
//
export const deleteApartmentById =
  (id: string) => async (dispatch: Dispatch) => {
    deleteApartmentByIdAPI(id).then(({ data }) => {
      dispatch(deleteApartmentRequest(id));
    });
  };

export const createApartment =
  ({ placeType }: { placeType: TPlaceType }) =>
  async (dispatch: Dispatch) => {
    createApartmentAPI({
      placeType,
    })
      .then(({ data }) => {
        dispatch(createApartmentRequest(data));
      })
      .catch((error) => {
        dispatch(setErrorAction(error?.data?.code));
      });
  };

export const updateApartment =
  (newApartment: TApartment) => async (dispatch: Dispatch) => {
    const { id, name, description, amount } = newApartment;
    updateApartmentAPI({
      id,
      name,
      description,
      amount,
    })
      .then(({ data }) => {
        dispatch(createApartmentRequest(data));
      })
      .catch((error) => {
        dispatch(setErrorAction(error?.data?.code));
        // dispatch(userLogInFailAction(error?.data?.code));
      });
  };
