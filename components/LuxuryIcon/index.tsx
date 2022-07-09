import * as React from 'react';

import { Box, styled, Tooltip } from '@mui/material';

import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const LuxuryBadge = styled(Box)(({}) => ({
  backdropFilter: 'blur(15px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: 'white',
  background: 'linear-gradient(180deg, rgba(0, 166, 153, 0.6) 0%, rgba(0, 166, 153, 0.5) 100%)',
}));

export default function LuxuryIcon({ size = 'large', ...rest }: { size?: 'large' | 'small'; [key: string]: any }) {
  const title = 'Премимум: Данное объявление размещается в премиальном сегменте жилья';
  return (
    <Tooltip title={title} placement="top-start">
      <LuxuryBadge
        {...rest}
        style={{ width: size === 'large' ? '52px' : '36px', height: size === 'large' ? '52px' : '36px' }}
      >
        <DiamondOutlinedIcon sx={{ fontSize: size === 'large' ? 32 : 24 }} />
      </LuxuryBadge>
    </Tooltip>
  );
}
