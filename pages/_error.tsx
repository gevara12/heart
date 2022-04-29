import { NextPageContext } from 'next';

import { Page404 } from '@features/Page404';

const Error = ({ statusCode }: { statusCode: number }) => {
  return <div>{statusCode === 404 ? <Page404 /> : `An ${statusCode} error occurred on client`}</div>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
