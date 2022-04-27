import * as React from 'react';
import { NextButton } from '@features/CreateApartment/components/NextButton';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activateApartment, createApartment } from '@store/apartments/actions';
import { getFormValues } from '@store/newApartForm/selectors';
import { getCurrentApartment } from '@store/apartments/selectors';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';

export const LastStep = (): React.ReactElement => {
  const dispatch = useDispatch();
  const formValues = useSelector(getFormValues);
  const { currentApartment } = useSelector(getCurrentApartment);
  // console.info('currentApartment', currentApartment?.data?.id);
  const handleClick = async () => {
    await dispatch(createApartment(formValues));
  };

  React.useEffect(() => {
    currentApartment?.data?.id && dispatch(activateApartment(currentApartment.data.id));
  }, [dispatch]);
  return (
    <div>
      <Typography variant="h4">Почти готово! Осталось только проверить объявление</Typography>
      <BottomStick hasPrev />
    </div>
  );
};
