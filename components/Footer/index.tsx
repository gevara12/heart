import * as React from 'react';
import Link from 'next/link';
import { Container, Stack, Typography } from '@mui/material';

import styles from './Footer.module.css';

export const Footer = (): React.ReactElement => {
  const [year, setYear] = React.useState<string>('2022');
  const supportLink = 'support@heartapart.ru';
  const feedbackLink = 'feedback@heartapart.ru';

  React.useEffect(() => {
    setYear(new Date().getFullYear() as unknown as string);
  }, []);

  return (
    <footer className={styles.footer}>
      <Container maxWidth='lg'>
        <Stack>
          <span className={styles.linkHost}>
            Написать в поддержку:{` `}
            <a
              href={`mailto:${supportLink}`}
              target='_blank'
              rel='noopener norefferer'
              className={styles.link}
            >
               {supportLink}
            </a>
          </span>
          <span>
           Для обратной связи:{` `}
            <a
              href={`mailto:${feedbackLink} `}
              target='_blank'
              rel='noopener norefferer'
              className={styles.link}
            >
               {feedbackLink}
            </a>
          </span>
        </Stack>
        <Stack direction='row' sx={{ mt: 10 }} justifyContent='space-between'>
          <div>
            <Link href='/terms'>
              <Typography
                sx={{
                  mr: 4,
                }}
                variant='body1'
                component='span'
              >
                Условия
              </Typography>
            </Link>
            <Link href='/privacy'>
              <Typography variant='body1' component='span'>
                Политика конфиденциальности
              </Typography>
            </Link>
          </div>
          <span>© {year}, HeartApart</span>
        </Stack>
      </Container>
    </footer>
  );
};
