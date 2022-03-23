import Layout from '@components/Layout';

// import { getSortedPostsData } from '../lib/posts';
// import { GetStaticProps } from 'next';

import { HeroSection } from '@components/HeroSection';
import SEO from '@components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO />
      <section>
        <HeroSection />
      </section>
    </Layout>
  );
}
