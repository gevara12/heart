import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

import ruLocale from 'date-fns/locale/ru';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { userUpdateInfo } from '@store/auth/actions';
import { getCurrentUser } from '@store/auth/selectors';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';

type TState = {
  name: string;
  surname: string;
  description?: string;
  city?: string;
  gender?: string;
  dateOfBirth?: string;
};

const initialState = {
  name: '',
  surname: '',
  description: '',
  city: '',
  gender: '',
};

export const PersonalInfo = (): React.ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);
  // console.info('profile', data);

  const [values, setValues] = React.useState<TState>(initialState);

  const handleChange = React.useCallback(
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    },
    [values],
  );

  const [dateOfBirth, setDateOfBirth] = React.useState<Date | null>(new Date('01.01.2003'));

  const handleChangeDate = React.useCallback(
    (newValue: Date | null) => {
      setDateOfBirth(newValue);
    },
    [values],
  );

  const updateUserInfo = async () => {
    await dispatch(
      userUpdateInfo({
        id: data?.id,
        dateOfBirth: `${dateOfBirth.getDay()}.${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}`,
        ...values,
      }),
    );

    dispatch(
      showSnackbar({
        message: 'Информация успешно сохранена',
        severity: SeverityEnum.success,
      }),
    );
  };

  React.useEffect(() => {
    setValues({ ...initialState, ...data });
  }, [data]);

  // console.info(values);

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
          <FormControl fullWidth>
            <TextField
              size="small"
              id="name"
              label="Имя"
              variant="outlined"
              value={values.name}
              onChange={handleChange('name')}
              // error={openWarning}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              size="small"
              id="surname"
              label="Фамилия"
              variant="outlined"
              value={values.surname}
              onChange={handleChange('surname')}
              required
            />
          </FormControl>
        </Stack>

        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
              <DesktopDatePicker
                label="Дата рождения"
                inputFormat="dd.MM.yyyy"
                mask="__.__.____"
                value={dateOfBirth}
                onChange={handleChangeDate}
                views={['year', 'month', 'day']}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel size="small" id="gender-label">
              Пол
            </InputLabel>
            <Select
              size="small"
              labelId="gender-label"
              id="gender-select"
              value={values.gender}
              label="Пол"
              onChange={handleChange('gender')}
            >
              <MenuItem value={'Мужской'}>Мужской</MenuItem>
              <MenuItem value={'Женский'}>Женский</MenuItem>
              <MenuItem value={'Общий'}>Общий</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <FormControl fullWidth>
          <TextField
            size="small"
            id="city"
            label="Город"
            variant="outlined"
            value={values.city}
            onChange={handleChange('city')}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            size="small"
            id="description"
            label="Расскажите о себе"
            variant="outlined"
            multiline
            rows={6}
            value={values.description}
            onChange={handleChange('description')}
            inputProps={{ maxLength: 400 }}
            FormHelperTextProps={{
              sx: {
                textAlign: 'right',
              },
            }}
            helperText={`${values.description.length}/400`}
          />
        </FormControl>
      </Stack>

      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" size="large" onClick={updateUserInfo} sx={{ mt: 4 }}>
          Сохранить
        </Button>
      </Stack>
    </>
  );
};
