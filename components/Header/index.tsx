import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import styles from './Header.module.css';
import { getUserStatus } from '@store/auth/selectors';

export const Header = (): React.ReactElement => {
  const auth = useSelector(getUserStatus);
  return (
    <div>
      <AppBar
        position='static'
        sx={{
          bgcolor: 'background.default',
          p: 1.5,
        }}
      >
        <Container maxWidth='lg'>
          <div className={styles.host}>
            <Link href='/' passHref>
              <div className={styles.logoHost}>
                <Typography
                  variant='body2'
                  component='span'
                  sx={{
                    color: 'text.primary',
                  }}
                >
                  Heart Apart
                </Typography>
              </div>
            </Link>

            <Stack direction='row' spacing={2}>
              <Link href='/apartments' passHref>
                <Button
                  variant='outlined'
                  sx={{
                    color: 'text.primary',
                    borderColor: 'text.primary',
                  }}
                >
                  Сдать жилье
                </Button>
              </Link>
              {auth.user.username === null && <SignUp />}
              <LogIn />

              {/*<Tooltip title='Open settings'>*/}
              {/*  <IconButton*/}
              {/*    onClick={handleOpenUserMenu}*/}
              {/*    sx={{ p: 0 }}*/}
              {/*  >*/}
              {/*    <Avatar alt='User' src='/static/images/avatar/2.jpg' />*/}
              {/*  </IconButton>*/}
              {/*</Tooltip>*/}
            </Stack>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};
