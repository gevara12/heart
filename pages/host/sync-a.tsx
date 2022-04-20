import React, { useState } from "react";
import Layout from '@components/Layout';
import { LoadingButton } from '@mui/lab';

import SEO from '@components/SEO';
import { Box, Button, Container, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';

import SyncAccountInfo from "@features/host/SyncAccountInfo";
import {useDispatch, useSelector} from "react-redux";
import { getDataFromA } from "@store/syncA/actions";

import {getParsedData} from "@store/syncA/selectors";


export default function SyncA() {
  const dispatch = useDispatch();

  const [serviceLink, setServiceLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [accountInfo, setAccountInfo] = useState<null|object>(null);

  const parsedData = useSelector(getParsedData);

  const handleSync = async () => {
    setLoading(true);
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000));
      await dispatch(getDataFromA('https://www.airbnb.ru/users/show/144225005'));
    } catch (e) {
      console.error(e);
    }
  };
  React.useEffect(() => {
    setAccountInfo(parsedData);
    setLoading(false);
  }, [parsedData]);

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
                <SyncAccountInfo parsedInfo={parsedData}/>

                <Typography variant="body1" sx={{ mt:8 }}>Если данная информация корректна и относится к вашему профилю, нажмите “Подтвердить”</Typography>

                <Box sx={{ overflow:'hidden', mt:4 }}>
                  <Stack direction={'row'} spacing={2}>
                    <Button type='submit' variant='outlined' color='primary' size='large' sx={{width: '168px'}}>Помощь</Button>
                    <Button type='submit' variant='contained' color='primary' size='large' sx={{width: '168px'}} onClick={handleSync}>Подтвердить</Button>
                  </Stack>
                </Box>
              </>
          }
        </Container>
      </section>
    </Layout>
  );
}
