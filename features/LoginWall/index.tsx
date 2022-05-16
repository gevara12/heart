import * as React from 'react';

import Typography from '@mui/material/Typography';

import { LogIn } from '@components/LogIn';
import { SignUp } from '@components/SignUp';

import styles from './LoginWall.module.css';

export const LoginWall = (): React.ReactElement => (
  <div className={styles.host}>
    <Typography variant="h5" sx={{ mb: 6 }}>
      Чтобы увидеть контент данной страницы нужно авторизоваться
    </Typography>
    <div className={styles.menu}>
      <SignUp isLoginWall />

      <LogIn isLoginWall />
    </div>
  </div>
);
