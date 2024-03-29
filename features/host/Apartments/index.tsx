import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ApartItem } from '@features/host/ApartItem';

import { getApartmentsList } from '@store/apartments/selectors';
import { fetchApartments } from '@store/apartments/actions';
import { Grid } from '@mui/material';

export const Apartments = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  const apartments = useSelector(getApartmentsList);

  return (
    <Grid container spacing={2}>
      {apartments.map((apartment) => {
        console.info('apartment', apartment);
        return (
          <Grid item xs={12} md={4} key={uuidv4()}>
            <ApartItem apart={apartment} />
          </Grid>
        );
      })}
    </Grid>
  );
};
