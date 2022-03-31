import Layout from '@components/Layout';

import SEO from '@components/SEO';
import { Container } from '@mui/material';
import { CreateApartment } from '@components/CreateApartment';

export default function Create() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <CreateApartment />
        </Container>
      </section>
    </Layout>
  );
}
