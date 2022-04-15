import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export type TPublicApartItemProps = {
  apart: {
    publicInfo: {
      id: number;
      name: string;
      description: string;
      image: string;
    }
  };
};

export const PublicApartItem = ({ apart }: TPublicApartItemProps): React.ReactElement => {
  const { publicInfo:{ id, name, description, image } } = apart;
  return (
    <Card>
      <CardActionArea href={`/apartment-public/${id}`}>
        <CardMedia component='img' height='140' image={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'} alt={name}/>
        <CardContent>
          <Typography gutterBottom variant='h5'>{name}</Typography>
          <Typography variant='body2' color='text.secondary'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
