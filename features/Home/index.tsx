import * as React from "react";

import {Container, Grid, Box, useMediaQuery, useTheme} from '@mui/material';

import PromoBigCard from "@features/Home/components/PromoBigCard";
import LeftRightPromoCard from "@features/Home/components/LeftRightPromoCard";
import LeftRightPromoCard2 from "@features/Home/components/LeftRightPromoCard2";
import HomeHero from "@features/Home/components/HomeHero";
import FuturePlansGrid from "@features/Home/components/FuturePlansGrid";
import JoinUs from "@features/Home/components/JoinUs";
import Application from "@features/Home/components/Application";
import BeSure from "@features/Home/components/BeSure";
import DemoScreens from "@features/Home/components/DemoScreens";
import TeamCard from "@features/Home/components/TeamCard";
import AuthBlock from "@features/Home/components/AuthBlock";
import {ThemeSwitcher} from "@components/ThemeSwitcher";


const bigCardsList = [
    {title:'Будьте в ТОПе, это бесплатно', desc:'Нет комиссий и платы за размещение, объявление ранжируется в поиске, согласно подтвержденному рейтингу.', image:'/images/home/ObjectsTop.png'},
    {title:'Безопаность личных данных', desc:'Ваша личная информация бережно хранится на серверах в РФ со строгим соблюдением законодательства.', image:'/images/home/PersonalData.png'},
];

const leftRightCardsList = [
    {
        title:'<Box style="color:#00A699">Сохраняйте рейтинг</Box> и отзывы гостей',
        desc:'Вам не придется снова завоевывать доверие, данные можно перенести из открытых источников на американском сервисе А.',
        image:'/images/home/TopserviceMini.png',
        link:'/host/sync-a',
    },
    {
        title:'<Box style="color:#00A699">Переносите объявления</Box> за пару кликов',
        desc:'Не тратьте время на добавление с нуля, а также сохраните рейтинг объявлений.',
        image:'/images/home/ListingCards.png',
        link:'/host/sync-a',
    },
];

const leftRightCardsList2 = [
    {
        title:'Команда',
        desc:'<p>Мы собрались инициативной группой IT- специалистов с большим опытом путешествий и приема гостей, чтобы создать свою уникальную платформу краткосрочной аренды жилья, опираясь на опыт международных сервисов.</p><p>Мы хотим, чтобы времяпровождение в новом или уже полюбившемся городе начиналось с комфортного поиска идеального жилья.</p>',
        image:'/images/home/MissionObjects.png'
    },
    {
        title:'Миссия',
        desc:'<p>Мы ценим открытость, честность, дружелюбие во всем и хотим, чтобы HeartApart стал символом не только высокого качества сервиса, но и способом выстраивания новых, прочных связей между людьми такой большой и такой разной страны.</p>',
        image:'/images/home/MissionObjects.png',
    },
];

export default function Home() {
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.down('lg'));

    return (
        <>
            <Box sx={{position:'fixed',top:'0',zIndex:1000}}>
                <ThemeSwitcher/>
            </Box>
            <HomeHero/>

            <DemoScreens/>

            <Container fixed>
                <Box sx={{marginTop: isTablet ?'166px':'136px', overflow:'hidden'}}>
                    <Grid container spacing={{xs: isTablet ? '58px' :'84px'}}>
                        {leftRightCardsList.map((card,i)=>(
                            <Grid item xs={12} key={i}>
                                <LeftRightPromoCard card={card} reverse={(i+1)%2===0}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <BeSure/>

            <Container fixed>
                <Box sx={{marginTop:isTablet?'52px':'136px', overflow:'hidden'}}>
                    <Grid container spacing={{xs: isTablet ? '20px':'60px'}}>
                        {bigCardsList.map((card, i)=>(
                            <Grid item xs={12} lg={6} key={i}>
                                <PromoBigCard card={card}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Application/>

            <FuturePlansGrid/>

            <JoinUs/>

            <Container fixed>
                <Box sx={{marginTop:isTablet ? '55px':'188px'}}>
                    <Grid container spacing={{xs: isTablet ? '58px' :'84px'}}>
                        <Grid item xs={12}>
                            <TeamCard card={leftRightCardsList2[0]}/>
                        </Grid>
                        <Grid item xs={12}>
                            <LeftRightPromoCard2 card={leftRightCardsList2[1]} reverse={true}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <AuthBlock/>

        </>
    );
};