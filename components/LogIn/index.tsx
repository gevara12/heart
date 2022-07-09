import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, MenuItem, Typography } from '@mui/material';

import { logout } from '@store/auth/actions';
import { getUserStatus } from '@store/auth/selectors';
import { LogInModal } from '@components/LogInModal';

export const LogIn = ({ isLoginWall = false }: { isLoginWall?: boolean }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  const auth = useSelector(getUserStatus);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {}, [dispatch]);

  return (
    <div>
      {isLoginWall ? (
        <Button variant="outlined" onClick={handleOpen}>
          Войти
        </Button>
      ) : (
        <>
          {auth.isLoggedIn ? (
            <MenuItem key={'logout'} onClick={handleLogout}>
              <Typography sx={{ mr: 4, color: 'secondary.main' }} variant="body1" component="span">
                Выйти
              </Typography>
            </MenuItem>
          ) : (
            <Button variant="text" size={'small'} onClick={handleOpen}>
              Войти
            </Button>
          )}
        </>
      )}
      <LogInModal isOpen={isModalOpen} handleClose={handleClose} />
    </div>
  );
};
