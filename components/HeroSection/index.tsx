import * as React from 'react';
import { Container, Typography } from '@mui/material';

import { Search } from '@features/Search';

import styles from './HeroSection.module.css';

export const HeroSection = (): React.ReactElement => {
  const title = 'Сервис краткосрочной аренды жилья';
  const description =
    'HeartApart объединяет гостей и хозяев уникальных квартир';

  return (
    <div className={styles.host}>
      <Container maxWidth={false} sx={{ maxWidth: '1128px' }}>
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
