import { ADD_IMAGE, GET_IMAGES } from '../constants';

const initialState = {
  images: []
};

// @ts-ignore
export const images = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return { ...state, images: [action.payload, ...state.images] };
    case GET_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
}
