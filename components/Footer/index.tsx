import * as React from 'react';
import Link from 'next/link';

import { Box, Container, Stack, Typography, useTheme, useMediaQuery, Divider } from '@mui/material';
import { ThemeSwitcher } from '@components/ThemeSwitcher';

export const Footer = (): React.ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 5 }}>
            HeartApart
          </Typography>
          <Stack spacing={isMobile ? 1 : 10} direction={isMobile ? 'column' : 'row'}>
            <Link href={`mailto:${supportLink}`} passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.primary }}>
                Написать в поддержку
              </a>
            </Link>
            <Link href={`mailto:${feedbackLink}`} passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.primary }}>
                Обратная связь
              </a>
            </Link>
          </Stack>
          <Divider sx={{ mt: 5, mb: 4 }} />
          <Stack spacing={isMobile ? 1 : 10} direction={isMobile ? 'column' : 'row'}>
            {navigation.map((navLink, i) => (
              <Link href={navLink.url} passHref key={i}>
                <a style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>{navLink.title}</a>
              </Link>
            ))}
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 4 }}>
            <span>© {year}, HeartApart</span>

            <ThemeSwitcher />
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};
