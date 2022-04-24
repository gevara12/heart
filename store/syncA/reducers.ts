import {SYNC_INCREASE_STEP, GET_A_DATA, SYNC_DECREASE_STEP} from '../constants';


const initialState = {
  activeStep: 0,
  parsedData: null,
};

// @ts-ignore
export const syncA = (state = initialState, action) => {
  switch (action.type) {
    case SYNC_INCREASE_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case SYNC_DECREASE_STEP:
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case GET_A_DATA:
      return {
        activeStep: state.activeStep,
        parsedData: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
