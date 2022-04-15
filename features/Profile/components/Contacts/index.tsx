import * as React from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { getCurrentUser } from '@store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdateContacts } from '@store/auth/actions';

import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

type TState = {
  canSendOnEmail?: boolean;
  canShowPhoneNumber: boolean;
  favourite: string;
  phoneNumber?: string;
  refTelegram?: string;
  refViber?: string;
  refWhatsapp?: string;
};

const initialState = {
  canSendOnEmail: false,
  canShowPhoneNumber: false,
  favourite: '',
  phoneNumber: '',
  refTelegram: '',
  refViber: '',
  refWhatsapp: '',
};

export const Contacts = (): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);
  const [values, setValues] = React.useState<TState>(initialState);

  const handleChange = React.useCallback(
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    },
    [values],
  );

  const [canShowPhoneNumber, setCanShowPhoneNumber] = React.useState(false);
  const handleCanShowPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanShowPhoneNumber(event.target.checked);
  };

  const [favourite, setFavourite] = React.useState('phone');
  const favoriteHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavourite(event.target.value);
  };

  const updateUserContacts = async () => {
    await dispatch(
      userUpdateContacts({
        id: data?.id,
        email: data?.email,
        favourite,
        canShowPhoneNumber,
        ...values,
      }),
    );
  };

  React.useEffect(() => {
    setValues({ ...initialState, ...data });
  }, [data]);

  console.info(data);

  return (
    <Stack spacing={4}>
      <FormControl>
        <TextField
          size="small"
          id="phoneNumber"
          label="Номер телефона"
          variant="outlined"
          value={values.phoneNumber}
          onChange={handleChange('phoneNumber')}
          sx={{ mr: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          sx={{ mt: 1 }}
          control={
            <Switch checked={canShowPhoneNumber} onChange={handleCanShowPhoneNumber} name="canShowPhoneNumber" />
          }
          label="Показывать в профиле"
        />
      </FormControl>

      <FormControl>
        <TextField
          size="small"
          id="refWhatsapp"
          label="Ссылка на WhatsApp"
          variant="outlined"
          value={values.refWhatsapp}
          onChange={handleChange('refWhatsapp')}
          sx={{ mr: 2 }}
          placeholder="wa.me/"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WhatsAppIcon sx={{ color: '#128C7E' }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          size="small"
          id="refTelegram"
          label="Ссылка на Telegram"
          variant="outlined"
          value={values.refTelegram}
          onChange={handleChange('refTelegram')}
          sx={{ mr: 2 }}
          placeholder="t.me/"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TelegramIcon sx={{ color: '#229ED9' }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          size="small"
          id="refViber"
          label="Ссылка на Viber"
          variant="outlined"
          value={values.refViber}
          onChange={handleChange('refViber')}
          sx={{ mr: 2 }}
          placeholder="viber://"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneInTalkIcon sx={{ color: '#59267c' }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl>
        <Typography variant="h6">Предпочтительный способ связи</Typography>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="radio-buttons">
          <FormControlLabel
            control={<Radio checked={favourite === 'phone'} onChange={favoriteHandle} value="phone" />}
            label="Телефон"
          />
          <FormControlLabel
            control={<Radio checked={favourite === 'whatsapp'} onChange={favoriteHandle} value="whatsapp" />}
            label="WhatsApp"
          />
          <FormControlLabel
            control={<Radio checked={favourite === 'telegram'} onChange={favoriteHandle} value="telegram" />}
            label="Telegram"
          />
          <FormControlLabel
            control={<Radio checked={favourite === 'viber'} onChange={favoriteHandle} value="viber" />}
            label="Viber"
          />
        </RadioGroup>
      </FormControl>

      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" size="large" onClick={updateUserContacts} sx={{ mt: 4 }}>
          Сохранить
        </Button>
      </Stack>
    </Stack>
  );
};
