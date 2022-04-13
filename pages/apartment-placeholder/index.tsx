import React from "react";
import Link from 'next/link';

import {
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Divider,
  Alert,
  IconButton,
  Tooltip, Box, useTheme,
} from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


import Layout from '@components/Layout';
import SEO from '@components/SEO';
import ApartmentBlock from "@features/PublicApartment/ApartmentBlock";
import PhotoSlider from "@features/PublicApartment/PhotoSlider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PhotoBlock from "@features/PublicApartment/PhotoBlock";

import Apartment from "@components/ApartmentMock";
import AboutBlock from "@features/PublicApartment/AboutBlock";
import OwnerAboutBlock from "@features/PublicApartment/OwnerAboutBlock";
import PinnedBlock from "@features/PublicApartment/PinnedBlock";
import RatingIconsPanel from "@components/RatingIconsPanel";
import MobilePinnedBlock from "@features/PublicApartment/MobilePinnedBlock";


export default function ApartmentPlaceholder() {
  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery( breakpoints.down('md') );

  return (
    <Layout isHero={true}>
      <SEO />
      <section>
        <Container maxWidth='lg'>

          { isMobile && <PhotoSlider photos={Apartment.photos}/>}

          <header>
            <Typography variant='h5' component='div'>{Apartment.title}</Typography>
            <Box sx={{display:{xs:'block',md:'flex'}, justifyContent:'space-between'}}>

              <Stack direction={{ xs: 'column', md:'row' }} alignItems={{xs:'start',md:'center'}} spacing={{ xs: 0, md:3 }}>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <RatingIconsPanel/>
                  <Tooltip title="some explanation">
                    <IconButton>
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>

                <Link href='#map' passHref>
                  <a style={{ display:'flex', color: '#00A699' }}>
                    <FmdGoodOutlinedIcon fontSize="small" sx={{marginRight:'3px'}} />{Apartment.address}
                  </a>
                </Link>
              </Stack>
              <Box sx={{display:{xs:'none',md:'block'}}}>
                <Link href='#' passHref>
                  <a style={{display:'flex', alignItems:'center', color: '#00A699'}}>
                    <ShareIcon fontSize="small" sx={{marginRight:'3px'}} />Поделиться
                  </a>
                </Link>
              </Box>
            </Box>
          </header>

          <Divider sx={{mt:3, mb:3}}/>

          { !isMobile && <PhotoBlock photos={Apartment.photos}/> }

          <Box sx={{ overflow: 'hidden' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>

                <AboutBlock/>

                <Divider sx={{mt:3, mb:3}}/>

                <div>{Apartment.description}</div>

                <Divider sx={{mt:3, mb:3}}/>

                <ApartmentBlock title={'Заселение'}>
                  <Grid container spacing={{xs:1,md:2}}>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <div style={{display:'flex'}}><AccessTimeIcon sx={{ mr:1 }}/>Прибытие с 12:00</div>
                        <div style={{display:'flex'}}><AccessTimeIcon sx={{ mr:1 }}/>Выезд с 14:00</div>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1}>
                        <div style={{display:'flex'}}><HighlightOffRoundedIcon sx={{color:'red', mr:1}} />Без раннего заезда</div>
                        <div style={{display:'flex'}}><CheckCircleOutlineIcon sx={{color:'green', mr:1}} />Поздний выезд</div>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Alert severity="info" sx={{mt:{xs:2,md:4}}}>После связи с хозяином вам будет доступна инструкция по заселению</Alert>
                </ApartmentBlock>

                <Divider sx={{mt:3, mb:3}}/>

                <ApartmentBlock title={'Удобства'}>
                  <Grid container spacing={{xs:1}}>
                    {Apartment.options.map((option,i)=>
                      <Grid item xs={12} md={5} key={i}>
                        <div style={{display:'flex'}}><CheckCircleOutlineIcon sx={{color:'green', mr:1}} />{option}</div>
                      </Grid>
                    )}
                  </Grid>
                </ApartmentBlock>

                <Divider sx={{mt:3, mb:3}}/>

                <ApartmentBlock title={'Правила проживания'}>
                  <Grid container spacing={{xs:1,md:2}}>
                    <Grid item xs={12} md={5}>
                      <Stack spacing={1}>
                        {Apartment.rules.allowed.map((rule,i)=>
                          <div style={{display:'flex'}} key={i}>
                            <CheckCircleOutlineIcon sx={{color:'green', mr:1}} />
                            {rule}
                          </div>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Stack spacing={1}>
                        {Apartment.rules.forbidden.map((rule,i)=>
                          <div style={{display:'flex'}} key={i}>
                            <HighlightOffRoundedIcon sx={{color:'red', mr:1}} />
                            {rule}
                          </div>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </ApartmentBlock>
              </Grid>
              <Grid item xs={12} md={1} sx={{display:{xs:'none',md:"block"}}}/>

              { isMobile
                ? <MobilePinnedBlock/>
                : <Grid item xs={12} md={4}><PinnedBlock/></Grid>
              }
            </Grid>
          </Box>

          <Divider sx={{mt:3, mb:3}}/>

          <ApartmentBlock title={'На карте'} id='map'>
            <Box sx={{ height: {xs:'162px', sm:'320px', lg:'510px'} }}>
            <iframe width="100%" height="100%" style={{objectFit:'cover'}}
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no"/>
            </Box>
          </ApartmentBlock>

          <Divider sx={{mt:4, mb:4}}/>

          <ApartmentBlock title={'Хозяин'}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <OwnerAboutBlock/>
              </Grid>
              <Grid item xs={12} md={1}/>
              <Grid item xs={12} md={3}>
                <Typography sx={{mb:3}}>Скорость ответа: 1 час</Typography>
                <Button variant='outlined'>Задать вопрос хозяину</Button>
              </Grid>
            </Grid>
          </ApartmentBlock>

        </Container>
      </section>
    </Layout>
  );
}