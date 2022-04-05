import * as React from "react";

import {Avatar, Grid, Stack, Typography} from "@mui/material";
import Link from "next/link";
import { VerifiedUser as VerifiedUserIcon} from '@mui/icons-material';

export default function ApartmentOwnerAboutBlock(){
	const owner = {
		fullName: 'Иван Иванов',
		registerDate: 'апрель 2022 г.',
		isApproved: true,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum est exercitationem ipsum iure laudantium maiores nostrum odit perferendis quas quidem quod rem rerum sint totam, vel. Maxime minus nulla velit!',
	};
	return (
		<>
			<Stack direction={{xs:'row-reverse', md:'row'}} spacing={2} sx={{mb:1}}>
				<div>
					<Avatar>W</Avatar>
				</div>
				<div style={{flex:'1 1 auto'}}>
					<Typography variant='h5'>{owner.fullName}</Typography>
					<Typography sx={{mt:1}}>На сайте с: {owner.registerDate}</Typography>
				</div>
			</Stack>
			<Stack direction={{xs:'column', md:'row'}} alignItems={{xs:'flex-start', md:'center'}} spacing={2} sx={{mb:2}}>
				<Stack direction={'row'} alignItems={'center'} spacing={1}>
					<Typography>20 отзывов</Typography>
					<Link href='#' passHref><a style={{ color: '#00A699'}}>на сервисе A</a></Link>
				</Stack>
				<Stack direction={'row'} alignItems={'center'} spacing={1}>
					<VerifiedUserIcon sx={{ color: '#00A699'}}/><div>Личность подтверждена</div>
				</Stack>
			</Stack>
			<div>{owner.description}</div>
		</>
	);
}
