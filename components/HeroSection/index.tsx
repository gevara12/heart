import * as React from 'react';
import { Container, Typography, useTheme } from '@mui/material';

import { Search } from '@features/Search';

import styles from './HeroSection.module.css';
import { Box } from '@material-ui/core';


export const HeroSection = (): React.ReactElement => {
  const title = 'Сервис краткосрочной аренды жилья';
  const description = 'HeartApart объединяет гостей и хозяев уникальных квартир';

  const theme = useTheme();

  return (
    <Box className={styles.host} sx={{padding:{xs:'50px 0', md:'150px 0',}}}>
      <Container>
        <Box sx={{maxWidth:{ xs:'480px', lg:'none' }, margin:'0 auto'}} >
          <Typography
            component='div'
            gutterBottom
            sx={{ fontWeight:700, fontSize:{ xs:theme.typography.h4.fontSize, lg:theme.typography.h3.fontSize} }}
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography
            component='div'
            gutterBottom
            sx={{ fontSize:{ xs:theme.typography.body1.fontSize, lg:theme.typography.subtitle1.fontSize} }}
            className={styles.description}
          >
            {description}
          </Typography>
          <Search />
        </Box>
      </Container>
    </Box>
  );
};
