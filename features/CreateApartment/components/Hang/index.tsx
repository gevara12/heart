import * as React from 'react';
import { Typography } from '@mui/material';

import { Qualities } from '../Qualities';
import { CheckInOut } from '../CheckInOut';

import styles from './Hang.module.css';
import { NextButton } from '../NextButton';
import { useDispatch } from 'react-redux';
import { INCREASE } from '@store/constants';
import { BetterComfort } from '@features/CreateApartment/components/BetterComfort';

export const Hang = () => {
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch({ type: INCREASE });
  };
  return (
    <>
      <Typography variant="h4" className={styles.title}>
        Укажите удобства вашего жилья
      </Typography>

      <Qualities />

      <BetterComfort />

      <Typography variant="h4" className={styles.title}>
        Укажите правила в вашем жилье
      </Typography>

      <CheckInOut />

      <NextButton onClick={handleNext} />
    </>
  );
};
