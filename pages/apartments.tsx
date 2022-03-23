import Layout from '@components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import SEO from '@components/SEO';

export default function Apartments() {
  return (
    <Layout>
      <SEO />
      <section>
        <Link href='/'>Home</Link>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
