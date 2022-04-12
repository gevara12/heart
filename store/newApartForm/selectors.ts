import { TPlaceType } from '@utils/types';

export const getActiveStep = (state: { newApart: { activeStep: number } }) =>
  state.newApart?.activeStep;

export const getFormValues = (state: {
  newApart: {
    formValues: {
      placeType?: {
        value: TPlaceType;
      };
    };
  };
}) => {
  console.info('selector', state.newApart);
  return state.newApart.formValues;
};
