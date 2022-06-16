import * as React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/SEO';

import Home from '@features/Home';

const HomePage = () => (
  <Layout isHero>
    <SEO />
    <section>
      <Home />
    </section>
  </Layout>
);

export default HomePage;
