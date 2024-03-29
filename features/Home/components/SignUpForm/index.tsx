import * as React from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Stack,
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';

import { usePasswordValidation } from '@hooks/usePasswordValidation';
import { userRegister } from '@store/auth/actions';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';
import MuiPhoneNumber from 'material-ui-phone-number';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function SignUpForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [showPassword, setPasswordVisibility] = React.useState<boolean>(false);

  const handleVisibility = () => {
    setPasswordVisibility(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [password, setPassword] = React.useState({ firstPassword: '', secondPassword: '' });

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

  const phoneChange = (value: string) => {
    let resultValue = value.replace(/\D/g, '');
    setPhoneNumber(resultValue);
  };

  let passwordValid = validLength && hasNumber && upperCase && lowerCase && match;

  const showError = !passwordValid && password.firstPassword.length > 0;

  const handleSubmit = React.useCallback(async () => {
    try {
      await dispatch(userRegister({ email, phoneNumber, password: password.firstPassword }));
      dispatch(showSnackbar({ message: 'Вы успешно зарегистрированы', severity: SeverityEnum.success }));
    } catch (error) {
      console.error(error);
    }
  }, [email, password, dispatch]);

  return (
    <Box>
      <Stack direction={'column'} spacing={1.5}>
        <FormControl fullWidth>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <MuiPhoneNumber
            defaultCountry={'ru'}
            label="Номер телефона"
            variant="outlined"
            size="small"
            regions={'europe'}
            onChange={phoneChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="password" size="small">
            Введите пароль
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password.firstPassword}
            onChange={setFirst}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleVisibility}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            size="small"
            label="Введите пароль"
            error={showError}
          />
          {showError && (
            <FormHelperText>
              Пароль должен содержать больше 8 символов, верхний регистр и должен совпадать
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="second-password"
            type={showPassword ? 'text' : 'password'}
            value={password.secondPassword}
            onChange={setSecond}
            size="small"
            label="Повторите пароль"
            error={showError}
          />
        </FormControl>
      </Stack>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 2.5 }}
        onClick={handleSubmit}
        disabled={!(email && passwordValid)}
        fullWidth
      >
        Регистрация
      </Button>
    </Box>
  );
}
