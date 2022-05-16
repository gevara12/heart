import { Dispatch } from 'redux';

import {createAction} from "redux-actions";
import {GET_A_DATA, SYNC_INCREASE_STEP} from '@store/constants';
import {userGetDataAAPI,userSaveDataAAPI} from "@store/syncA/api";

const getADataRequest = createAction(GET_A_DATA);

export const getDataFromA = (url: string) => async (dispatch: Dispatch) => {
  return userGetDataAAPI({ service: 'Airbnb', url })
    .then(({status, data}) => {
      if ( status !== 200) throw data.code;
      dispatch(getADataRequest({url, data:data.data}));
      dispatch({ type:SYNC_INCREASE_STEP });
    })
    .catch((error) => {
      console.error(error);
      throw error.data.code;
    });
};

export const saveDataFromA = (object) => async (dispatch: Dispatch) => {
  return userSaveDataAAPI({ ...object })
    .catch((error) => {
      console.error(error);
    });
};

