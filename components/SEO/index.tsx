import Head from 'next/head';

export const defaultTitle =
  'HeartApart - новый сервис краткосрочной аренды в России';
export const defaultDescription =
  'HeartApart объединяет гостей и хозяев уникальных квартир, предоставляя услуги по размещению объектов и поиск с удобным календарем и картой.';
export const defaultImage = 'https://res.cloudinary.com/dh3i90adr/image/upload/v1648032157/heart-apart/248AF219-4C47-4158-AADF-586D769DCDDF_1_201_a_gzg7ot.jpg';

type TSeoProps = {
  title?: string;
  description?: string;
  image?: string;
};
export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
}: TSeoProps) {
  return (
    <Head>
      <title>{title}</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/favicons/site.webmanifest"/>
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#2b5797"/>
      <meta name="theme-color" content="#ffffff"/>

      <meta name='description' content={description} />
      <meta
        property='og:image'
        content={image}
      />
      <meta name='og:title' content={defaultTitle} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
}
