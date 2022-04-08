import * as React from 'react';
import Link from 'next/link';

import { Avatar, Grid, Stack, Typography } from '@mui/material';
import Bull from '@components/Bull';

export default function ApartmentAboutBlock() {
  return (
    <Grid container wrap='nowrap' spacing={2} sx={{ mb: 1 }}>
      <Grid item>
        <Typography variant='h6' component='div' sx={{ mb: 1 }}>
          Жилье целиком в многоэтажном доме
        </Typography>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={1}
          divider={<Bull />}
        >
          <Typography variant='body2'>до 2 гостей</Typography>
          <Typography variant='body2'>1 спальня</Typography>
          <Typography variant='body2'>1 кровать</Typography>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'start', md: 'center' }}
          spacing={1}
          sx={{ mt: 2 }}
          divider={<Bull />}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography>20 отзывов</Typography>
            <Link href='#' passHref>
              <a style={{ color: '#00A699' }}>на сервисе A</a>
            </Link>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography>20 отзывов</Typography>
            <Link href='#' passHref>
              <a style={{ color: '#00A699' }}>на сервисе B</a>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <Avatar
          alt='Remy Sharp'
          sx={{ width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 } }}
        />
      </Grid>
    </Grid>
  );
}
