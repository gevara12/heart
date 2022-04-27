import * as React from 'react';
import { LogIn } from '@components/LogIn';
import { SignUp } from '@components/SignUp';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import styles from './LoginWall.module.css';

export const LoginWall = (): React.ReactElement => {
  return (
    <div className={styles.host}>
      <Typography variant="h5" sx={{ mb: 6 }}>
        Чтобы увидеть контент данной страницы нужно авторизоваться
      </Typography>
      <div className={styles.menu}>
        <SignUp isLoginWall />

        <Divider sx={{ my: 4 }}>или</Divider>

        <LogIn isLoginWall />
      </div>
    </div>
  );
};
