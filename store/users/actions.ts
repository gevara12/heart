import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { USER_GET } from '@store/constants';

import { userGetAPI } from '@store/users/api';

const userAction = createAction(USER_GET);

export const fetchUser = (useId) => async (dispatch: Dispatch) => {
  userGetAPI(useId)
    .then(({ data }) => {
      dispatch(userAction(data.data));
    })
    .catch((error) => {});
};
