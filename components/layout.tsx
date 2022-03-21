import Head from 'next/head';
import { Header } from './Header';

export const siteTitle = 'Heart Apart only is for premium hosts';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Social network for hosts and travelers'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
