import * as React from 'react';

import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import Bull from '@components/Bull';

export default function RatingIconsPanel() {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1}>
      <Stack direction={'row'} alignItems={'center'}>
        <BoltIcon fontSize={'small'} sx={{ color: '#FF5A5F' }} />
        42
      </Stack>
      <Bull />
      <Stack direction={'row'} alignItems={'center'}>
        <StarIcon fontSize={'small'} sx={{ color: '#FF5A5F' }} />9
      </Stack>
    </Stack>
  );
}
