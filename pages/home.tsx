import * as React from "react";

import Layout from '@components/Layout';
import SEO from '@components/SEO';

import Home from '@features/Home';


export default function HomePage() {
    return (
        <Layout isHero>
            <SEO/>
            <section>
                <Home/>
            </section>
        </Layout>
    );
};