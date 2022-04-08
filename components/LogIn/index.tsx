import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { CustomModal } from '@components/CustomModal';
import { logout, userLogin } from '@store/auth/actions';
import { getUserStatus } from '@store/auth/selectors';
// import { getUserStatus } from '@store/auth/selectors';
import MenuItem from '@mui/material/MenuItem';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';

export const LogIn = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const auth = useSelector(getUserStatus);

  const handleSubmit = async () => {
    try {
      await dispatch(userLogin({ userName, password }));
      dispatch(
        showSnackbar({
          message: 'Авторизация пройдена',
          severity: SeverityEnum.success,
        })
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    // console.log('login error', error);
  }, [dispatch]);

  return (
    <div>
      {auth.user.username === null ? (
        <MenuItem key={'login'} onClick={handleOpen}>
          Войти
        </MenuItem>
      ) : (
        <MenuItem key={'logout'} onClick={handleLogout}>
          Выйти
        </MenuItem>
      )}

      <CustomModal isOpen={isModalOpen} onClose={handleClose}>
        <Box sx={{ maxWidth: '380px', p: 3 }}>
          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label='Email или номер телефона'
              variant='outlined'
              required
              size='small'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ mb: 5 }} fullWidth>
            <TextField
              label='Пароль'
              variant='outlined'
              type='password'
              size='small'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Stack direction='row'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{ mr: 3 }}
              size='large'
              onClick={handleSubmit}
            >
              Войти
            </Button>
            <Button variant='text' size='large' onClick={handleClose}>
              Отмена
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};
