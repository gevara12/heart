import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Container, Typography } from '@mui/material';
import { PublicApartments } from '@features/PublicApartments';

export default function Apartments() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">
          <Typography variant="h3">Список апартаментов (public)</Typography>
          <PublicApartments />
        </Container>
      </section>
    </Layout>
  );
}
