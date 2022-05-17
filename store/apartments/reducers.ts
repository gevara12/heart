// @ts-ignore
import {
  CREATE_APARTMENT,
  DELETE_APARTMENT,
  EDIT_APARTMENT,
  GET_APARTMENTS,
  GET_ITEM_APARTMENT,
  SET_APARTMENT,
} from '../constants';

import type { TApartment } from '@utils/types';

// @ts-ignore
const initialApartmentsState = [];

// @ts-ignore
export const apartments = (state = initialApartmentsState, action) => {
  switch (action.type) {
    case GET_APARTMENTS:
      return [...action.payload];
    case DELETE_APARTMENT:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const initialApartmentState = {
  currentApartment: <TApartment>{
    description: { value: '' },
    name: { value: '' },
    placeType: { value: 'entire-place' },
    publicInfo: {},
  },
};

// @ts-ignore
export const currentApartment = (state = initialApartmentState, action) => {
  switch (action.type) {
    case CREATE_APARTMENT:
      return {
        ...state,
        currentApartment: {
          ...state.currentApartment,
          ...action.payload,
        },
      };
    case GET_ITEM_APARTMENT:
      return {
        ...state,
        currentApartment: {
          ...state.currentApartment,
          ...action.payload,
        },
      };

    case EDIT_APARTMENT:
      return {
        ...state,
        currentApartment: {
          ...state.currentApartment,
        },
      };

    case SET_APARTMENT:
      return {
        ...state,
        currentApartment: {
          ...state.currentApartment,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
