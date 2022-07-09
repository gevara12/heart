import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Avatar, Box, Container, IconButton, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';

import { SignUp } from '@components/SignUp';
import { LogIn } from '@components/LogIn';

import { getUserStatus } from '@store/auth/selectors';
import { fetchCurrentUser } from '@store/auth/actions';

import { HeaderProfileMenu } from '@components/HeaderProfileMenu';

export const Header = (): React.ReactElement => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserStatus);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
      <AppBar elevation={isTablet ? 2 : 4} position="static" color="background">
        <Container maxWidth="lg">
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems={'center'}
            sx={{ py: isMobile ? 1.25 : isTablet ? 2 : 2.5 }}
          >
            <Stack direction={'row'} alignItems={'center'}>
              <Box>
                <Link href="/hero" passHref>
                  <a style={{ display: 'block' }}>
                    <img style={{ display: 'block', height: '25px' }} src={'/images/heart-logo.png'} alt={''} />
                  </a>
                </Link>
              </Box>
              {(isTablet || isDesktop) && (
                <>
                  <Typography variant={'h6'} sx={{ ml: 1.5 }}>
                    Heartapart
                  </Typography>
                  <Typography
                    variant={'h6'}
                    sx={{ ml: 2.5, px: 1, border: '1px solid', borderColor: 'background', borderRadius: '4px' }}
                  >
                    beta
                  </Typography>
                </>
              )}
            </Stack>
            {!auth.isLoggedIn ? (
              <Stack direction={'row'} spacing={2.5}>
                <LogIn />
                <SignUp />
              </Stack>
            ) : (
              <>
                <Box sx={{ ml: 2 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: 'grey[400]', width: { xs: 40 }, height: { xs: 40 }, position: 'relative' }}>
                      {auth?.user?.data?.avatar && (
                        <Image src={auth?.user?.data?.avatar} alt="avatar" layout="fill" unoptimized />
                      )}
                    </Avatar>
                  </IconButton>

                  <HeaderProfileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
                </Box>
              </>
            )}
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
};
