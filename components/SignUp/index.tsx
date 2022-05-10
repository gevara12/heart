import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

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
  FormHelperText,
} from '@mui/material';

import MuiPhoneNumber from 'material-ui-phone-number';

import { CustomModal } from '@components/CustomModal';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';
import { userRegister } from '@store/auth/actions';
import { usePasswordValidation } from '@hooks/usePasswordValidation';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const SignUp = ({ isLoginWall = false }: { isLoginWall?: boolean }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [email, setEmail] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [showPassword, setPasswordVisibility] = React.useState<boolean>(false);

  const handleVisibility = () => {
    setPasswordVisibility(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [password, setPassword] = React.useState({
    firstPassword: '',
    secondPassword: '',
  });

  const [validLength, hasNumber, upperCase, lowerCase, match] = usePasswordValidation({
    firstPassword: password.firstPassword,
    secondPassword: password.secondPassword,
  });

  const setFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, firstPassword: event.target.value });
  };

  const setSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const phoneChange = (value: string) => {
    let resultValue = value.replace(/\D/g, '');
    setPhoneNumber(resultValue);
  };

  let passwordValid = validLength && hasNumber && upperCase && lowerCase && match;

  const showError = !passwordValid && password.firstPassword.length > 0;

  const handleSubmit = React.useCallback(async () => {
    try {
      await dispatch(userRegister({ email, phoneNumber, password: password.firstPassword }));
      dispatch(
        showSnackbar({
          message: 'Вы успешно зарегистрированы',
          severity: SeverityEnum.success,
        }),
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }, [email, password, dispatch]);

  return (
    <div>
      {isLoginWall ? (
        <Button variant='contained' onClick={handleOpen}>
          Регистрация
        </Button>
      ) : (
        <MenuItem key={'register'} onClick={handleOpen}>
          Регистрация
        </MenuItem>
      )}

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
            <InputLabel htmlFor='password' size='small'>
              Введите пароль
            </InputLabel>
            <OutlinedInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={password.firstPassword}
              onChange={setFirst}
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
              error={showError}
            />
            {showError && (
              <FormHelperText>
                Пароль должен содержать больше 8 символов, верхний регистр и должен совпадать
              </FormHelperText>
            )}
          </FormControl>

          <FormControl sx={{ mb: 5 }} fullWidth>
            <TextField
              id='second-password'
              type={showPassword ? 'text' : 'password'}
              value={password.secondPassword}
              onChange={setSecond}
              size='small'
              label='Повторите пароль'
              error={showError}
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
              disabled={!(email && passwordValid)}
              fullWidth
            >
              Регистрация
            </Button>
            <Button variant='text' size='large' onClick={handleClose} fullWidth>
              Отмена
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};
