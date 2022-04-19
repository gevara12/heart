import Layout from '@components/Layout';

import SEO from '@components/SEO';
import { LastHero } from '@components/LastHero';

export default function Home() {
  return (
    <Layout isHero>
      <SEO />
      <section>
        <LastHero />
      </section>
    </Layout>
  );
}
