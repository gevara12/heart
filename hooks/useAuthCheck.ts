import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from '@store/auth/actions';
import { getCurrentUser } from '@store/auth/selectors';

export const useAuthCheck = () => {
  const [authorized, setAuthorized] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  React.useEffect(() => {
    dispatch(fetchCurrentUser());
    // currentUser && setAuthorized(true);
  }, [dispatch]);

  return [authorized, loading];
};
