import * as React from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { Box, Container, Step, StepLabel, Stepper, useTheme, useMediaQuery } from '@mui/material';

// const MapsGeocode = dynamic(() => import('@components/MapsGeocode'), {
//   loading: () => <span>Loading...</span>,
//   ssr: false,
// });

import { getActiveStep } from '@store/newApartForm/selectors';
import { PlaceName } from './components/PlaceName';

import { LastStep } from '@features/CreateApartment/components/LastStep';
import { Address } from '@features/CreateApartment/components/Address';
import { ProgressScreen } from '@components/ProgressScreen';

import styles from './CreateApartment.module.css';

const PlaceTypeDynamic = dynamic(() => import('@features/CreateApartment/components/PlaceType'), {
  loading: () => <ProgressScreen />,
  ssr: false,
});

const CharacteristicsDynamic = dynamic(() => import('@features/CreateApartment/components/Characteristics'), {
  loading: () => <ProgressScreen />,
  ssr: false,
});

const HangDynamic = dynamic(() => import('@features/CreateApartment/components/Hang'), {
  loading: () => <ProgressScreen />,
  ssr: false,
});

const steps = [
  'Тип жилья',
  'Адрес',
  'Характеристики',
  'Особенности',
  // 'Фото',
  'Описание и цена',
  'Проверка',
];

function CreateApartment(): React.ReactElement {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const activeStep = useSelector(getActiveStep);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaceTypeDynamic />;
      case 1:
        return <Address />;
      case 2:
        return <CharacteristicsDynamic />;
      case 3:
        return <HangDynamic />;
      case 4:
        return <PlaceName />;
      case 5:
        return <LastStep />;
      // case 5:
      //   return <MapsGeocode />;
      default:
        return <div>default</div>;
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
export default CreateApartment;
