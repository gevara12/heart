import * as React from 'react';
import { Container, Typography } from '@mui/material';

import { Search } from '@features/Search';

import styles from './HeroSection.module.css';

const containerStyles = { // TODO: better variant?
  maxWidth: '480px',
  '@media(minWidth: 1200px)' : {
    maxWidth: 'none',
  }
};

export const HeroSection = (): React.ReactElement => {
  const title = 'Сервис краткосрочной аренды жилья';
  const description = 'HeartApart объединяет гостей и хозяев уникальных квартир';

  return (
    <div className={styles.host}>
      <Container sx={containerStyles}>
        <Typography
          variant='h3'
          component='div'
          gutterBottom
          sx={{ fontWeight: 700 }}
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant='h5'
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
