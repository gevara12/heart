import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

import { activateApartment, createApartment } from '@store/apartments/actions';
import { getFormValues } from '@store/newApartForm/selectors';
import { getCurrentApartment } from '@store/apartments/selectors';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';
import PublicApartment from '@features/PublicApartment';

export const LastStep = (): React.ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formValues = useSelector(getFormValues);
  const { currentApartment } = useSelector(getCurrentApartment);
  const handleClick = async () => {
    await dispatch(createApartment(formValues));
    setTimeout(() => {
      router.push('/profile');
    }, 1000);
  };

  const apartment = { publicInfo: formValues };

  React.useEffect(() => {
    currentApartment?.data?.id && dispatch(activateApartment(currentApartment.data.id));
  }, [dispatch]);
  // console.info(currentApartment, apartment);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Почти готово! Осталось только проверить объявление
      </Typography>
      <PublicApartment ownerAvailable={false} apartment={apartment} />
      <BottomStick hasPrev clickNext={handleClick} />
    </div>
  );
};
