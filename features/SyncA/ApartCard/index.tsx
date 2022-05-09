import React from "react";
import Link from "next/link";

import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LuxuryIcon from "@components/LuxuryIcon";
import SuperHostIcon from "@components/SuperHostIcon";
import DraftBadge from "@components/DraftBadge";


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
	const { id, pictureUrl, propertyTypeName, nameOrPlaceholderName,
		ratingAverage, reviewCount, isSuperhost, isLuxury, isSelect } = apartment;

	return (
		<Card>
			<Box sx={{ position:'relative', height:'140px', background:'#707070', px:1, zIndex:0, display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
				{ pictureUrl && (
					<CardMedia component="img" height="140" image={pictureUrl} alt={''}
							   sx={{position:'absolute', left:0, top:0,zIndex:-1}}/>
				)}
				{ (isSelect || isLuxury) && <LuxuryIcon sx={{ marginBottom:'-15px', marginLeft:'4px' }}/>}
				{ isSuperhost && <SuperHostIcon sx={{ marginBottom:'-15px', marginLeft:'4px' }}/>}
				<DraftBadge/>
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