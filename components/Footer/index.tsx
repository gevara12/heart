import * as React from 'react';
import Link from 'next/link';

import { Container, Stack, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Footer = (): React.ReactElement => {
  const supportLink = 'support@heartapart.ru';
  const feedbackLink = 'feedback@heartapart.ru';
  const navigation = [
    { url: '/terms', title: 'Условия' },
    { url: '/privacy', title: 'Политика конфиденциальности' },
  ];

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const [year, setYear] = React.useState<string>('2022');

  React.useEffect(() => {
    setYear(new Date().getFullYear() as unknown as string);
  }, []);

  return (
    <footer style={{ background: '#FAFAFA', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Stack spacing={isMobile ? 2 : 1}>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={0.5}>
            <Typography variant="h5">Написать в поддержку:</Typography>
            <a
              href={`mailto:${supportLink}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#757575', textDecoration: 'none' }}
            >
              <Typography variant="h5">{supportLink}</Typography>
            </a>
          </Stack>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={0.5}>
            <Typography variant="h5">Для обратной связи:</Typography>
            <a
              href={`mailto:${feedbackLink} `}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#757575', textDecoration: 'none' }}
            >
              <Typography variant="h5">{feedbackLink}</Typography>
            </a>
          </Stack>
        </Stack>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={isMobile ? 2 : 0}
          justifyContent="space-between"
          sx={{ mt: 10 }}
        >
          <Stack direction="row" spacing={5}>
            {navigation.map((navLink, i) => (
              <Link href={navLink.url} passHref key={i}>
                <a style={{ color: '#1C1B1F', textDecoration: 'none' }}>
                  <Typography variant="body1">{navLink.title}</Typography>
                </a>
              </Link>
            ))}
          </Stack>
          <span>© {year}, HeartApart</span>
        </Stack>
      </Container>
    </footer>
  );
};
