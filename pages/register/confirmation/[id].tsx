import {default as React, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from 'next/router';

import {Box, Button, CircularProgress, Container, Stack, Typography, useMediaQuery} from '@mui/material';
import Layout from '@components/Layout';
import {registerConfirm} from "@store/auth/actions";
import useTheme from "@mui/material/styles/useTheme";


export default function Confirmation() {
    const router = useRouter();
    const {id} = router.query;
    const dispatch = useDispatch();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);

    const [regEmail, setRegEmail] = useState('');


    useEffect(() => {
        setSuccess(false);
        setError(false);
        setloading(true);
        id && (
            dispatch(registerConfirm(id))
                .then((data) => {
                    setSuccess(true);
                    setRegEmail(data.email)
                })
                .catch( ()=> setError(true) )
                .finally(() => setloading(false) )
        );
    }, [id]);
    return (
        <Layout>
            <section>
                <Container maxWidth='lg'>
                    {loading && <CircularProgress />}
                    {success && (
                        <Box sx={{textAlign:'center', mt:isMobile?10.5:'208px', width:isMobile?'auto':'524px', ml:'auto',mr:'auto'}}>
                            <Typography variant={'body1'} sx={{}}>Ваш адрес электронной почты успешно подтвержден!</Typography>
                            <Typography variant={'h6'} sx={{mt:6.5}}>Заполните профиль</Typography>
                            <Typography variant={'body1'} sx={{mt:2.5}}>Если вы ранее были зарегистрированы на известных зарубежных сайтах аренды жилья, вы можете перенести данные профиля из открытых источников.</Typography>
                            <Stack direction={isMobile?'column':'row'} alignItems={isMobile?'stretch':'center'} justifyContent={'center'} sx={{mt:3}} spacing={isMobile?2.5:3}>
                                <Button variant="contained" onClick={()=>router.replace('/host/sync-a')} sx={{ minWidth:'205px'}}>Перенести данные</Button>
                                <Button variant="outlined" onClick={()=>router.replace('/profile/edit')} sx={{ minWidth:'205px' }}>Заполнить сам</Button>
                            </Stack>
                        </Box>
                    )}
                    {error && <div>чтото пошло не так</div>}
                </Container>
            </section>
        </Layout>
    )
};
