import { useRouter } from 'next/router';
import { Container, Typography } from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { DraftApart } from '@features/SyncA/DraftApart';

const Draft = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">
          <DraftApart id={id} />
        </Container>
      </section>
    </Layout>
  );
};

export default Draft;
