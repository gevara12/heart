import React from 'react';

import {Box, styled, Typography} from '@mui/material';


const SocialRoundIcon = styled(Box)(({ theme }) => ({
    width:'74px',
    height: '74px',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '50%',
}));

export default function SocialRoundBox({
   social:{
       name,
       SocialIcon,
       color='#00A699',
       bgColor='#00A69914',
   },
   showTitle=true,
}:{ social:{
        name: string,
        SocialIcon: any,
        color?: string,
        bgColor?:string,
    },
    showTitle:boolean
}) {
    return (
        <Box>
            <SocialRoundIcon sx={{ background:bgColor}}>
                <SocialIcon sx={{ color:color }}/>
            </SocialRoundIcon>
            {showTitle && <Typography variant="body1" component="div" sx={{mt:0.5, textAlign:'center'}}>{name}</Typography>}
        </Box>
    );
}
