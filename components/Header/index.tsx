import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import styles from './Header.module.css';
import { getUserStatus } from '@store/auth/selectors';

export const Header = (): React.ReactElement => {
  const auth = useSelector(getUserStatus);
  return (
    <header className={styles.header}>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'background.default',
          p: 1.5,
        }}
      >
        <Container maxWidth='lg'>
          <div className={styles.host}>
            <Link href='/'>
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
              <Link href='/apartments'>
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
            </Stack>
          </div>
        </Container>
      </AppBar>
    </header>
  );
};
