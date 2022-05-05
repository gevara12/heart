import {default as React, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from 'next/router';

import {Button, CircularProgress, Container} from '@mui/material';
import Layout from '@components/Layout';
import {registerConfirm} from "@store/auth/actions";


export default function Confirmation() {
    const router = useRouter();
    const {id} = router.query;
    const dispatch = useDispatch();

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
                        <div>
                            <div>вы успешно зарегистрированы на имейл {regEmail}</div>
                            <Button variant="outlined" onClick={()=>router.replace('/profile')} sx={{ width: '168px' }}>профиль</Button>
                        </div>
                    )}
                    {error && <div>чтото пошло не так</div>}
                </Container>
            </section>
        </Layout>
    )
};