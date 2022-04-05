import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head title="Heart Apart">
        <link
          href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css'
          rel='stylesheet'
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
