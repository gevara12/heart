import * as React from 'react';
import { useSelector } from 'react-redux';

import { Box, Container, Step, StepLabel, Stepper, useTheme, useMediaQuery } from '@mui/material';

import { getActiveStep } from '@store/newApartForm/selectors';
import { PlaceName } from '@features/AdditionApartment/components/PlaceName';

import { LastStep } from '@features/AdditionApartment/components/LastStep';
import { Address } from '@features/AdditionApartment/components/Address';

import Characteristics from '@features/AdditionApartment/components/Characteristics';
import PlaceType from '@features/AdditionApartment/components/PlaceType';
import { Hang } from '@features/AdditionApartment/components/Hang';
import { BottomStick } from '@features/AdditionApartment/components/BottomStick';
import styles from './CreateApartment.module.css';

const steps = [
  'Тип жилья',
  'Адрес',
  'Характеристики',
  'Особенности',
  // 'Фото',
  'Описание и цена',
  'Проверка',
];

function AdditionApartment({ item }): React.ReactElement {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const activeStep = useSelector(getActiveStep);
  const { characteristics, additionalRules, betterComfort, description, name, placeType, service, qualities } = item;

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaceType placeTypeInput={placeType} />;
      case 1:
        return <Address />;
      case 2:
        return <Characteristics characteristicsInput={characteristics} />;
      case 3:
        return (
          <Hang
            qualities={qualities}
            additionalRules={additionalRules}
            betterComfort={betterComfort}
            service={service}
          />
        );
      case 4:
        return <PlaceName placeName={name} placeDescription={description} />;
      case 5:
        return <LastStep />;
      // case 5:
      //   return <MapsGeocode />;
      default:
        return (
          <div>
            <BottomStick hasPrev />
          </div>
        );
    }
  };

  return (
    <div className="container">
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>{isMobile ? <StepLabel /> : <StepLabel>{label}</StepLabel>}</Step>
          ))}
        </Stepper>
      </Box>

      <Box className={styles.centerBlock}>
        <Container maxWidth="md" sx={{ pb: 5 }}>
          {getStepContent(activeStep)}
        </Container>
      </Box>
    </div>
  );
}

export default AdditionApartment;
