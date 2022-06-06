import React from 'react';
import Link from 'next/link';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function AddressLink({ text }: any) {
  return (
    <Link href="#map" passHref>
      <a style={{ display: 'flex', color: '#00a699' }}>
        <FmdGoodOutlinedIcon fontSize="small" sx={{ marginRight: '3px' }} />
        {text}
      </a>
    </Link>
  );
}
