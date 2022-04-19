import { Dispatch } from 'redux';

import {createAction} from "redux-actions";
import { GET_A_DATA } from '@store/constants';
import {userGetDataAAPI} from "@store/syncA/api";


const getADataRequest = createAction(GET_A_DATA);

export const getDataFromA = (url: string) => async (dispatch: Dispatch) => {
  userGetDataAAPI({ service: 'Airbnb', url })
    .then(({ data }) => {
      console.info('parsed data', data.data);
      dispatch(getADataRequest(data.data))
    })
    .catch((error) => {
      console.error(error);
    });
};

