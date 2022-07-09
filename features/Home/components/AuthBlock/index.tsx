import * as React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Container, Box, useMediaQuery, useTheme, Button, Typography, Stack } from '@mui/material';
import { getCurrentUser } from '@store/auth/selectors';

import { LogInModal } from '@components/LogInModal';
import SignUpForm from '@features/Home/components/SignUpForm';

export default function AuthBlock() {
  const { breakpoints } = useTheme();
  const isTablet = useMediaQuery(breakpoints.down('md'));
  const currentUser = useSelector(getCurrentUser);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpen = (): void => setIsModalOpen(true);
  const handleClose = (): void => setIsModalOpen(false);

  return (
    <Container fixed>
      {currentUser ? (
        <Box sx={{ mt: isTablet ? 10.5 : 27.5, mb: isTablet ? 10 : 27.5 }}>
          <Typography
            variant={isTablet ? 'h6' : 'h3'}
            sx={{ mb: isTablet ? 4 : 6.5, textAlign: 'center', fontWeight: 500 }}
          >
            Рады новым встречам
          </Typography>
          <Stack direction={'column'} sx={{ maxWidth: '360px', mx: 'auto' }}>
            <Button
              variant={'contained'}
              size={isTablet ? 'medium' : 'large'}
              onClick={() => router.push('/host/sync-a')}
            >
              Перенести объявления
            </Button>
            <Typography variant={isTablet ? 'body2' : 'body1'} sx={{ my: isTablet ? 1.5 : 2.5, textAlign: 'center' }}>
              или
            </Typography>
            <Button variant={'outlined'} size={isTablet ? 'medium' : 'large'} onClick={() => router.push('/profile')}>
              Опубликовать вручную
            </Button>
          </Stack>
        </Box>
      ) : (
        <Box sx={{ mt: isTablet ? 10.5 : 27.5, mb: isTablet ? 10 : 27.5 }}>
          <Typography
            variant={isTablet ? 'h6' : 'h3'}
            sx={{ mb: isTablet ? 4 : 6.5, textAlign: 'center', fontWeight: 500 }}
          >
            Рады новым встречам
          </Typography>
          <Stack direction={'column'} sx={{ maxWidth: '360px', mx: 'auto' }}>
            <Button variant={'contained'} size={isTablet ? 'medium' : 'large'} onClick={handleOpen}>
              Войти
            </Button>
            <Typography variant={isTablet ? 'body2' : 'body1'} sx={{ my: isTablet ? 1.5 : 2.5, textAlign: 'center' }}>
              или
            </Typography>
            <SignUpForm />
          </Stack>
          <LogInModal isOpen={isModalOpen} handleClose={handleClose} />
        </Box>
      )}
    </Container>
  );
}
