import * as React from 'react';
import {
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';

import ruLocale from 'date-fns/locale/ru';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from '@store/auth/actions';
import { getCurrentUser } from '@store/auth/selectors';

type TProfileEditProps = {};

type TState = {
  name: string;
  surname: string;
  description?: string;
  phoneNumber?: string;
  city?: string;
  gender?: string;
  refAbb?: string;
  refWhatsapp?: string;
  refTelegram?: string;
  refViber?: string;
  dateOfBirth?: string;
};

const initialState = {
  name: '',
  surname: '',
  description: '',
  phoneNumber: '',
  city: '',
  gender: '',
  refAbb: '',
  refWhatsapp: '',
  refTelegram: '',
  refViber: '',
};

export const ProfileEdit = ({}: TProfileEditProps): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);
  console.info('profile', data);

  const [values, setValues] = React.useState<TState>(initialState);

  const handleChange = React.useCallback(
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    },
    [values],
  );

  const [canUsePhoneNumber, setCanUsePhoneNumber] = React.useState(false);

  const handleCanUsePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanUsePhoneNumber(event.target.checked);
  };

  const [dateOfBirth, setDateOfBirth] = React.useState<Date | null>(new Date('01.01.2003'));

  const handleChangeDate = React.useCallback(
    (newValue: Date | null) => {
      setDateOfBirth(newValue);
    },
    [values],
  );

  const updateUserInfo = async () => {
    await dispatch(
      userUpdate({
        id: data?.id,
        canUsePhoneNumber,
        dateOfBirth: `${dateOfBirth.getDay()}.${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}`,
        ...values,
      }),
    );
  };

  React.useEffect(() => {
    setValues({ ...initialState, ...data });
  }, [data]);

  console.info(values);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Редактировать профиль
      </Typography>

      <Stack spacing={4}>
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
          />
        </FormControl>

        <Typography variant="overline">Контакты и уведомления</Typography>
        <FormControl fullWidth>
          <TextField
            size="small"
            id="phoneNumber"
            label="Номер телефона"
            variant="outlined"
            value={values.phoneNumber}
            onChange={handleChange('phoneNumber')}
            sx={{ mb: 3 }}
          />

          <FormControlLabel
            control={<Switch checked={canUsePhoneNumber} onChange={handleCanUsePhoneNumber} name="canUsePhoneNumber" />}
            label="Показывать в профиле"
          />
        </FormControl>

        <FormControl fullWidth>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Синхронизация с сервисом А
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Если вы ранее были зарегистрированы на американском сервисе аренды жилья А, вы можете указать ссылку на свой
            профиль.
          </Typography>

          <TextField
            size="small"
            id="refAbb"
            label="Ссылка на сервис А"
            variant="outlined"
            value={values.refAbb}
            onChange={handleChange('refAbb')}
          />
        </FormControl>

        <FormControl fullWidth>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Подключение месседжеров
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Добавьте ссылки на ваши месседжеры, чтобы потенциальные гости могли связаться с вами.
          </Typography>

          <TextField
            size="small"
            id="refAbb"
            label="Ссылка на Whatsapp"
            variant="outlined"
            value={values.refWhatsapp}
            onChange={handleChange('refWhatsapp')}
          />
        </FormControl>
      </Stack>

      <Button variant="contained" size="large" onClick={updateUserInfo} sx={{ mt: 4 }}>
        Сохранить
      </Button>
    </div>
  );
};
