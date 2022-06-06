import * as React from "react";
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function TeamCard({ card }:any) {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('lg'));

    return (
        <Stack direction={isMobile?'column':('row')} sx={{}} spacing={{xs:isMobile?2.5:'60px'}}>
            <Box sx={{flex:'1 1 50%',}}>
                <Typography variant={isMobile ? 'h6' :'h4'} sx={{color: 'primary.main', fontWeight:500}}>{card.title}</Typography>
                <Typography variant={isMobile? 'body2':'body1'} component='div' sx={{mt:isMobile?1:2.5}} dangerouslySetInnerHTML={{__html:card.desc}}/>
            </Box>
            <Box sx={{flex:isMobile?'0 0 auto':'1 1 50%', alignSelf: 'center', width:isMobile?'290px':'auto', margin:'0', display: 'block', borderRadius: '20px', height:isMobile?'188px':'328px', position: 'relative'}}>
                <img style={{position:'absolute', width:isMobile?'80px':'120px', left: isMobile?'39px':'78px', top: isMobile?'8px':'16px'}} src={'/images/home/Team/Male_Memoji_1.png'} alt={''}/>
                <img style={{position:'absolute', width:isMobile?'80px':'120px', left: isMobile?'161px':'318px', top:0}} src={'/images/home/Team/Male_Memoji_2.png'} alt={''}/>
                <img style={{position:'absolute', width:isMobile?'80px':'120px', left: 0, top: isMobile?'109px':'168px'}} src={'/images/home/Team/Male_Memoji_3.png'} alt={''}/>
                <img style={{position:'absolute', width:isMobile?'80px':'120px', left: isMobile?'104px':'225px', top: isMobile?'93px':'136px'}} src={'/images/home/Team/Female_Memoji_1.png'} alt={''}/>
                <img style={{position:'absolute', width:isMobile?'80px':'120px', left: isMobile?'208px':'450px', top: isMobile?'93px':'136px'}} src={'/images/home/Team/Female_Memoji_2.png'} alt={''}/>
            </Box>
        </Stack>
    );
}