import {Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import PromoCard from "@features/Home/components/PromoCard";
import * as React from "react";
import {grey} from "@mui/material/colors";


const cardsList = [
    {title:'Поиск с масштабируемой картой', image:'/images/home/Map.png', bg:'linear-gradient(47.24deg, #D9AFD9 0%, #97D9E1 100%)'},
    {title:'Встроенный месседжер', image:'/images/home/Messages.png', bg:'linear-gradient(312.76deg, #96FBC4 0%, #F9F586 100%)'},
    {title:'Онлайн-оплата', image:'/images/home/OnlinePayment.png', bg:'linear-gradient(227.24deg, #F6D365 0%, #FDA085 100%)'},
];

export default function FuturePlansGrid() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));
    return (
        <Container maxWidth='lg'>
            <Box sx={{marginTop:'220px'}}>

                <Typography variant={'h3'} sx={{mt:2.5, fontWeight:500, textAlign:'center'}}><Box sx={{color:'primary.main', display:'inline-block'}}>Планы</Box> на будущее</Typography>

                <Stack direction={'row'} sx={{mt:6.5, background: grey[50], borderRadius: 2.5, p:3}} spacing={{xs:7.5}}>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={'h4'} sx={{fontWeight:500}}>Календарь бронирований</Typography>
                        <Typography variant={'body1'} sx={{mt:2.5}}>Главный помощник в планировании как для гостя, так и для хозяина.</Typography>
                    </Box>
                    <Box sx={{flex:'1 1 50%', display:'flex', height:'296px', background: 'linear-gradient(107.45deg, #F3E7E9 0%, #E3EEFF 100%)', borderRadius:'20px'}}>
                        <img style={{ display:'block', height:'100%', marginLeft:'auto'}} src={'/images/home/Calendars.png'} alt={''}/>
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

                <Stack direction={'row'} sx={{mt:4, background:grey[50], borderRadius:2.5, p:3 }} spacing={{xs:7.5}}>
                    <Box sx={{flex:'1 1 50%', display:'flex', height:'296px', background: 'linear-gradient(90deg, #FFC3A0 0%, #FFAFBD 100%)', borderRadius:2.5}}>
                        <img style={{ display:'block', height:'170px', margin:'auto'}} src={'/images/home/Objects.png'} alt={''}/>
                    </Box>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={'h4'} sx={{fontWeight:500}}>Страховка жилья для хостов</Typography>
                        <Typography variant={'body1'} sx={{mt:2.5}}>В партнерстве с mango.rocks</Typography>
                    </Box>
                </Stack>

            </Box>
        </Container>
    );
}