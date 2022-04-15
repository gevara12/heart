import { Container } from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Profile } from '@features/Profile';

const ProfilePage = () => {

  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <Profile />
        </Container>
      </section>
    </Layout>
  );
};

export default ProfilePage;
