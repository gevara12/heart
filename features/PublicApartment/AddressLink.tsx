import * as React from 'react';
import Link from 'next/link';

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export const AddressLink = ({ text }: { text: string }) => (
  <Link href="#map" passHref>
    <a style={{ display: 'flex', color: '#00a699' }}>
      <FmdGoodOutlinedIcon fontSize="small" sx={{ marginRight: '3px' }} />
      {text}
    </a>
  </Link>
);
