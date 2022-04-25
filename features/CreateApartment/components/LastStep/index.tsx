import * as React from 'react';
import { NextButton } from '@features/CreateApartment/components/NextButton';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activateApartment, createApartment } from '@store/apartments/actions';
import { getFormValues } from '@store/newApartForm/selectors';
import { getCurrentApartment } from '@store/apartments/selectors';

type TLastStepProps = {};

export const LastStep = ({}: TLastStepProps): React.ReactElement => {
  const dispatch = useDispatch();
  const formValues = useSelector(getFormValues);
  const { currentApartment } = useSelector(getCurrentApartment);
  console.info('currentApartment', currentApartment?.data?.id);
  const handleClick = async () => {
    console.info('kek');

    await dispatch(createApartment(formValues));

    // await dispatch(activateApartment(currentApartment?.data?.id));
  };

  console.info('formValues', formValues);

  React.useEffect(() => {
    currentApartment?.data?.id && dispatch(activateApartment(currentApartment.data.id));
  }, [dispatch])
  return (
    <>
      <Typography variant="h4">Почти готово! Осталось только проверить объявление</Typography>
      <NextButton onClick={handleClick} />
    </>
  );
};
