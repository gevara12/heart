import * as React from 'react';
import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from './Page404.module.css';

export const Page404 = (): React.ReactElement => {
  const router = useRouter();

  const HomeLink = () => {
    router.push('/hero');
  };

  return (
    <div className={styles.page}>
      <Typography variant="h1" className={styles.title}>
        404
      </Typography>

      <Typography variant="h5" className={styles.subtitle}>
        Извините, мы не можем найти страницу
      </Typography>

      <Button variant="contained" onClick={HomeLink} size="large">
        На главную
      </Button>
    </div>
  );
};
