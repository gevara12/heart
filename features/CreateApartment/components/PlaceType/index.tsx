import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

import { TPlaceType } from '@utils/types';
import { FORM_VALUE } from '@store/constants';
import { getFormValues } from '@store/newApartForm/selectors';

import { BottomStick } from '@features/CreateApartment/components/BottomStick';

import styles from './PlaceType.module.css';

const PlaceType = (): React.ReactElement => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const dispatch = useDispatch();
  const { placeType } = useSelector(getFormValues);

  const placeArr = [
    { type: 'entire_home', label: 'Жилье целиком' },
    { type: 'private_home', label: 'Отдельная комната' },
    { type: 'hotel_home', label: 'Гостиничный номер' },
    { type: 'shared_home', label: 'Место в комнате' },
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

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ToggleButtonGroup
          value={placeType?.value}
          exclusive
          onChange={handlePlace}
          orientation={isMobile ? 'vertical' : 'horizontal'}
        >
          {placeArr.map(({ type, label }) => {
            return (
              <ToggleButton
                value={type}
                aria-label={type}
                key={type}
                color="primary"
                size={isMobile ? 'small' : 'large'}
              >
                {label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>

      <BottomStick />
    </div>
  );
};

export default PlaceType;
