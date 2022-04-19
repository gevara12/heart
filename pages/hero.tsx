import Layout from '@components/Layout';

import { HeroSection } from '@components/HeroSection';
import SEO from '@components/SEO';

export default function Hero() {
  return (
    <Layout isHero>
      <SEO />
      <section>
        <HeroSection />
      </section>
    </Layout>
  );
}
