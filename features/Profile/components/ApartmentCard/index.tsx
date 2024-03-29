import * as React from 'react';
import Link from 'next/link';

import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
// import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LuxuryIcon from '@components/LuxuryIcon';
import SuperHostIcon from '@components/SuperHostIcon';
import DraftBadge from '@components/DraftBadge';

import styles from './ApartmentCard.module.css';

type TProfileApartmentProps = {
  apartment: any;
};

export default function ApartmentCard({ apartment }: TProfileApartmentProps) {
  const { id, publicInfo, externalRating, images, status } = apartment;
  const isLuxury = externalRating?.isSelect || externalRating?.isLuxury;
  const places = {
    'entire-place': 'Жилье целиком',
    'private-room': 'Отдельная комната',
    'hotel-room': 'Гостиничный номер',
    'shared-room': 'Место в комнате',
  };
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          height: '140px',
          background: '#707070',
          px: 1,
          zIndex: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        {images && images.length !== 0 && (
          <CardMedia
            component="img"
            height="140"
            image={images[0].imageUrl}
            alt={''}
            sx={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}
          />
        )}
        {isLuxury && <LuxuryIcon sx={{ marginBottom: '-15px', marginLeft: '4px' }} />}
        {externalRating?.superHost && <SuperHostIcon sx={{ marginBottom: '-15px', marginLeft: '4px' }} />}
        {status === 'CREATED' && <DraftBadge />}
      </Box>
      <CardContent>
        <Link href={status === 'CREATED' ? `/draft/${id}` : `/apartment-public/${id}`} passHref>
          <Typography variant="h5" sx={{ cursor: 'pointer' }} className={styles.title}>
            {publicInfo.name.value || publicInfo.name}
          </Typography>
        </Link>
        <Stack direction="row" alignItems="center" sx={{ mb: 0.5 }}>
          <Stack direction="row" alignItems="center" sx={{ mr: 1 }}>
            <StarIcon fontSize="small" sx={{ color: 'secondary.main' }} />
            <Typography variant="body1">{externalRating?.overallRating}</Typography>
          </Stack>
          <Link href={`${externalRating?.reference}/reviews`} passHref>
            <Typography component="a" sx={{ color: 'primary.main' }} target="_blank" rel="nofollow" variant="body1">
              {externalRating?.overallCount} отзывов
            </Typography>
          </Link>
        </Stack>
        <Typography variant="body2">{places[publicInfo?.placeType?.value]}</Typography>
      </CardContent>
    </Card>
  );
}
