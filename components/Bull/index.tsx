import * as React from 'react';

import { Box } from '@mui/material';

export default function Bull() {
  return (
    <Box
      component="span"
      sx={{ display: 'inline-block', background: 'rgba(0, 0, 0, 0.26)', width: '4px', height: '4px' }}
    ></Box>
  );
}
