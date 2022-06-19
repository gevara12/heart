import * as React from "react";
import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";


export default function BeSure() {
    const {breakpoints} = useTheme();
    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isMdBreak = useMediaQuery(breakpoints.down('md'));
    const isLgBreak = useMediaQuery(breakpoints.down('lg'));

    const boxShadow = '0px 4px 24px rgba(46, 60, 80, 0.08)';
    const commonStyles = {
        display:isSmBreak?'none':'block',
        position: 'absolute',
    };

    return (
        <Box sx={{
            marginTop: isSmBreak ? 6.5:(isMdBreak?10:17),
            background: grey[100],
            paddingTop: isSmBreak?'52px':(isMdBreak?'80px':'136px'),
            paddingBottom: isSmBreak?'52px':(isMdBreak?'80px':'136px'),
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Container fixed>
                <Typography variant={isSmBreak?'h6':'h4'} sx={{ maxWidth:'744px', margin:'0 auto', fontWeight:500 }}>
                    <Box sx={{color: 'primary.main'}}>Будьте уверены</Box> в том, с кем ведете переписку
                </Typography>
                <Typography variant={isSmBreak?'body2':'body1'} sx={{
                    maxWidth: '744px',
                    margin: isMdBreak ? '8px auto 0' : '20px auto 0'
                }}>Подтверждается подлинность перенесенных данных и тот факт, что пользователь нашего сервиса действительно
                    имеет доступ к объявлениям в профиле на внешнем сервисе.</Typography>
                <Box sx={{ position:'relative', marginTop:isMdBreak?4.5:6.5 }}>
                    <img style={{ ...commonStyles, width:isLgBreak?40:60, top:isLgBreak?74:84, left:isLgBreak?130:350 }} src={'/images/home/BeSure/PremiumLabel.png'} alt={''}/>
                    <img style={{ ...commonStyles, width:isLgBreak?180:262, top:isLgBreak?239:389, left:isLgBreak?24:224, boxShadow:boxShadow }} src={'/images/home/BeSure/Confirmation.png'} alt={''}/>
                    <img style={{ display: 'inline-block', width: isLgBreak?160:260 }} src={'/images/home/BeSure/Mobile_Mockup.png'} alt={''}/>
                    <img style={{ ...commonStyles, width:isLgBreak?120:160, top:isLgBreak?44:114, right:isLgBreak?118:328, boxShadow:boxShadow }} src={'/images/home/BeSure/TopserviceLabel.png'} alt={''}/>
                    <img style={{ ...commonStyles, width:isLgBreak?180:332, top:isLgBreak?185:265, right:isLgBreak?32:120, boxShadow:boxShadow }} src={'/images/home/BeSure/Message.png'} alt={''}/>
                </Box>
            </Container>
        </Box>
    )
}