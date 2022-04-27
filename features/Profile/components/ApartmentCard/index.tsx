import * as React from 'react';
import Link from 'next/link';

import {Box, Card, CardContent, CardMedia,  Stack, Typography} from '@mui/material';

import StarIcon from "@mui/icons-material/Star";


type TProfileApartmentProps = {
	apartment:any
};

export default function ApartmentCard({apartment:{publicInfo, externalRating}}: TProfileApartmentProps) {
	return (
		<Card>
			{ (publicInfo?.images && publicInfo?.images.length !== 0) ? (
				<CardMedia component="img" height="140" image={publicInfo?.images[0].imageUrl} alt={''}/>
			):(
				<Box sx={{height:'140px', background:'#707070'}}/>
			)}
			<CardContent>
				<Typography variant="h5">{publicInfo.name}</Typography>
				<Stack direction="row" alignItems="center" sx={{mb: 0.5}}>
					<Stack direction="row" alignItems="center" sx={{mr: 1}}>
						<StarIcon fontSize="small" sx={{color: 'secondary.main'}}/>
						<Typography variant="body1">{externalRating.overallRating}</Typography>
					</Stack>
					<Link href={`${externalRating.reference}/reviews`} passHref>
						<Typography component="a" sx={{color: 'primary.main'}} target="_blank" rel="nofollow"
						            variant="body1">{externalRating.overallCount} отзывов</Typography>
					</Link>
				</Stack>
				<Typography variant="body2">{publicInfo.placeType}</Typography>
			</CardContent>
		</Card>
	);
};
