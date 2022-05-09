import * as React from 'react';

import {Box, styled} from '@mui/material';

import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';


const LuxuryBadge = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'white',
    width: '52px',
    height: '52px',
    background: 'linear-gradient(180deg, rgba(0, 166, 153, 0.6) 0%, rgba(0, 166, 153, 0.5) 100%)',
}));

export default function LuxuryIcon({ ...rest}: { [key: string]: any }) {
    return (
        <LuxuryBadge {...rest}>
            <DiamondOutlinedIcon sx={{ fontSize: 32 }}/>
        </LuxuryBadge>
    );
};
