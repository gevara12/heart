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
        <Container maxWidth='lg'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='h3'>Список апартаментов</Typography>
            <div>
              <Link href='/host/create' passHref>
                <Button variant='contained'>Добавить жильё</Button>
              </Link>
            </div>
          </Stack>
          <UserApartments />
        </Container>
      </section>
    </Layout>
  );
}
