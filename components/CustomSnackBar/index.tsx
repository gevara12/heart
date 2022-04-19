import { useDispatch, useSelector } from 'react-redux';

import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { clearSnackbar } from '@store/snackbar/actions';
import { getSnackbar } from '@store/snackbar/selectors';

export enum SeverityEnum {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

export const CustomSnackBar = () => {
  const dispatch = useDispatch();

  const { snackbarMessage, snackbarOpen, severity } = useSelector(getSnackbar);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearSnackbar());
  };

  return (
    <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} sx={{ width: '100%' }} severity={severity} variant="filled">
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};
