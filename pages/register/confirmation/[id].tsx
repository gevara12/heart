import {default as React, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from 'next/router';

import {Container} from '@mui/material';
import Layout from '@components/Layout';

import {registerConfirm} from "../../../store/auth/actions";


const Confirmation = () => {
    const router = useRouter();
    const {id} = router.query;
    const dispatch = useDispatch();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    console.info(id);

    useEffect(() => {
        setSuccess(false);
        setError(false);
        id && (
            dispatch(registerConfirm(id))
                .then((response) => {
                    console.info('success');
                    console.info(response);
                    setSuccess(true);
                })
                .catch((response)=>{
                    console.error('error');
                    console.error(response);
                    setError(true);
                })
        );
    }, [dispatch]);
    return (
        <Layout>
            <section>
                <Container maxWidth='lg'>
                    <h1>{id}</h1>
                    {success && <div>вы успешно зарегистрированы</div>}
                    {error && <div>чтото пошло не так</div>}
                </Container>
            </section>
        </Layout>
    )
};

export default Confirmation
