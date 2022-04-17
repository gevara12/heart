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
    publicInfo: {
      id: number;
      name: string;
      description: string;
      image: string;
    }
  };
};

export const ApartItem = ({ apart }: TApartItemProps): React.ReactElement => {
  const { publicInfo:{ id, name, description } } = apart;
  return (
    <Card>
      <CardActionArea href={`/apartment/${id}`}>
        <CardMedia component='img' height='140' image={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'} alt={name}/>
        <CardContent>
          <Typography gutterBottom variant='h5'>{name}</Typography>
          <Typography variant='body2' color='text.secondary'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
