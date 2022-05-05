import React from "react";
import Link from "next/link";

import {Box, Card, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


export type TApartmentServiceA = {
	id: string;
	pictureUrl: string;
	propertyTypeName: string;
	nameOrPlaceholderName: string;
	ratingAverage: number;
	reviewCount: number;
	isSuperhost:boolean;
	isLuxury:boolean;
	isSelect:boolean;
};

export default function ApartCard({ apartment }:{
	apartment:TApartmentServiceA
}){
	const { id, pictureUrl, propertyTypeName, nameOrPlaceholderName, ratingAverage, reviewCount, isSuperhost, isLuxury, isSelect } = apartment;

	return (
		<Card>
			<Box sx={{ position:'relative', height:'140px', background:'#707070', zIndex:0, p:1.5 }}>
				{ pictureUrl && (
					<CardMedia component="img" height="140" image={pictureUrl} alt={''} sx={{position:'absolute', left:0, top:0,zIndex:-1}}/>
				)}
				{ (isSelect || isLuxury) && <Chip label="Премиум" color="success" size="small"/>}
				{ isSuperhost && <Chip label="Топ-сервис" color="secondary" size="small" />}
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
			</Box>
			<CardContent>
				<Typography variant="h5">{propertyTypeName}</Typography>
				<Stack direction="row" alignItems="center" sx={{mb:0.5}}>
					<Stack direction="row" alignItems="center" sx={{mr:1}}>
						<StarIcon fontSize="small" sx={{color:'secondary.main'}}/><Typography variant="body1">{ratingAverage}</Typography>
					</Stack>
					<Link href={`https://www.airbnb.ru/rooms/${id}/reviews`} passHref>
						<a style={{ color:'primary.main'}} target="_blank" rel="nofollow"><Typography variant="body1">{reviewCount} отзывов</Typography></a>
					</Link>
				</Stack>
				<Typography variant="body2">{nameOrPlaceholderName}</Typography>
			</CardContent>
		</Card>
	)
}