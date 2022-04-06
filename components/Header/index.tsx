import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import styles from './Header.module.css';
import { getUserStatus } from '@store/auth/selectors';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Menu from '@mui/material/Menu';

export const Header = (): React.ReactElement => {
  const auth = useSelector(getUserStatus);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Link href='/' passHref>
                <a style={{ display: 'block' }}>
                  <img
                    style={{ display: 'block', height: '40px' }}
                    src={'/images/heart-logo.png'}
                    alt={''}
                  />
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
              <Link href='/apartments' passHref>
                <Button
                  variant='outlined'
                  sx={{ color: '#1976D2', borderColor: '#1976D2' }}
                >
                  Сдать жилье
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>

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
                {auth.user.username === null && <SignUp />}

                <Divider />

                <LogIn />
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
