import * as React from 'react';
import { NextButton } from '@features/CreateApartment/components/NextButton';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createApartment } from '@store/apartments/actions';
import { getFormValues } from '@store/newApartForm/selectors';

type TLastStepProps = {};

export const LastStep = ({}: TLastStepProps): React.ReactElement => {
  const dispatch = useDispatch();
  const formValues = useSelector(getFormValues);

  const handleClick = async () => {
    console.info('kek');

    await dispatch(createApartment(formValues));
  };

  console.info('formValues', formValues);
  return (
    <>
      <Typography variant="h4">Почти готово! Осталось только проверить объявление</Typography>
      <NextButton onClick={handleClick} />
    </>
  );
};
