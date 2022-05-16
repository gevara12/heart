import * as React from 'react';
import { useSelector } from 'react-redux';

import { getParsedData } from '@store/syncA/selectors';
import AdditionApartment from '@features/AdditionApartment';
import Typography from '@mui/material/Typography';
import { getUserApartment } from '@store/users/selectors';

type TDraftApartProps = { id: string };

export const DraftApart = ({ id }: TDraftApartProps): React.ReactElement => {
  const parsedData = useSelector(getParsedData);
  const { publicInfo } = useSelector(getUserApartment(id));
  const item = parsedData?.managedListings.filter((item) => item.id === id);
  console.info('parsedData', publicInfo, parsedData);
  return (
    <>
      {publicInfo ? <AdditionApartment item={publicInfo} /> :
        <Typography variant='h4'>Что-то пошло не так</Typography>}
    </>
  );
};
