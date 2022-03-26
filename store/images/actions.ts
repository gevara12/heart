import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { ADD_IMAGE } from '@store/constants';
import { apiUrl } from '@store/constants';

import http from 'services/authHeader';
import axiosService from '@services/axiosService';
const addImageRequest = createAction(ADD_IMAGE);

export const UPLOAD_PHOTO_ENDPOINT = 'photo/upload';
export const DELETE_PHOTO_ENDPOINT = 'photo/delete';

export const uploadPhotoAPI = (data) => axiosService.post(apiUrl(UPLOAD_PHOTO_ENDPOINT), data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
});

export type TImageData = {
  file: File;
  title: string;
  id?: string;
};

export const addImage = (imageData: TImageData) => async (dispatch: Dispatch) => {
  // console.info('ImageData', imageData)
  uploadPhotoAPI(imageData)
    .then(({ data }) => {
      // console.info('add data', data);
      dispatch(addImageRequest(data.data));
    }).catch((error) => {
    console.error(error);
  })
};
