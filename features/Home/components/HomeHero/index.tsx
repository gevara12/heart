import * as React from "react";
import {useSelector} from "react-redux";

import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {getCurrentUser} from "@store/auth/selectors";
import {SignUp} from "@components/SignUp";
import {useRouter} from "next/router";


export default function HomeHero() {
    const { breakpoints } = useTheme();
    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isLgBreak = useMediaQuery(breakpoints.down('lg'));

    const currentUser = useSelector(getCurrentUser);
    const router = useRouter();

    const boxShadow = '0px 4px 24px rgba(46, 60, 80, 0.08)';
    const imgCommonStyles = {
        display:(isSmBreak?'none':'block'),
        position:'absolute',
        boxShadow:boxShadow,
    };

    return (
        <Container fixed sx={{position:'relative'}}>
            <Box sx={{textAlign:'center', padding:isSmBreak? '52px 0':(isLgBreak?'160px 0 300px':'194px 0 255px')}}>
                <img style={{ ...imgCommonStyles, left:isLgBreak?32:24, top:isLgBreak?52:69, width:isLgBreak?191:240 }} src={'/images/home/HomeHero/Rating.png'} alt={''}/>
                <img style={{ ...imgCommonStyles, left:isLgBreak?32:78, top:isLgBreak?600:474, width:isLgBreak?138:191 }} src={'/images/home/HomeHero/Rules.png'} alt={''}/>
                <img style={{ ...imgCommonStyles, right:isLgBreak?32:24, top:isLgBreak?567:425, width:isLgBreak?191:240 }} src={'/images/home/HomeHero/Message.png'} alt={''}/>
                <Typography variant={isSmBreak?'h5':(isLgBreak?'h3':'h2')} sx={{fontWeight: '500', maxWidth:{ xs:'288px',sm:'536px',lg:'864px'}, margin:'0 auto'}}>Размещайте объявления с <span style={{color:"#00A699"}}>подтвержденным рейтингом</span> и без комиссии</Typography>
                <Box sx={{mt:4}}>
                {currentUser
                    ? <Button variant={'contained'} size={'large'} onClick={()=>router.push('/profile')}>Сдать жилье</Button>
                    : <SignUp isHome/>}
                </Box>
            </Box>
        </Container>
    )
}