import * as React from 'react';
import { Container, Typography } from '@mui/material';

import { Search } from '@features/Search';

import styles from './HeroSection.module.css';

export const HeroSection = (): React.ReactElement => {
  const title = 'Красивый заголовок';
  const description = 'Не менее красивый дескрипшн';

  return (
    <div className={styles.host}>
      <Container maxWidth='lg'>
        <Typography
          variant='h2'
          component='div'
          gutterBottom
          sx={{ fontWeight: 700 }}
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant='h4'
          component='div'
          gutterBottom
          sx={{ fontWeight: 700 }}
          className={styles.description}
        >
          {description}
        </Typography>
        <Search />
      </Container>
    </div>
  );
};
