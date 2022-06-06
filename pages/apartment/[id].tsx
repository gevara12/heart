import { useRouter } from 'next/router';
import { Container } from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { GetApartItemComponent } from '@features/host/GetApartItem';
import PublicApartment from '@features/PublicApartment';

const Apartment = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">
          <h1>Apartment: {id}</h1>
          <GetApartItemComponent id={id} />
          {/*<PublicApartment apartment={currentApartment} />*/}
        </Container>
      </section>
    </Layout>
  );
};

export default Apartment;
