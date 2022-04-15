import { useRouter } from 'next/router';
import { Container } from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import React from "react";

import PublicApartment from '@features/PublicApartment';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentApartment} from "@store/apartments/selectors";
import {fetchApartmentById} from "@store/apartments/actions";


const apartmentPublic = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { currentApartment } = useSelector(getCurrentApartment);

  React.useEffect(() => {
    id && dispatch(fetchApartmentById(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <SEO/>
      <section>
        <Container maxWidth='lg'>
          <PublicApartment apartment={currentApartment}/>
        </Container>
      </section>
    </Layout>
  )
};

export default apartmentPublic;
