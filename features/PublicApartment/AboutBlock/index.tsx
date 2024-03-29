import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Avatar, Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

import Bull from '@components/Bull';

import { grey } from '@mui/material/colors';

import SuperHostIcon from '@components/SuperHostIcon';

export default function AboutBlock({ characteristics, owner }: any) {
  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down('md'));

  console.log('-----');
  console.log(owner);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Stack direction={{ xs: 'row', md: 'row' }} alignItems="flex-start" spacing={{ xs: 0, md: 2 }}>
        <div style={{ flex: '1 1 auto' }}>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            Жилье целиком в многоэтажном доме
          </Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={1} divider={<Bull />}>
            <Typography variant="body2">до {characteristics?.guest?.value} гостей</Typography>
            <Typography variant="body2">1 спальня</Typography>
            <Typography variant="body2">{characteristics?.bed?.value} кровать</Typography>
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
        <Box sx={{ position: 'relative' }}>
          <Avatar
            sx={{ bgcolor: grey[100], width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 }, position: 'relative' }}
          >
            {owner?.avatar && <Image src={owner.avatar} alt="avatar" layout="fill" unoptimized />}
          </Avatar>
          {owner?.abbIsSuperHost && (
            <SuperHostIcon size={'small'} sx={{ position: 'absolute', bottom: '0', right: '0' }} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
