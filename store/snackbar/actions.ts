import { SNACKBAR_CLEAR, SNACKBAR_OPEN } from '@store/constants';
import { SeverityEnum } from '@components/CustomSnackBar';

type TShowSnackbar = {
  message: string;
  severity: SeverityEnum;
};

export const showSnackbar =
  ({ message, severity }: TShowSnackbar) =>
  (dispatch) => {
    dispatch({ type: SNACKBAR_OPEN, message, severity });
  };

export const clearSnackbar = () => (dispatch) => {
  dispatch({ type: SNACKBAR_CLEAR });
};
