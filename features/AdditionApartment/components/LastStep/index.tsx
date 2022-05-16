import * as React from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activateApartment, createApartment } from '@store/apartments/actions';
import { getFormValues } from '@store/newApartForm/selectors';
import { getCurrentApartment } from '@store/apartments/selectors';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';
import PublicApartment from '@features/PublicApartment';

export const LastStep = (): React.ReactElement => {
  const dispatch = useDispatch();
  const formValues = useSelector(getFormValues);
  const { currentApartment } = useSelector(getCurrentApartment);
  const handleClick = async () => {
    await dispatch(createApartment(formValues));
  };

  const apartment = { publicInfo: formValues };

  React.useEffect(() => {
    currentApartment?.data?.id && dispatch(activateApartment(currentApartment.data.id));
  }, [dispatch]);

  return (
    <div>
      <Typography variant='h4' sx={{mb: 4}}>Почти готово! Осталось только проверить объявление</Typography>
      <PublicApartment apartment={apartment} />
      <BottomStick hasPrev clickNext={handleClick} />
    </div>
  );
};
