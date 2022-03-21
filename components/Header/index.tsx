import * as React from 'react';
import Link from 'next/link';
// import { useSelector } from 'react-redux';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

// import { getUserStatus } from 'store/auth/selectors';

// import { SignUp } from 'components/SignUp';
// import { LogIn } from 'components/LogIn';

import styles from './Header.module.css';

export const Header = (): React.ReactElement => {
  // const auth = useSelector(getUserStatus);

  return (
    <header className={styles.header}>
      <Box
        sx={{
          bgcolor: 'primary.main',
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
                    color: 'primary.contrastText',
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
                    color: 'primary.contrastText',
                    borderColor: 'primary.contrastText',
                  }}
                >
                  Сдать жилье
                </Button>
              </Link>
              {/* {auth.isLoggedIn ?? <SignUp />} */}
              {/* <LogIn /> */}
            </Stack>
          </div>
        </Container>
      </Box>
    </header>
  );
};
