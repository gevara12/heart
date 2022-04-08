import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';

import MuiPhoneNumber from 'material-ui-phone-number';

import { CustomModal } from '@components/CustomModal';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';
import { userRegister } from '@store/auth/actions';

export const SignUp = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [userName, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rePassword, setRePassword] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const phoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = React.useCallback(async () => {
    try {
      if (password === rePassword && phoneNumber.length > 17) {
        await dispatch(userRegister({ email, phoneNumber, password }));
        dispatch(
          showSnackbar({
            message: 'Вы успешно зарегистрированы',
            severity: SeverityEnum.success,
          })
        );
      } else {
        dispatch(
          showSnackbar({
            message: 'Пожалуйста, заполните поля',
            severity: SeverityEnum.warning,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [userName, email, password, dispatch]);

  console.info(phoneNumber.length, password === rePassword);
  return (
    <div>
      <MenuItem key={'register'} onClick={handleOpen}>
        Регистрация
      </MenuItem>

      <CustomModal isOpen={isModalOpen} onClose={handleClose}>
        <Box sx={{ maxWidth: '380px', p: 4 }}>
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

          <FormControl sx={{ mb: 4 }} fullWidth>
            <MuiPhoneNumber
              defaultCountry={'ru'}
              label='Номер телефона'
              variant='outlined'
              size='small'
              regions={'europe'}
              onChange={phoneChange}
            />
          </FormControl>

          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label='Введите пароль'
              variant='outlined'
              type='password'
              size='small'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ mb: 5 }} fullWidth>
            <TextField
              label='Повторите пароль'
              variant='outlined'
              type='password'
              size='small'
              required
              onChange={(e) => setRePassword(e.target.value)}
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
              Регистрация
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
