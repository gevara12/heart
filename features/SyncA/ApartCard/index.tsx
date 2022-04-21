import React from "react";
import Link from "next/link";

import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


export type TApartmentServiceA = {
	id: string;
	pictureUrl: string;
	propertyTypeName: string;
	nameOrPlaceholderName: string;
	ratingAverage: number;
	reviewCount: number;
};

export default function ApartCard({ apartment }:{
	apartment:TApartmentServiceA
}){
	const { id, pictureUrl, propertyTypeName, nameOrPlaceholderName, ratingAverage, reviewCount } = apartment;

	return (
		<Card>
			<CardMedia component="img" height="140" image={pictureUrl} alt={propertyTypeName} />
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