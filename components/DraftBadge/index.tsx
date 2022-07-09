import * as React from 'react';

import { Box } from '@mui/material';

export default function DraftBadge() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        background: 'rgba(0, 0, 0, 0.17)',
        backdropFilter: 'blur(15px)',
        borderRadius: '4px',
        py: 1,
        px: 3,
        border: '1px inset',
        borderImageSource: 'linear-gradient(95.67deg, rgba(255, 255, 255, 0.3) 0%, rgba(247, 255, 254, 0.3) 99.4%)',
        color: '#ffffff',
      }}
    >
      <Box
        sx={{
          fontWeight: '400',
          fontSize: '13px',
          lineHeight: '18px',
          letterSpacing: '0.16px',
        }}
      >
        Черновик
      </Box>
    </Box>
  );
}
