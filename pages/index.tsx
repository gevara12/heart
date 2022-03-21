import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

import { HeroSection } from '@components/HeroSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <HeroSection />
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
