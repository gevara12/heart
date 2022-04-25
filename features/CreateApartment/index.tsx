import * as React from 'react';
import { useSelector } from 'react-redux';
import { PlaceType } from './components/PlaceType';

// import { getCurrentApartment } from '@store/apartments/selectors';
import { styled } from '@mui/material/styles';
import { Box, Container, Step, StepLabel, Stepper, StepConnector, stepConnectorClasses, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hang } from './components/Hang';
// import { MapsGeocode } from '@components/MapsGeocode';
// import dynamic from 'next/dynamic';

// const MapsGeocode = dynamic(() => import('@components/MapsGeocode'), {
//   loading: () => <span>Loading...</span>,
//   ssr: false,
// });
import { Check } from '@mui/icons-material';
import { PlaceName } from './components/PlaceName';
import { getActiveStep } from '@store/newApartForm/selectors';
import { LastStep } from '@features/CreateApartment/components/LastStep';
import { Characteristics } from '@features/CreateApartment/components/Characteristics';

const steps = ['Тип жилья', 'Адрес', 'Характеристики', 'Особенности', 'Фото', 'Описание и цена', 'Проверка'];

function CreateApartment(): React.ReactElement {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const activeStep = useSelector(getActiveStep);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaceType />;
      case 1:
        return <Characteristics />;
      case 2:
        return <Hang />;
      case 3:
        return <PlaceName />;
      case 4:
        return <LastStep />;
      // case 5:
      //   return <MapsGeocode />;
      default:
        return <div>default</div>;
    }
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.primary.main,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function StepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <StepIconRoot ownerState={{ active }} className={className}>
        {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
      </StepIconRoot>
    );
  }

  return (
    <div className="container">
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              {isMobile ? <StepLabel StepIconComponent={StepIcon}></StepLabel> : <StepLabel>{label}</StepLabel>}
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 270px)',
          margin: '3rem 0',
        }}
      >
        <Container maxWidth="md" sx={{ mb: 4 }}>
          {getStepContent(activeStep)}
        </Container>
      </Box>

      {/* <ImageUpload /> */}
    </div>
  );
}
export default CreateApartment;
