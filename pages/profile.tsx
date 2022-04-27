import { Container } from '@mui/material';

import { useSelector } from 'react-redux';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Profile } from '@features/Profile';
import { LoginWall } from '@features/LoginWall';
import { useAuthCheck } from '@hooks/useAuthCheck';
import { getCurrentUser } from '@store/auth/selectors';

const ProfilePage = () => {
  useAuthCheck();
  const currentUser = useSelector(getCurrentUser);

  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">{currentUser ? <Profile /> : <LoginWall />}</Container>
      </section>
    </Layout>
  );
};

export default ProfilePage;
