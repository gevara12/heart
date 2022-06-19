import * as React from "react";
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function TeamCard({ card }:any) {
    const { breakpoints } = useTheme();
    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isLgBreak = useMediaQuery(breakpoints.down('lg'));

    const avatarWidth = (isSmBreak||isLgBreak)?'80px':'120px';

    return (
        <Stack direction={isSmBreak?'column':'row'} sx={{}} spacing={{xs:isLgBreak?2.5:7.5}}>
            <Box sx={{flex:'1 1 50%'}}>
                <Typography variant={isLgBreak ? 'h6' :'h4'} sx={{color: 'primary.main', fontWeight:500}}>{card.title}</Typography>
                <Typography variant={isLgBreak? 'body2':'body1'} component='div' sx={{mt:isLgBreak?1:2.5}} dangerouslySetInnerHTML={{__html:card.desc}}/>
            </Box>
            <Box sx={{flex:isSmBreak?'0 0 auto':'1 1 50%', alignSelf:'center', width:isSmBreak?'290px':'auto', margin:'0', display:'flex', borderRadius:'20px', height:isSmBreak?'188px':'328px'}}>
                <Box sx={{ margin:'0 auto', position: 'relative', width:isSmBreak?'288px':(isLgBreak?'252px':'570px')}}>
                    <img style={{position:'absolute', width:avatarWidth, left: isSmBreak?39:(isLgBreak?31:78), top:isSmBreak?8:(isLgBreak?8:16)}} src={'/images/home/Team/Male_Memoji_1.png'} alt={''}/>
                    <img style={{position:'absolute', width:avatarWidth, left: isSmBreak?161:(isLgBreak ?153:318), top:0}} src={'/images/home/Team/Male_Memoji_2.png'} alt={''}/>
                    <img style={{position:'absolute', width:avatarWidth, left: 0, top:isSmBreak?109:(isLgBreak?125:168)}} src={'/images/home/Team/Male_Memoji_3.png'} alt={''}/>
                    <img style={{position:'absolute', width:avatarWidth, left: isSmBreak?104:(isLgBreak?96:225), top:isSmBreak?93:(isLgBreak ?93:136)}} src={'/images/home/Team/Female_Memoji_1.png'} alt={''}/>
                    <img style={{position:'absolute', width:avatarWidth, left: isSmBreak?208:(isLgBreak?172:450), top:isSmBreak?93:(isLgBreak ?157:136)}} src={'/images/home/Team/Female_Memoji_2.png'} alt={''}/>
                </Box>
            </Box>
        </Stack>
    );
}