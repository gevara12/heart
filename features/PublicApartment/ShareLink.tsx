import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import React from 'react';

export default function ShareLink() {
  return (
    <Link href="#" passHref>
      <a style={{ display: 'flex', alignItems: 'center', color: '#00A699' }}>
        <ShareIcon fontSize="small" sx={{ mr: 0.5 }} />
        Поделиться
      </a>
    </Link>
  );
}
