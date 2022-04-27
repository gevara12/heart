import React from 'react';

import { Grid } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const labels = {
  wiFi: 'Wi-fi',
  conditioner: 'Кондиционер',
};

export default function OptionsGrid({ options }: any) {
  console.log(options);

  return (
    <Grid container spacing={{ xs: 1 }}>
      {Object.keys(options).map((key, i) => (
        <Grid item xs={12} md={5} key={i}>
          <div style={{ display: 'flex' }}>
            <CheckCircleOutlineIcon sx={{ color: 'green', mr: 1 }} />
            {labels[key] || 'null'}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
