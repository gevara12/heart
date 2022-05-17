import * as React from 'react';
import { useSelector } from 'react-redux';

import AdditionApartment from '@features/AdditionApartment';
import Typography from '@mui/material/Typography';
import { getUserApartment } from '@store/users/selectors';

type TDraftApartProps = { id: string };

export default function DraftApart ({ id }: TDraftApartProps): React.ReactElement {
  const { publicInfo } = useSelector(getUserApartment(id)) || {};
  return (
    <>
      {publicInfo ? <AdditionApartment item={publicInfo} /> :
        <Typography variant='h4'>Что-то пошло не так</Typography>}
    </>
  );
};
