import Layout from '@components/Layout';

import Container from '@mui/material/Container';
import SEO from '@components/SEO';
import { ProfileEdit } from '@features/Profile/components/Edit';

export default function Edit() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">
          <ProfileEdit />
        </Container>
      </section>
    </Layout>
  );
}
