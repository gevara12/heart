import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from '@store/auth/actions';
import { getCurrentUser } from '@store/auth/selectors';

export const Guard = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  React.useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  console.info(currentUser);

  return <span>kek</span>;
};
