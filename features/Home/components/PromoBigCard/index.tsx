import * as React from "react";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function PromoBigCard({card}:any) {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box sx={{ background:'#FAFAFA', borderRadius:'20px', p:3, height:'100%' }}>
            <Box sx={{ background:'linear-gradient(71.72deg, #F3E7E9 0%, #E3EEFF 99%)', borderRadius:'20px', overflow:'hidden', height:isMobile?'168px':'300px' }}>
                <img style={{ display:'block', width:isMobile?'168px':'366px', margin:isMobile ? '46px auto' : '36px auto' }} src={card.image} alt={''}/>
            </Box>
            <Typography variant={isMobile?'h6' :'h4'} sx={{fontWeight: 500, mt:2.5}}>{card.title}</Typography>
            <Typography variant={isMobile? 'body2':'body1'} sx={{mt:isMobile? 1:2.5}}>{card.desc}</Typography>
        </Box>
    );
}