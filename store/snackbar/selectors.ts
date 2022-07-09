import { SeverityEnum } from '@components/CustomSnackBar';

export const getSnackbar = (state: {
  snackbar: {
    snackbarOpen: boolean;
    snackbarMessage: string;
    severity: SeverityEnum;
  };
}) => state.snackbar;
