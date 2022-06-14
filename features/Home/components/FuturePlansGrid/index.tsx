import {Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import PromoCard from "@features/Home/components/PromoCard";
import * as React from "react";
import {grey} from "@mui/material/colors";


const cardsList = [
    {title:'Поиск с масштабируемой картой', image:'/images/home/FuturePlansGrid/Map.png', bg:'linear-gradient(47.24deg, #D9AFD9 0%, #97D9E1 100%)'},
    {title:'Встроенный месседжер', image:'/images/home/FuturePlansGrid/Messages.png', bg:'linear-gradient(312.76deg, #96FBC4 0%, #F9F586 100%)'},
    {title:'Онлайн-оплата', image:'/images/home/FuturePlansGrid/OnlinePayment.png', bg:'linear-gradient(227.24deg, #F6D365 0%, #FDA085 100%)'},
];

export default function FuturePlansGrid() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));
    return (
        <Container fixed>
            <Box sx={{marginTop:isMobile?'52px':'220px'}}>

                <Typography variant={isMobile?'h5':'h3'} sx={{mt:2.5, fontWeight:500, textAlign:'center'}}><Box sx={{color:'primary.main', display:'inline-block'}}>Планы</Box> на будущее</Typography>

                <Stack direction={isMobile?'column':'row-reverse'} sx={{mt:isMobile?2.5:6.5, background: grey[50], borderRadius: 2.5, p:3}} spacing={{xs:isMobile?2.5:7.5}}>
                    <Box sx={{flex: isMobile ?'unset':'1 1 50%', display:'flex', height: isMobile ?'240px':'296px', background: 'linear-gradient(107.45deg, #F3E7E9 0%, #E3EEFF 100%)', borderRadius:'20px', overflow:'hidden'}}>
                        <img style={{ display:'block', height:'100%', marginLeft:'auto'}} src={'/images/home/FuturePlansGrid/Calendars.png'} alt={''}/>
                    </Box>
                    <Box sx={{flex: isMobile ?'unset':'1 1 50%'}}>
                        <Typography variant={isMobile?'h6':'h4'} sx={{fontWeight:500}}>Календарь бронирований</Typography>
                        <Typography variant={isMobile?'body2':'body1'} sx={{mt:isMobile?1:2.5}}>Главный помощник в планировании как для гостя, так и для хозяина.</Typography>
                    </Box>
                </Stack>

                <Box sx={{mt:4, overflow:'hidden'}}>
                    <Grid container spacing={{xs: '32px'}}>
                        {cardsList.map((card,i)=>(
                            <Grid item xs={12} lg={4} key={i}>
                                <PromoCard card={card}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/*<Stack direction={isMobile?'column':'row'} sx={{mt:4, background:grey[50], borderRadius:2.5, p:3 }} spacing={{xs:isMobile?2.5:7.5}}>
                    <Box sx={{flex:isMobile?'unset':'1 1 50%', display:'flex', height:isMobile?'240px':'296px', background: 'linear-gradient(90deg, #FFC3A0 0%, #FFAFBD 100%)', borderRadius:2.5, overflow:'hidden'}}>
                        <img style={{ display:'block', height:isMobile?'95px':'170px', margin:'auto'}} src={'/images/home/FuturePlansGrid/Objects.png'} alt={''}/>
                    </Box>
                    <Box sx={{flex: isMobile ?'unset':'1 1 50%'}}>
                        <Typography variant={isMobile?'h6':'h4'} sx={{fontWeight:500}}>Страховка жилья для хостов</Typography>
                        <Typography variant={isMobile?'body2':'body1'} sx={{mt:isMobile?1:2.5}}>В партнерстве с mango.rocks</Typography>
                    </Box>
                </Stack>*/}

            </Box>
        </Container>
    );
}