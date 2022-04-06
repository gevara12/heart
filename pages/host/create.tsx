import Layout from '@components/Layout';
import dynamic from 'next/dynamic';

import SEO from '@components/SEO';
import { Container } from '@mui/material';
// import { CreateApartment } from '@components/CreateApartment';
// import MapsGeocode from '@components/CreateApartment';

// @ts-ignore
const CreateWithNoSSR = dynamic(() => import('@components/CreateApartment'), {
  ssr: false
});

export default function Create() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <CreateWithNoSSR />
        </Container>
      </section>
    </Layout>
  );
}
