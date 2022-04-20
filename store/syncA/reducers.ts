import { GET_A_DATA } from '../constants';


const initialState = {
  parsedData: null,
};

// @ts-ignore
export const syncA = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_DATA:
      return {
        ...state,
        parsedData: {
          ...state.parsedData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
