import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import { TPlaceType } from '@utils/types';

import styles from './PlaceType.module.css';
import { createApartment } from '@store/apartments/actions';
import { SaveButton } from '../SaveButton';
import { ApartmentReducer } from '@features/CreateApartment/customReducer';

export const PlaceType = () => {
  const dispatch = useDispatch();

  const placeArr = [
    { type: 'entire-place', label: 'Жилье целиком' },
    { type: 'private-room', label: 'Отдельная комната' },
    { type: 'hotel-room', label: 'Гостиничный номер' },
    { type: 'shared-room', label: 'Место в комнате' },
  ];

  const [placeType, setPlaceType] = React.useState<TPlaceType>(
    placeArr[0].type as TPlaceType
  );

  const handlePlace = (
    event: React.MouseEvent<HTMLElement>,
    newPlace: TPlaceType
  ) => {
    setPlaceType(newPlace);
  };

  const initialState = {
    currentApartment: {},
  };

  const [state, apartDispatch] = React.useReducer(
    ApartmentReducer,
    initialState
  );

  const createNew = async () => {
    try {
      // @ts-ignore
      apartDispatch({ type: 'update', payload: { placeType } });
      // await dispatch(
      //   createApartment({
      //     placeType,
      //   })
      // );
    } catch (e: unknown) {
      console.error(e);
    }
  };

  React.useEffect(() => {}, []);

  console.info('state', state);

  return (
    <div className={styles.host}>
      <Typography variant='h4' className={styles.title}>
        Выберите тип жилья
      </Typography>

      <ToggleButtonGroup value={placeType} exclusive onChange={handlePlace}>
        {placeArr.map(({ type, label }) => {
          return (
            <ToggleButton
              value={type}
              aria-label={type}
              key={type}
              color='primary'
            >
              {label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>

      {/* <Button onClick={createNew}>Next</Button> */}
      <SaveButton onClick={createNew} />
    </div>
  );
};
