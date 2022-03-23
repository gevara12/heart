import Layout from '@components/Layout';
import Link from 'next/link';
// import { GetStaticProps } from 'next';
import SEO from '@components/SEO';
import { Typography } from '@mui/material';

export default function Privacy() {
  return (
    <Layout>
      <SEO />
      <section>
        <Typography variant='h2' component='h2'>Privacy page</Typography>
        <Link href='/'>Home</Link>
      </section>
    </Layout>
  );
}
