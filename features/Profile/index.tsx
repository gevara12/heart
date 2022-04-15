import * as React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@store/auth/selectors';
import { fetchCurrentUser } from '@store/auth/actions';

import { Button, Typography } from '@mui/material';

type TProfileProps = {};

export const Profile = ({}: TProfileProps): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);

  React.useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  console.info('profile', data);

  return (
    <>
      {data && (
        <>
          <Typography variant="h6">{data.email}</Typography>
          <Typography variant="h6">{data.name}</Typography>
          <Typography variant="h6">{data.surname}</Typography>
          <Typography variant="h6">{data.description}</Typography>
          <Typography variant="h6">{data.phoneNumber}</Typography>
          <Typography variant="h6">{data.city}</Typography>
          <Typography variant="h6">{data.gender}</Typography>
          <Typography variant="h6">{data.refAbb}</Typography>
          <Typography variant="h6">{data.refWhatsapp}</Typography>
          <Typography variant="h6">{data.refTelegram}</Typography>
          <Typography variant="h6">{data.refViber}</Typography>
          <Typography variant="h6">{data.dateOfBirth}</Typography>
        </>
      )}

      <Link href="profile/edit">
        <Button variant="outlined">Редактировать</Button>
      </Link>
    </>
  );
};
