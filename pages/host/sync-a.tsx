import React, { useState } from "react";
import Layout from '@components/Layout';
import { LoadingButton } from '@mui/lab';

import SEO from '@components/SEO';
import { Box, Button, Container, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';

import SyncAccountInfo from "@features/host/SyncAccountInfo";


const parsedInfo = {
  name:'Дональд',
  about: 'Я бывший президент США, и у меня есть большая башня.',
  avatar: 'https://i1.sndcdn.com/avatars-000211446087-hahqw0-t500x500.jpg',
  aparts: [
    {
      image:'https://s1.1zoom.me/b6755/973/Cats_Kittens_Grey_Glance_Wicker_basket_517968_1600x1200.jpg',
      name:'Lizard 1',
      description:'1 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      rating: 4.83,
      reviews:12,
    },
    {
      image:'https://s1.1zoom.me/b6755/973/Cats_Kittens_Grey_Glance_Wicker_basket_517968_1600x1200.jpg',
      name:'Lizard 2',
      description:'2 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      rating: 4.84,
      reviews:13,
    },
    {
      image:'https://s1.1zoom.me/b6755/973/Cats_Kittens_Grey_Glance_Wicker_basket_517968_1600x1200.jpg',
      name:'Lizard 3',
      description:'3 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      rating: 4.85,
      reviews:14,
    },
  ]
};

export default function SyncA() {

  const [serviceLink, setServiceLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [accountInfo, setAccountInfo] = useState<null|object>(null);

  const handleSync = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAccountInfo(parsedInfo);
    setLoading(false);
  };
  const handleSubmit = () => {
    console.info('submit');
  };

  return (
    <Layout isHero>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <Typography variant="h4" sx={{mt:17}}>Синхронизация с сервисом А</Typography>
          <Typography variant="body1" sx={{mt:6.5}}>Вставьте ссылку на ваш профиль, данные будут автоматически заполнены.</Typography>
          <Box sx={{overflow:'hidden',mt:3.5}}>
            <Grid container spacing={2} alignItems={'flex-start'}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField variant='outlined' placeholder='https://www.airbnb.com/users/show/<;номер аккаунта>'
                             autoComplete='off'
                             size='small'
                             value={serviceLink}
                             onChange={(e) => setServiceLink(e.target.value)}/>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <LoadingButton size="large" onClick={handleSync} loading={loading} disabled={loading} variant="contained">Синхронизировать</LoadingButton>
              </Grid>
            </Grid>
          </Box>

          { accountInfo
            && <>
                <SyncAccountInfo parsedInfo={parsedInfo}/>

                <Typography variant="body1" sx={{ mt:8 }}>Если данная информация корректна и относится к вашему профилю, нажмите “Подтвердить”</Typography>

                <Box sx={{ overflow:'hidden', mt:4 }}>
                  <Stack direction={'row'} spacing={2}>
                    <Button type='submit' variant='outlined' color='primary' size='large' sx={{width: '168px'}}>Помощь</Button>
                    <Button type='submit' variant='contained' color='primary' size='large' sx={{width: '168px'}} onClick={handleSubmit}>Подтвердить</Button>
                  </Stack>
                </Box>
              </>
          }
        </Container>
      </section>
    </Layout>
  );
}
