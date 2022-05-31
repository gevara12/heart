import * as React from 'react';
import Link from 'next/link';

import { Box, Container, Stack, Typography, useTheme, useMediaQuery, Divider } from '@mui/material';


export const Footer = (): React.ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm','md'));

  const supportLink = 'support@heartapart.ru';
  const feedbackLink = 'feedback@heartapart.ru';

  const navigation = [
    { url: '/terms', title: 'Условия' },
    { url: '/privacy', title: 'Политика конфиденциальности' },
  ];

  const [year, setYear] = React.useState<string>('2022');

  React.useEffect(() => {
    setYear(new Date().getFullYear() as unknown as string);
  }, []);

  return (
    <footer>
      <Box sx={{ py: isMobile ? 4 : 5, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Stack direction={'row'} alignItems={'center'} sx={{mb:isMobile?4.5:6.5}}>
            <Box>
              <Link href='/hero' passHref>
                <a style={{ display: 'block' }}>
                  <img style={{ display: 'block', height: isMobile ? '34px' : '44px' }} src={'/images/heart-logo.png'} alt={''} />
                </a>
              </Link>
            </Box>

            <Typography variant={isMobile?'h5':'h3'} sx={{ml:isMobile ? 1.5 : (isTablet ? 2 : 2.5), fontWeight:500}}>Heartapart</Typography>
            <Typography variant={isMobile?'h5':'h4'} sx={{ml:2.5, px:1 ,border:'1px solid', borderColor:'background',borderRadius: '4px', fontWeight:500}}>beta</Typography>

          </Stack>

          <Stack spacing={isMobile ? 2.5 : (isTablet? 10.5 : 12.5)} direction={isMobile ? 'column' : 'row'}>
            <Link href={`mailto:${supportLink}`} passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                <Typography variant={'body1'} component={'div'} sx={{}}>Написать в поддержку</Typography>
              </a>
            </Link>
            <Link href={`mailto:${feedbackLink}`} passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                <Typography variant={'body1'} component={'div'} sx={{}}>Обратная связь</Typography>
              </a>
            </Link>
          </Stack>

          <Divider sx={{ mt: isMobile? 4:7, mb: isMobile? 2.5:5 }} />

          <Stack spacing={isMobile ? 2.5: (isTablet? 4:5)} direction={isMobile ? 'column' : 'row'}>
            {navigation.map((navLink, i) => (
              <Link href={navLink.url} passHref key={i}>
                <a style={{ color:theme.palette.text.secondary, textDecoration: 'none' }}>
                  <Typography variant={isMobile?'caption':'body1'} component={'div'} sx={{}}>{navLink.title}</Typography>
                </a>
              </Link>
            ))}
            <Typography variant={isMobile?'caption':'body1'} component={'div'} sx={{ color: theme.palette.text.secondary, marginLeft:isMobile ? 0: 'auto' }}>© {year}, HeartApart</Typography>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};
