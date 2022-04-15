import * as React from 'react';

import { PlaceType } from './components/PlaceType';

// import { getCurrentApartment } from '@store/apartments/selectors';
import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { Hang } from './components/Hang';
// import { MapsGeocode } from '@components/MapsGeocode';
// import dynamic from 'next/dynamic';

// const MapsGeocode = dynamic(() => import('@components/MapsGeocode'), {
//   loading: () => <span>Loading...</span>,
//   ssr: false,
// });

import { PlaceName } from './components/PlaceName';
import { useSelector } from 'react-redux';
import { getActiveStep } from '@store/newApartForm/selectors';

const steps = [
  'Тип жилья',
  // 'Адрес',
  'Характеристики',
  // 'Особенности', 'Фото',
  'Описание и цена',
  // 'Проверка'
];

function CreateApartment(): React.ReactElement {
  const activeStep = useSelector(getActiveStep);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaceType />;
      case 1:
        return <Hang />;
      case 2:
        return <PlaceName />;
      // case 3:
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
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 400px)',
          margin: '3rem 0',
        }}
      >
        {getStepContent(activeStep)}
      </Box>

      {/* <ImageUpload /> */}
    </div>
  );
}
export default CreateApartment;
