import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import { TPlaceType } from '@utils/types';

import styles from './PlaceType.module.css';
// import { createApartment } from '@store/apartments/actions';
import { NextButton } from '../NextButton';
import { FORM_VALUE, INCREASE } from '@store/constants';
import { getFormValues } from '@store/newApartForm/selectors';

export const PlaceType = () => {
  const dispatch = useDispatch();
  const { placeType } = useSelector(getFormValues);

  const handleNext = () => {
    dispatch({ type: INCREASE });
  };

  const placeArr = [
    { type: 'entire-place', label: 'Жилье целиком' },
    { type: 'private-room', label: 'Отдельная комната' },
    { type: 'hotel-room', label: 'Гостиничный номер' },
    { type: 'shared-room', label: 'Место в комнате' },
  ];

  const handlePlace = (event: React.MouseEvent<HTMLElement>, newPlace: TPlaceType) => {
    dispatch({
      type: FORM_VALUE,
      name: 'placeType',
      fieldValue: newPlace,
    });
  };

  return (
    <div className={styles.host}>
      <Typography variant="h4" className={styles.title}>
        Выберите тип жилья
      </Typography>

      <ToggleButtonGroup value={placeType?.value} exclusive onChange={handlePlace} orientation="vertical">
        {placeArr.map(({ type, label }) => {
          return (
            <ToggleButton value={type} aria-label={type} key={type} color="primary" size="small">
              {label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>

      <NextButton onClick={handleNext} />
    </div>
  );
};
