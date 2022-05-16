import * as React from "react";

import {Avatar, Box, Stack, Typography} from "@mui/material";
import Link from "next/link";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {grey} from "@mui/material/colors";

import Image from "next/image";
import SuperHostIcon from "@components/SuperHostIcon";


export default function OwnerAboutBlock(){
	const owner = {
		fullName: 'Иван Иванов',
		registerDate: 'апрель 2022 г.',
		isApproved: true,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum est exercitationem ipsum iure laudantium maiores nostrum odit perferendis quas quidem quod rem rerum sint totam, vel. Maxime minus nulla velit!',
	};
	return (
		<>
			<Stack direction={{xs:'row-reverse', md:'row'}} spacing={2} sx={{mb:1}}>
				<Box sx={{ position:'relative' }}>
					<Avatar sx={{ bgcolor: grey[100], width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 }, position:'relative' }}>
						<Image src={"https://i1.sndcdn.com/avatars-000211446087-hahqw0-t500x500.jpg"} alt="avatar" layout="fill" unoptimized />
					</Avatar>
					<SuperHostIcon size={'small'} sx={{ position:'absolute', bottom:'0', right:'0' }}/>
				</Box>
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
