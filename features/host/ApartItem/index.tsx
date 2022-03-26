import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export type TApartItemProps = {
  apart: {
    id: number;
    name: string;
    description: string;
  };
};

export const ApartItem = ({ apart }: TApartItemProps): React.ReactElement => (
  <Card>
    <CardActionArea href={`/apartment/${apart?.id}`}>
      <CardMedia
        component='img'
        height='140'
        image='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {apart.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {apart.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
