import React from "react";
import Link from "next/link";

import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


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
				{ (isSelect || isLuxury) && <Box
				sx={{
					backdropFilter: 'blur(15px)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
					color: 'white',
					width: '52px',
					height: '52px',
					marginBottom: '-15px',
					marginLeft: '4px',
					background: 'linear-gradient(180deg, rgba(0, 166, 153, 0.6) 0%, rgba(0, 166, 153, 0.5) 100%)'}}>
					<DiamondOutlinedIcon  sx={{ fontSize: 32 }}/>
				</Box>}
				{ isSuperhost && <Box
					sx={{
						backdropFilter: 'blur(15px)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '50%',
						color: 'white',
						width: '52px',
						height: '52px',
						marginBottom: '-15px',
						marginLeft: '4px',
						background: 'linear-gradient(180deg, rgba(247, 87, 92, 0.6) 0%, rgba(247, 87, 92, 0.4) 100%)'}}>
					<WorkspacePremiumIcon  sx={{ fontSize: 32 }}/>
				</Box>}
				<Box sx={{
					position:'absolute', left:'50%', top:'50%',
					transform: 'translate3d(-50%, -50%, 0)',
					background: 'rgba(0, 0, 0, 0.17)',
					backdropFilter: 'blur(15px)',
					borderRadius: '4px',
					py:1,
					px:3,
					border: '1px inset',
					borderImageSource: 'linear-gradient(95.67deg, rgba(255, 255, 255, 0.3) 0%, rgba(247, 255, 254, 0.3) 99.4%)',
					color: '#ffffff',
				}}><Box sx={{
					fontWeight: '400',
					fontSize: '13px',
					lineHeight: '18px',
					letterSpacing: '0.16px',
				}}>Черновик</Box>
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