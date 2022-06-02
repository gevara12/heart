import * as React from "react";
import {useSelector} from "react-redux";

import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {getCurrentUser} from "@store/auth/selectors";
import {SignUp} from "@components/SignUp";
import {useRouter} from "next/router";


export default function HomeHero() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));
    const currentUser = useSelector(getCurrentUser);
    const router = useRouter();

    return (
        <Container maxWidth='lg'>
            <Box sx={{textAlign:'center', padding:isMobile? '52px 0':'194px 0 255px', position:'relative'}}>
                <img style={{display:isMobile?'none':'block', position:'absolute',  left: '0', top: '69px', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/HomeHero/1_Rating.png'} alt={''}/>
                <img style={{display:isMobile?'none':'block', position:'absolute',  left: '78px', top: '474px', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/HomeHero/1_Rules.png'} alt={''}/>
                <img style={{display:isMobile?'none':'block', position:'absolute',  right: '0', top: '425px', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)'}} src={'/images/home/HomeHero/1_Message.png'} alt={''}/>
                <Box sx={isMobile?{fontWeight: '500', fontSize: '24px',lineHeight: '32px', maxWidth:'288px', margin:'0 auto'}:{fontWeight: '500', fontSize: '60px',lineHeight: '72px', letterSpacing: '-0.5px', maxWidth:'864px', margin:'0 auto'}}>Размещайте объявления с <span style={{color:"#00A699"}}>подтвержденным рейтингом</span> и без комиссии</Box>
                <Box sx={{mt:4}}>
                {currentUser
                    ? <Button variant={'contained'} onClick={()=>router.push('/profile')}>Сдать жилье</Button>
                    : <SignUp/>}
                </Box>
            </Box>
        </Container>
    )
}