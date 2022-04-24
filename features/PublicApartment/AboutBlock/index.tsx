import * as React from 'react';
import Link from 'next/link';

import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Bull from '@components/Bull';

export default function AboutBlock({characteristics}:any) {
  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down('md'));

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Stack direction={{ xs: 'row', md: 'row' }} spacing={{ xs: 0, md: 2 }}>
        <div style={{ flex: '1 1 auto' }}>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            Жилье целиком в многоэтажном доме
          </Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={1} divider={<Bull />}>
            <Typography variant="body2">до {characteristics.guest.value} гостей</Typography>
            <Typography variant="body2">1 спальня</Typography>
            <Typography variant="body2">{characteristics.bed.value} кровать</Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'start', md: 'center' }}
            spacing={1}
            sx={{ mt: 1 }}
            divider={isMobile ? undefined : <Bull />}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography variant="body2">20 отзывов</Typography>
              <Link href="#" passHref>
                <a style={{ color: '#00A699' }}>
                  <Typography variant="body2">на сервисе A</Typography>
                </a>
              </Link>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography variant="body2">20 отзывов</Typography>
              <Link href="#" passHref>
                <a style={{ color: '#00A699' }}>
                  <Typography variant="body2">на сервисе B</Typography>
                </a>
              </Link>
            </Stack>
          </Stack>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://i1.sndcdn.com/avatars-000211446087-hahqw0-t500x500.jpg"
            sx={{ width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 } }}
          />
        </div>
      </Stack>
    </Box>
  );
}
