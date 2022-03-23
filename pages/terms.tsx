import Layout from '@components/Layout';
import Link from 'next/link';
// import { GetStaticProps } from 'next';
import SEO from '@components/SEO';

export default function Terms() {
  return (
    <Layout>
      <SEO />
      <section>
        <div>Terms page</div>
        <Link href='/'>Home</Link>
      </section>
    </Layout>
  );
}
