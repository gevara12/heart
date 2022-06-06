import * as React from "react";
import {Box, useMediaQuery, useTheme} from "@mui/material";


export default function DemoScreens() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box sx={{textAlign:'center', background:isMobile?'none' :'#FAFAFA', position:'relative', paddingBottom:isMobile ? '' : '210px', overflow:'clip'}}>
            <img style={{display:isMobile?'none':'block', position:'absolute', width: '190px', left: 'calc(50% - 465px)', top: '142px'}} src={'/images/home/DemoScreens/Mockup_Mobile.png'} alt={''}/>
            <img style={{height: isMobile?'192px':'493px', marginTop:isMobile?'0':'-55px', boxShadow: "0px 4px 24px rgba(46, 60, 80, 0.08)"}} src={'/images/home/DemoScreens/Mockup_Desktop.png'} alt={''}/>
            <img style={{display:isMobile?'none':'block', position:'absolute', width: '240px', left: 'calc(50% + 228px)', top: '-10px', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/DemoScreens/Request.png'} alt={''}/>

            <img style={{display:isMobile?'block':'none', position:'absolute', width: '136px', left: 'calc(50% - 130px)', top: 'calc(100% + 42px)', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/HomeHero/Rating.png'} alt={''}/>
            <img style={{display:isMobile?'block':'none', position:'absolute', width: '136px',  right: 'calc(50% - 130px)', top: 'calc(100% + 20px)', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/HomeHero/Message.png'} alt={''}/>
        </Box>
    )
}