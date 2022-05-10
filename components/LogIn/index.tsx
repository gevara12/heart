import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { CustomModal } from '@components/CustomModal';
import { logout, userLogin } from '@store/auth/actions';
import { getUserStatus } from '@store/auth/selectors';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';

export const LogIn = ({ isLoginWall = false }: { isLoginWall?: boolean }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setPasswordVisibility] = React.useState<boolean>(false);

  const handleVisibility = () => {
    setPasswordVisibility(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
        }),
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
  }, [dispatch]);

  return (
    <div>
      {isLoginWall ? (
        <Button variant='contained' onClick={handleOpen}>
          Войти
        </Button>
      ) : (
        <>
          {auth.isLoggedIn === true ? (
            <MenuItem key={'logout'} onClick={handleLogout}>
              Выйти
            </MenuItem>
          ) : (
            <MenuItem key={'login'} onClick={handleOpen}>
              Войти
            </MenuItem>
          )}
        </>
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
            <InputLabel htmlFor='login-password' size='small'>
              Пароль
            </InputLabel>
            <OutlinedInput
              id='login-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleVisibility}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              size='small'
              label='Введите пароль'
            />
          </FormControl>

          <Stack direction='row'>
            <Button
              fullWidth
              disabled={!userName}
              type='submit'
              variant='contained'
              color='primary'
              sx={{ mr: 3 }}
              size='large'
              onClick={handleSubmit}
            >
              Войти
            </Button>
            <Button fullWidth variant='text' size='large' onClick={handleClose}>
              Отмена
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};
