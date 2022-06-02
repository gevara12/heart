import * as React from "react";
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function LeftRightPromoCard2({ card, reverse=false }:any) {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Stack direction={isMobile?'column':(reverse ? 'row-reverse' : 'row')} sx={{}} spacing={{xs:isMobile?2.5:'60px'}}>
            <Box sx={{flex:'1 1 50%',}}>
                <Typography variant={isMobile ? 'h6' :'h4'} sx={{color: 'primary.main', fontWeight:500}}>{card.title}</Typography>
                <Typography variant={isMobile? 'body2':'body1'} component='div' sx={{mt:isMobile?1:2.5}} dangerouslySetInnerHTML={{__html:card.desc}}/>
            </Box>
            <Box sx={{flex:isMobile?'1 0 auto':'1 1 50%',display: 'flex', background: 'linear-gradient(246.96deg, #E3EEFF 0%, #F3E7E9 100%)', borderRadius: '20px', height:isMobile?'188px':'328px'}}>
                <img style={{display: 'block', height:isMobile?'127px':'210px', margin:'auto'}} src={card.image} alt={''}/>
            </Box>
        </Stack>
    );
}