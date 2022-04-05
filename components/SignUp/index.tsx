import * as React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import {Box, Button, FormControl, Stack, TextField, Typography} from '@mui/material';

import { CustomModal } from '@components/CustomModal';
import { userRegister } from '@store/auth/actions';
// import { getErrorSelector } from '@store/error/selectors';
import { setError } from '@store/error/actions';
import MenuItem from "@mui/material/MenuItem";

export const SignUp = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [userName, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // @ts-ignore
  // const { message } = useSelector(getMessage);
  const changeMessage = React.useCallback((newMessage) => {
    dispatch(setError(newMessage));
  }, [dispatch]);

  // const [message, setMessage] = React.useState<string>('');

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const handleSubmit = React.useCallback(async () => {
    try {
      console.log(userName, email, password);
      await dispatch(userRegister({ userName, email, password }));
      debounce(changeMessage, 500);
      // message === '' && handleClose();
    } catch (error) {
      console.error(error);
    }
  }, [userName, email, password, dispatch, changeMessage]);

  // console.info('message', message);

  return (
    <div>
      <MenuItem key={'register'} onClick={handleOpen}>
        Регистрация
      </MenuItem>
      {/*<Button
        variant='text'
        onClick={handleOpen}
        sx={{
          color: 'text.primary',
        }}
      >
        Регистрация
      </Button>*/}

      <CustomModal isOpen={isModalOpen} onClose={handleClose}>
        <Box sx={{ maxWidth: '380px', p: 4 }}>
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

          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label='Email'
              variant='outlined'
              type='email'
              size='small'
              required
              onChange={(e) => setEmail(e.target.value)}
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

          {/*{message !== '' && (<div>{message}</div>)}*/}

          <Stack direction='row'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{ mr: 3 }}
              size='large'
              onClick={handleSubmit}
            >
              Signup
            </Button>
            <Button variant='text' size='large' onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};
