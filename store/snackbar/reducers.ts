import { SNACKBAR_CLEAR, SNACKBAR_OPEN } from '@store/constants';

export const snackbar = (state = {}, action) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.message,
        severity: action.severity,
      };

    case SNACKBAR_CLEAR:
      return {
        ...state,
        snackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false,
      };
    default:
      return state;
  }
};
