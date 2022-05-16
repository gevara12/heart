import * as React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { DECREASE, INCREASE } from '@store/constants';

import styles from './BottomStick.module.css';

type TBottomStickProps = {
  clickPrev?: () => void;
  clickNext?: () => void;
  hasPrev?: boolean;
};

export const BottomStick = ({ clickPrev, clickNext, hasPrev }: TBottomStickProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch({ type: DECREASE });
    clickPrev && clickPrev();
  };

  const handleNext = () => {
    clickNext ? clickNext() : dispatch({ type: INCREASE });
  };

  return (
    <div className={styles.host}>
      {hasPrev && (
        <Button variant="contained" onClick={handlePrev}>
          Назад
        </Button>
      )}
      <span className={styles.wider} />
      <Button variant="contained" onClick={handleNext}>
        Дальше
      </Button>
    </div>
  );
};
