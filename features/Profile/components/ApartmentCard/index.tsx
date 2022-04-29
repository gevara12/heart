import * as React from 'react';
import Link from 'next/link';

import {Box, Card, CardContent, CardMedia, Chip,  Stack, Typography} from '@mui/material';

import StarIcon from "@mui/icons-material/Star";


type TProfileApartmentProps = {
	apartment:any
};

export default function ApartmentCard({ apartment }:TProfileApartmentProps) {

	const {publicInfo, externalRating, images, status} = apartment;

	return (
		<Card>
			<Box sx={{ position:'relative', height:'140px', background:'#707070', zIndex:0, p:1.5 }}>
				{ (images && images.length !== 0) && (
					<CardMedia component="img" height="140" image={images[0].imageUrl} alt={''} sx={{position:'absolute', left:0, top:0,zIndex:-1}}/>
				)}
				{ externalRating?.isLuxury && <Chip label="Премиум" color="success" size="small"/>}
				{ externalRating?.superHost && <Chip label="Топ-сервис" color="secondary" size="small" />}
				{ status === 'CREATED' && (
					<Box sx={{
							position:'absolute', left:'50%', top:'50%',
							transform: 'translate3d(-50%, -50%, 0)',
							background: 'rgba(0, 0, 0, 0.17)',
							backdropFilter: 'blur(15px)',
							borderRadius: '4px',
							py:1,
							px:3,
							color: '#ffffff',
						}}><Typography variant="body1">Черновик</Typography>
					</Box>
				)}
			</Box>
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
