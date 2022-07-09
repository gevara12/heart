import * as React from 'react';

import { Box, styled, Tooltip } from '@mui/material';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const SuperHostBadge = styled(Box)(({}) => ({
  backdropFilter: 'blur(15px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: 'white',
  background: 'linear-gradient(180deg, rgba(247, 87, 92, 0.6) 0%, rgba(247, 87, 92, 0.4) 100%)',
}));

export default function SuperHostIcon({ size = 'large', ...rest }: { size?: 'large' | 'small'; [key: string]: any }) {
  const title =
    'Топ-сервис: Хозяева с этим значком получили высокую оценку от гостей и предоставляют самые комфортные условия проживания';
  return (
    <Tooltip title={title} placement="top-start">
      <SuperHostBadge
        {...rest}
        style={{ width: size === 'large' ? '52px' : '36px', height: size === 'large' ? '52px' : '36px' }}
      >
        <WorkspacePremiumIcon sx={{ fontSize: size === 'large' ? 32 : 24 }} />
      </SuperHostBadge>
    </Tooltip>
  );
}
