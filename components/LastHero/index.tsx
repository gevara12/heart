import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { SITE_NAME } from '@utils/constants';

import styles from './LastHero.module.css';

import { apiUrl } from '@store/constants';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const LastHero = (): React.ReactElement => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const ToggleButtonStyled = styled(ToggleButton)({
    '&.MuiToggleButton-root, &.MuiToggleButton-root:hover': {
      color: 'white',
      borderColor: '#fff',
      transition: 'all 0.5s ease-out',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: '#ffffff69',
    },
  });

  const [email, setEmail] = React.useState<string>('');
  const [userType, setUserType] = React.useState('');
  const [open, setOpen] = React.useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);

  const re = /\S+@\S+\.\S+/;
  const isValid = re.test(email);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpen(false);
  };

  const submitHandle = async () => {
    try {
      if (isValid) {
        axios.post(apiUrl('public/users/notify/me'), {
          userType,
          email,
        });
        setOpenSuccess(true);
      } else {
        setOpen(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.host}>
      <div className={styles.container}>
        <h1 className={styles.title}>{SITE_NAME}</h1>

        <p className={styles.description}>
          Приветствуем! Мы - команда энтузиастов, которые собираются создать своими силами новый сервис для аренды жилья
          с максимально человечным подходом. Мы планируем использовать опыт лучших продуктов для гостеприимства, ныне
          нам недоступных.
        </p>
        <p className={styles.description}>
          Если вам хочется в будущем оставаться на связи и получать новости о наших запусках, пожалуйста, выберите свою
          основную роль на сайте и укажите свой <span style={{ whiteSpace: 'nowrap' }}>e-mail</span>.
        </p>
      </div>

      <div className={styles.form}>
        <FormControl fullWidth sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, mb: 4 }}>
          <ToggleButtonStyled
            value="guest"
            onClick={(e) => setUserType(e.target.value)}
            selected={userType === 'guest'}
          >
            Гость
          </ToggleButtonStyled>
          <ToggleButtonStyled value="host" onClick={(e) => setUserType(e.target.value)} selected={userType === 'host'}>
            Хозяин
          </ToggleButtonStyled>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Email"
            variant="filled"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            sx={{ input: { color: '#fff' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{ style: { color: '#fff' } }}
            error={false}
          />
        </FormControl>
        <button className={styles.button} onClick={submitHandle}>
          Я в деле!
        </button>
      </div>
      <div className={styles.container}>
        <p className={styles.subDescription}>
          Отправляя свои данные, вы даете согласие на обработку в соответствии с{' '}
          <Link href={'/privacy'} pasHref>
            <a style={{ color: '#00A699', textDecoration: 'none' }}>политикой по обработке персональных данных</a>
          </Link>
          .
        </p>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Неправильный email
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Спасибо! Теперь Вы в деле.
        </Alert>
      </Snackbar>
    </div>
  );
};
