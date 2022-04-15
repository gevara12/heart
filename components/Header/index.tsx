import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  MenuItem,
} from '@mui/material';

import { grey } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import { getUserStatus } from '@store/auth/selectors';
import { fetchCurrentUser } from '@store/auth/actions';
// import { ThemeSwitcher } from '@components/ThemeSwitcher';
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
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'background.default',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Link href="/" passHref>
                <a style={{ display: 'block' }}>
                  <img style={{ display: 'block', height: '40px' }} src={'/images/heart-logo.png'} alt={''} />
                </a>
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
              }}
            >
              <Link href="/apartments" passHref>
                <Button variant="outlined" sx={{ color: '#1976D2', borderColor: '#1976D2' }}>
                  Сдать жилье
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title="Открыть настройки">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: grey[100] }}>
                    {auth?.user?.data?.avatar ? (
                      <div className={styles.imageContainer}>
                        <Image className={styles.image} src={auth?.user?.data?.avatar} alt="avatar" layout="fill" />
                      </div>
                    ) : (
                      <AccountCircleIcon sx={{ color: '#707070' }} />
                    )}
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {auth.isLoggedIn
                  && <MenuItem component="div">
                      <Link href="/profile">
                        <Typography sx={{ mr: 4 }} variant="body1" component="span">Профиль</Typography>
                      </Link>
                    </MenuItem>
                }
                {auth.isLoggedIn
                  && <MenuItem component="div">
                      <Link href="/profile/apartments">
                        <Typography sx={{ mr: 4 }} variant="body1" component="span">Апартаменты</Typography>
                      </Link>
                    </MenuItem>
                }

                { !auth.isLoggedIn && <SignUp />}
                { !auth.isLoggedIn && <Divider />}

                <LogIn />
                {/* <ThemeSwitcher /> */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
