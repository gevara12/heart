import Layout from '@components/Layout';

import SEO from '@components/SEO';
import { Container, Typography } from '@mui/material';
import { CreateApartment } from '@components/CreateApartment';

export default function Create() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <Typography variant='h3' sx={{ marginBottom: 4 }}>
            Добавить новое жильё
          </Typography>
          <CreateApartment />
        </Container>
      </section>
    </Layout>
  );
}
