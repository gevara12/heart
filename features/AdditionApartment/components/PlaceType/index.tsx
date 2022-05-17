import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Box, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from '@mui/material';

import { TPlaceType } from '@utils/types';
import { FORM_VALUE } from '@store/constants';

import { BottomStick } from '@features/CreateApartment/components/BottomStick';

import styles from './PlaceType.module.css';

const PlaceType = ({ placeTypeInput }: { placeTypeInput: TPlaceType }): React.ReactElement => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const dispatch = useDispatch();
  const [placeType, setPlaceType] = React.useState({ value: placeTypeInput });
  const placeArr = [
    { type: 'entire-place', label: 'Жилье целиком' },
    { type: 'private-room', label: 'Отдельная комната' },
    { type: 'hotel-room', label: 'Гостиничный номер' },
    { type: 'shared-room', label: 'Место в комнате' },
  ];

  const handlePlace = (event: React.MouseEvent<HTMLElement>, newPlace: TPlaceType) => {
    setPlaceType({ value: newPlace });
    dispatch({
      type: FORM_VALUE,
      name: 'placeType',
      fieldValue: newPlace,
    });
  };

  return (
    <div className={styles.host}>
      <Typography variant='h4' className={styles.title}>
        Выберите тип жилья
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ToggleButtonGroup
          value={placeType?.value}
          exclusive
          onChange={handlePlace}
          orientation={isMobile ? 'vertical' : 'horizontal'}
        >
          {placeArr.map(({ type, label }) => (
            <ToggleButton
              value={type}
              aria-label={type}
              key={type}
              color='primary'
              size={isMobile ? 'small' : 'large'}
            >
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <BottomStick />
    </div>
  );
};

export default PlaceType;
