import Layout from '@components/Layout';

import Link from 'next/link';
import SEO from '@components/SEO';
/*import { Box } from '@material-ui/core';*/
import {
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  styled,
  Paper,
  Divider,
  Alert,
  IconButton,
  Tooltip, Box, Avatar,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'188px'
}));
const BigItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:"400px",
}));

export default function ApartmentPlaceholder() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <header>
            <Typography variant='h4' component='div'>1-комн. квартира, 45 кв.м. очень красивая</Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>

              <Stack direction={'row'} alignItems={'center'} spacing={3}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Stack direction={'row'} alignItems={'center'}><BoltIcon fontSize={'small'}/>42</Stack>
                  <Stack direction={'row'} alignItems={'center'}><StarIcon fontSize={'small'}/>9</Stack>
                  <Tooltip title="some explanation">
                    <IconButton>
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Link href='#' passHref>
                  <a style={{display:'flex', alignItems:'center', color: '#00A699'}}>
                    <FmdGoodOutlinedIcon fontSize="small" sx={{marginRight:'3px'}} />Санкт-Петербург, Свердловская наб.</a>
                </Link>
              </Stack>
              <div>share</div>
            </Box>
          </header>

          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap={4} alignItems="stretch" sx={{mb:3}}>
            <Box gridColumn="span 8" gridRow="1/3">
              <BigItem>main/first image</BigItem>
            </Box>
            <Box gridColumn="span 4" gridRow="1">
              <Item>aside image</Item>
            </Box>
            <Box gridColumn="span 4" gridRow="2">
              <Item sx={{height:'188px'}}>aside image</Item>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={7}>
              <div>common info</div>
              <Divider sx={{mt:3, mb:3}}/>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at cupiditate doloremque esse ex facilis fugiat ipsa maiores, minima nesciunt, nostrum officiis perferendis porro quasi recusandae sed totam voluptas voluptate.</div>
              <Divider sx={{mt:3, mb:3}}/>
              <div>
                <Typography variant='h5' component='div' sx={{mb:4}}>Заселение</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Прибытие с 12:00</div>
                      <div>Выезд с 14:00</div>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Без раннего заезда</div>
                      <div>Поздний выезд</div>
                    </Stack>
                  </Grid>
                </Grid>
                <Alert severity="info" sx={{mt:4}}>После связи с хозяином вам будет доступна инструкция по заселению</Alert>
              </div>
              <Divider sx={{mt:3, mb:3}}/>
              <div>
                <Typography variant='h5' component='div' sx={{mb:4}}>Удобства</Typography>

                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Wi-Fi</div>
                      <div>Телевизор</div>
                      <div>Кухня</div>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Стиральная машина</div>
                      <div>Парковка на территории</div>
                      <div>Кондиционер</div>
                    </Stack>
                  </Grid>
                </Grid>
              </div>
              <Divider sx={{mt:3, mb:3}}/>
              <div>
                <Typography variant='h5' component='div' sx={{mb:4}}>Правила проживания</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Можно с животными</div>
                      <div>Можно с детьми</div>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack>
                      <div>Нельзя курить</div>
                      <div>Нельзя шуметь</div>
                      <div>Нельзя проводить вечеринки</div>
                    </Stack>
                  </Grid>
                </Grid>
              </div>

            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={4}>
              <Paper>pinned block</Paper>
            </Grid>
          </Grid>
          <Divider sx={{mt:3, mb:3}}/>
          <div>
            <Typography variant='h5' component='div' sx={{mb:4}}>На карте</Typography>
            <iframe width="100%" height="510" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no"></iframe>
          </div>
          <Divider sx={{mt:4, mb:4}}/>
          <div>
            <Typography variant='h5' component='div' sx={{mb:4}}>Хозяин</Typography>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Grid container wrap="nowrap" spacing={2} sx={{mb:1}}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography noWrap>Иван Иванов</Typography>
                    <Typography noWrap>На сайте с: апрель 2022 г.</Typography>
                  </Grid>
                </Grid>
                <Stack  direction={'row'} alignItems={'center'} spacing={2} sx={{mb:1}}>
                  <div>12 reviews</div>
                  <div>approved</div>
                </Stack>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum est exercitationem ipsum iure laudantium maiores nostrum odit perferendis quas quidem quod rem rerum sint totam, vel. Maxime minus nulla velit!</div>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={3}>
                <Typography sx={{mb:3}}>Скорость ответа: 1 час</Typography>
                <Button variant='outlined'>Задать вопрос хозяину</Button>
              </Grid>
            </Grid>
          </div>

        </Container>
      </section>
    </Layout>
  );
}
