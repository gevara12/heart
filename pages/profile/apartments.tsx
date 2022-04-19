import Layout from '@components/Layout';
import Link from 'next/link';
import SEO from '@components/SEO';
import { Container, Typography, Stack, Button } from '@mui/material';
import { UserApartments } from '@features/UserApartments';

export default function Apartments() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={{ xs: 2, md: 2 }}
            alignItems={{ xs: 'start', md: 'center' }}
          >
            <Typography variant="h4">Список апартаментов</Typography>
            <div>
              <Link href="/host/create" passHref>
                <Button variant="contained">Добавить жильё</Button>
              </Link>
            </div>
          </Stack>
          <UserApartments />
        </Container>
      </section>
    </Layout>
  );
}
