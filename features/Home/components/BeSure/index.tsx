import * as React from "react";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";


export default function BeSure() {
    const {breakpoints} = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box sx={{
            marginTop: isMobile ? '52px':'136px',
            background: grey[50],
            padding: isMobile ? '52px 16px' : '136px 0',
            textAlign: 'center',
            position: 'relative',
        }}>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{maxWidth: '744px', margin: '0 auto'}}><Box
                sx={{color: 'primary.main'}}>Будьте уверены</Box> в том, с кем ведете переписку</Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{
                maxWidth: '744px',
                margin: isMobile ? '8px auto 0' : '20px auto 0'
            }}>Подтверждается подлинность перенесенных данных и тот факт, что пользователь нашего сервиса действительно
                имеет доступ к объявлениям в профиле на внешнем сервисе.</Typography>
            <img style={{ display:isMobile?'none':'block', top: '451px', position: 'absolute',left:'calc(50% - 188px)', transform:'translateX(-100%)' }} src={'/images/home/BeSure/PremiumLabel.png'} alt={''}/>
            <img style={{ display:isMobile?'none':'block', top: '749px', position: 'absolute',left:'calc(50% - 110px)', transform:'translateX(-100%)', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)' }} src={'/images/home/BeSure/Confirmation.png'} alt={''}/>
            <img style={{ display: 'inline-block', width: isMobile ? '160px' : '260px', marginTop: isMobile ? '36px' : '52px' }} src={'/images/home/BeSure/Mobile_Mockup.png'} alt={''}/>
            <img style={{ display:isMobile?'none':'block', top:'476px', position: 'absolute',right:'calc(50% - 110px)', transform:'translateX(100%)', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)' }} src={'/images/home/BeSure/TopserviceLabel.png'} alt={''}/>
            <img style={{ display:isMobile?'none':'block', top: '629px', position: 'absolute',right:'calc(50% - 148px)', transform:'translateX(100%)', boxShadow: '0px 4px 24px rgba(46, 60, 80, 0.08)' }} src={'/images/home/BeSure/Message.png'} alt={''}/>
        </Box>
    )
}