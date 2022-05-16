import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { PublicApartItem } from '@features/PublicApartments/PublicApartItem';

import { getApartmentsList } from '@store/apartments/selectors';
import { fetchApartments } from '@store/apartments/actions';
import { Grid } from '@mui/material';

export const PublicApartments = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  const apartments = useSelector(getApartmentsList);
  console.log(apartments);
  return (
    <Grid container>
      {apartments.map((apartment) => (
        <Grid item xs={12} md={4} key={uuidv4()}>
          <PublicApartItem apart={apartment} />
        </Grid>
      ))}
    </Grid>
  );
};
