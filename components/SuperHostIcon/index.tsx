import * as React from 'react';

import {Box, styled} from '@mui/material';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const SuperHostBadge = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'white',
    width: '52px',
    height: '52px',
    background: 'linear-gradient(180deg, rgba(247, 87, 92, 0.6) 0%, rgba(247, 87, 92, 0.4) 100%)'
}));

export default function SuperHostIcon({ ...rest}: { [key: string]: any }) {
    return (
        <SuperHostBadge {...rest}>
            <WorkspacePremiumIcon sx={{ fontSize: 32 }}/>
        </SuperHostBadge>
    );
};
