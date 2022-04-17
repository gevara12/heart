import { Dispatch } from 'redux';
import axios from 'axios';
import { createAction } from 'redux-actions';

import { UPDATE_AVATAR } from '@store/constants';
import { apiUrl } from '@store/constants';

const updateAvatarRequest = createAction(UPDATE_AVATAR);

export const UPDATE_AVATAR_ENDPOINT = 'users/update/avatar';

export const updateAvatar = (form) => async (dispatch: Dispatch) => {
  const token = sessionStorage.getItem('accessToken');
  console.info('ImageData', form);
  axios
    .post(apiUrl(UPDATE_AVATAR_ENDPOINT), form, {
      headers: { 'Content-type': `multipart/form-data`, Authorization: 'Bearer ' + token },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    })
    .then(({ data }) => {
      console.info('update Avatar data', data);
      dispatch(updateAvatarRequest(data.data));
    })
    .catch((error) => {
      console.error(error);
    });
};
