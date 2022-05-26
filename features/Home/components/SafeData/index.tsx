import * as React from "react";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";


export default function SafeData() {
    const {breakpoints} = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box sx={{
            marginTop: '136px',
            background: grey[50],
            padding: isMobile ? '52px 0' : '136px 0',
            textAlign: 'center'
        }}>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{maxWidth: '744px', margin: '0 auto'}}><Box
                sx={{color: 'primary.main'}}>Будьте уверены</Box> в том, с кем ведете переписку</Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{
                maxWidth: '744px',
                margin: isMobile ? '8px auto 0' : '20px auto 0'
            }}>Подтверждается подлинность перенесенных данных и тот факт, что пользователь нашего сервиса действительно
                имеет доступ к объявлениям в профиле на внешнем сервисе.</Typography>
            <img style={{
                display: 'inline-block',
                width: isMobile ? '168px' : '260px',
                marginTop: isMobile ? '20px' : '52px'
            }} src={'/images/home/MobileProfile1.png'} alt={''}/>
        </Box>
    )
}