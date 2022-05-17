import * as React from 'react';

import {Box, styled} from '@mui/material';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const SuperHostBadge = styled(Box)(({}) => ({
    backdropFilter: 'blur(15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'white',
    background: 'linear-gradient(180deg, rgba(247, 87, 92, 0.6) 0%, rgba(247, 87, 92, 0.4) 100%)'
}));

export default function SuperHostIcon({ size='large', ...rest}:{ size?:'large'|'small', [key: string]:any }) {
    return (
        <SuperHostBadge {...rest} style={{ width: size === 'large' ? '52px' : '36px', height: size === 'large' ? '52px' : '36px', }}>
            <WorkspacePremiumIcon sx={{ fontSize: size === 'large' ? 32 : 24  }}/>
        </SuperHostBadge>
    );
};
