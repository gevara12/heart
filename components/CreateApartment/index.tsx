import * as React from 'react';

import { PlaceType } from './components/PlaceType';

// import { getCurrentApartment } from '@store/apartments/selectors';
import { Box, Button, Step, StepButton, Stepper } from '@mui/material';
// import { MapsGeocode } from '@components/MapsGeocode';
import { Qualities } from './components/Qualities';

// import styles from './CreateApartment.module.css';

const steps = [
  'Тип жилья',
  'Адрес',
  'Характеристики',
  'Особенности',
  'Фото',
  'Описание и цена',
  'Проверка',
];

export const CreateApartment = (): React.ReactElement => {
  const [activeStep, setActiveStep] = React.useState(0);

  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaceType />;
      case 1:
        return <div>default</div>;
      case 3:
        return <Qualities />;
      default:
        return <div>default</div>;
    }
  };

  return (
    <div className='container'>
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                {label}
              </StepButton>
              {/* <StepContent>{getStepContent(index)}</StepContent> */}
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box sx={{ minHeight: 'calc(100vh - 400px)', margin: '3rem 0' }}>
        {getStepContent(activeStep)}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant='outlined'
        >
          Back
        </Button>
        <Button onClick={handleNext} variant='outlined'>
          Next
        </Button>
      </Box>

      {/* <ImageUpload /> */}
    </div>
  );
};
