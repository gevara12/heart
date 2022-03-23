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
      <link rel='icon' href='/favicon.ico' />
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
