import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Avatar, Box, Container, Divider, IconButton, Menu, Typography, MenuItem, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import { getUserStatus } from '@store/auth/selectors';
import { fetchCurrentUser } from '@store/auth/actions';

import styles from '@features/Profile/components/AddAvatar/AddAvatar.module.css';

export const Header = (): React.ReactElement => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserStatus);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    sessionStorage.getItem('accessToken') && dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar
        position='static'
        sx={{
          bgcolor: 'background.default',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Container maxWidth='lg'>
          <Stack justifyContent='space-between' direction='row' sx={{ py: 2 }}>
            <Box
              sx={{ mr: 2 }}
            >
              <Link href='/hero' passHref>
                <a style={{ display: 'block' }}>
                  <img style={{ display: 'block', height: '40px' }} src={'/images/heart-logo.png'} alt={''} />
                </a>
              </Link>
            </Box>

            <Box sx={{ ml: 2 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'background.default' }}>
                  {auth?.user?.data?.avatar ? (
                    <div className={styles.imageContainer}>
                      <Image className={styles.image} src={auth?.user?.data?.avatar} alt='avatar' layout='fill'
                             unoptimized />
                    </div>
                  ) : (
                    <AccountCircleIcon sx={{ color: '#707070' }} />
                  )}
                </Avatar>
              </IconButton>

              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {auth.isLoggedIn && (
                  <MenuItem component='div'>
                    <Link href='/profile'>
                      <Typography sx={{ mr: 4 }} variant='body1' component='span'>
                        Профиль
                      </Typography>
                    </Link>
                  </MenuItem>
                )}
                {/*{auth.isLoggedIn && (*/}
                {/*  <MenuItem component='div'>*/}
                {/*    <Link href='/profile/apartments'>*/}
                {/*      <Typography sx={{ mr: 4 }} variant='body1' component='span'>*/}
                {/*        Апартаменты*/}
                {/*      </Typography>*/}
                {/*    </Link>*/}
                {/*  </MenuItem>*/}
                {/*)}*/}

                {!auth.isLoggedIn && <SignUp />}
                {!auth.isLoggedIn && <Divider />}

                <LogIn />
              </Menu>
            </Box>
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
};
