import React from "react";
import Link from "next/link";

import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface SyncApartCardProps {
	apartment:any,
}

export default function SyncApartCard({ apartment }:SyncApartCardProps){
	const { image, name, description, rating, reviews } = apartment;
	return (
		<Card>
			<CardMedia component="img" height="140" image={image} alt={name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{ mb:0}}>{name}</Typography>
				<Stack direction={'row'} alignItems={'center'} sx={{ mb:0.5}}>
					<Stack direction={'row'} alignItems={'center'} sx={{ mr:1}}><StarIcon fontSize={'small'} sx={{color:'#FF5A5F'}}/><Typography variant="body1">{rating}</Typography></Stack>
					<Link href='#' passHref><a style={{ color: '#00A699'}}><Typography variant='body1'>{reviews} отзывов</Typography></a></Link>
				</Stack>
				<Typography variant="body2" color="text.secondary">{description}</Typography>
			</CardContent>
		</Card>
	)
}