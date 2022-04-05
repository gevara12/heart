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
import { getErrorSelector } from '@store/error/selectors';
import MenuItem from "@mui/material/MenuItem";

export const LogIn = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(getErrorSelector);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const auth = useSelector(getUserStatus);

  const handleSubmit = async () => {
    try {
      await dispatch(userLogin({ userName, password }));
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
  }, [dispatch, error]);

  return (
    <div>
      {auth.user.username === null ? (
        <MenuItem key={'login'} onClick={handleOpen}>Войти</MenuItem>
        /*<Button
          variant='text'
          onClick={handleOpen}
          sx={{
            color: 'text.primary',
          }}
        >
          Войти
        </Button>*/
      ) : (
        <MenuItem key={'logout'} onClick={handleLogout}>Выйти</MenuItem>
        /*<Button
          variant='text'
          color='primary'
          sx={{
            color: 'text.primary',
          }}
          onClick={handleLogout}
        >
          Log Out
        </Button>*/
      )}

      <CustomModal isOpen={isModalOpen} onClose={handleClose}>
        <Box sx={{ maxWidth: '380px', p: 3 }}>
          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label='Имя пользователя'
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
              Log in
            </Button>
            <Button variant='text' size='large' onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
          {error && (
            <Typography variant='h6' component='p' color='error'>
              {error}
            </Typography>
          )}
        </Box>
      </CustomModal>
    </div>
  );
};
