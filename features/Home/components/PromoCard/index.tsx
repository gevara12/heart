import * as React from "react";
import {Box, useMediaQuery, useTheme} from "@mui/material";


export default function PromoCard({card}:any) {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box sx={{background: '#FAFAFA', borderRadius: '20px', p: 3, height: '100%'}}>
            <Box sx={{ display:'flex', background:card.bg, borderRadius:'20px', overflow:'hidden', height:isMobile?'240px':'300px' }}>
                <img style={{display: 'block', width:isMobile?'168px':'264px', margin:'auto' }} src={card.image} alt={''}/>
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: isMobile?'20px':'24px', lineHeight: '32px', marginTop: '20px'}}>{card.title}</Box>
        </Box>
    );
}