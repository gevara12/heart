import React from 'react';

import { Grid, Stack } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

export default function RulesGrid({ rules }: any) {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12} md={5}>
        <Stack spacing={1}>
          {rules.allowed.map((rule, i) => (
            <div style={{ display: 'flex' }} key={i}>
              <CheckCircleOutlineIcon sx={{ color: 'green', mr: 1 }} />
              {rule}
            </div>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        <Stack spacing={1}>
          {rules.forbidden.map((rule, i) => (
            <div style={{ display: 'flex' }} key={i}>
              <HighlightOffRoundedIcon sx={{ color: 'red', mr: 1 }} />
              {rule}
            </div>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
