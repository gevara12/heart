import * as React from 'react';
import Link from 'next/link';
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

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import { getUserStatus } from '@store/auth/selectors';
// import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { fetchCurrentUser } from '@store/auth/actions';

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
                  <Avatar>N</Avatar>
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
                {auth.isLoggedIn === true ? (
                  <MenuItem component="div">
                    <Link href="/profile">
                      <Typography
                        sx={{
                          mr: 4,
                        }}
                        variant="body1"
                        component="span"
                      >
                        Профиль
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : (
                  <SignUp />
                )}

                {auth.isLoggedIn === false && <Divider />}

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
