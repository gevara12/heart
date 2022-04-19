import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, FormControl, MenuItem, Stack, TextField } from '@mui/material';

import MuiPhoneNumber from 'material-ui-phone-number';

import { CustomModal } from '@components/CustomModal';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';
import { userRegister } from '@store/auth/actions';
import { usePasswordValidation } from '@hooks/usePasswordValidation';

export const SignUp = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [email, setEmail] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');

  const [password, setPassword] = React.useState({
    firstPassword: '',
    secondPassword: '',
  });

  const [validLength, upperCase, lowerCase, match, specialChar] = usePasswordValidation({
    firstPassword: password.firstPassword,
    secondPassword: password.secondPassword,
  });

  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value });
  };
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const phoneChange = (value: string) => {
    let resultValue = value.replace(/\D/g, '');
    setPhoneNumber(resultValue);
  };

  let passwordValid = validLength && upperCase && lowerCase && match && specialChar;

  const handleSubmit = React.useCallback(async () => {
    console.info(passwordValid, email);
    try {
      if (passwordValid && email) {
        await dispatch(userRegister({ email, phoneNumber, password: password.firstPassword }));
        dispatch(
          showSnackbar({
            message: 'Вы успешно зарегистрированы',
            severity: SeverityEnum.success,
          }),
        );
        handleClose();
      } else {
        dispatch(
          showSnackbar({
            message: 'Что-то пошло не так',
            severity: SeverityEnum.error,
          }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [email, password, dispatch]);

  return (
    <div>
      <MenuItem key={'register'} onClick={handleOpen}>
        Регистрация
      </MenuItem>

      <CustomModal isOpen={isModalOpen} onClose={handleClose}>
        <Box sx={{ maxWidth: '380px', p: 4 }}>
          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ mb: 4 }} fullWidth>
            <MuiPhoneNumber
              defaultCountry={'ru'}
              label="Номер телефона"
              variant="outlined"
              size="small"
              regions={'europe'}
              onChange={phoneChange}
            />
          </FormControl>

          <FormControl sx={{ mb: 4 }} fullWidth>
            <TextField
              label="Введите пароль"
              variant="outlined"
              type="password"
              size="small"
              required
              value={password.firstPassword}
              onChange={setFirst}
              error={!passwordValid}
            />
          </FormControl>

          <FormControl sx={{ mb: 5 }} fullWidth>
            <TextField
              label="Повторите пароль"
              variant="outlined"
              type="password"
              size="small"
              required
              value={password.secondPassword}
              onChange={setSecond}
              error={!passwordValid}
              helperText="Пароль должен содержать больше 8 символов, специальный знак, верхний регистр и должен совпадать"
            />
          </FormControl>

          <Stack direction="row">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 3 }}
              size="large"
              onClick={handleSubmit}
            >
              Регистрация
            </Button>
            <Button variant="text" size="large" onClick={handleClose}>
              Отмена
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};
