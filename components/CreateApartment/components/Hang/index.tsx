import * as React from 'react';
import { Typography } from '@mui/material';

import { Qualities } from '../Qualities';
import { BetterComfort } from '../BetterComfort';
import { CheckInOut } from '../CheckInOut';

import styles from './Hang.module.css';

export const Hang = () => {
  return (
    <>
      <Typography variant='h4' className={styles.title}>
        Укажите удобства вашего жилья
      </Typography>

      <Qualities />

      <BetterComfort />

      <Typography variant='h4' className={styles.title}>
        Укажите правила в вашем жилье
      </Typography>

      <CheckInOut />
    </>
  );
};
