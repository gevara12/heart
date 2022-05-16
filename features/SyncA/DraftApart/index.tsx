import * as React from 'react';
import { useSelector } from 'react-redux';

import { getParsedData } from '@store/syncA/selectors';
import AdditionApartment from '@features/AdditionApartment';
import Typography from '@mui/material/Typography';

type TDraftApartProps = { id: string };

export const DraftApart = ({ id }: TDraftApartProps): React.ReactElement => {
  const parsedData = useSelector(getParsedData);
  const item = parsedData?.managedListings.filter((item) => item.id === id);
  return (
    <>{parsedData?.managedListings ? <AdditionApartment item={item[0]} /> :
      <Typography variant='h4'>Что-то пошло не так</Typography>}
    </>
  );
};
