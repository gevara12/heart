import * as React from "react";

import {Avatar, Box, Stack, Typography} from "@mui/material";
import Link from "next/link";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {grey} from "@mui/material/colors";

import Image from "next/image";
import SuperHostIcon from "@components/SuperHostIcon";


export default function OwnerAboutBlock({owner}:any){
	return (
		<>
			<Stack direction={{xs:'row-reverse', md:'row'}} spacing={2} sx={{mb:1}}>
				<Box sx={{ position:'relative' }}>
					<Avatar sx={{ bgcolor: grey[300], width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 }, position:'relative' }}>
						{owner?.avatar && <Image src={owner.avatar} alt="avatar" layout="fill" unoptimized />}
					</Avatar>
					{owner?.abbIsSuperHost && <SuperHostIcon size={'small'} sx={{ position:'absolute', bottom:'0', right:'0' }}/>}
				</Box>
				<div style={{flex:'1 1 auto'}}>
					<Typography variant='h5'>{owner.name}</Typography>
					<Typography sx={{mt:1}}>На сайте с: {owner.dateOfRegistration}</Typography>
				</div>
			</Stack>
			{owner?.refAbb && (
				<Stack direction={{xs:'column', md:'row'}} alignItems={{xs:'flex-start', md:'center'}} spacing={2} sx={{mb:2}}>
					<Stack direction={'row'} alignItems={'center'} spacing={1}>
						<Typography>{owner?.abbReviews} отзывов</Typography>
						<Typography sx={{ color: 'primary.main'}}>
						<Link href={owner?.refAbb+'#user-profile-review-tabs'} passHref>
                            <a target="_blank" style={{color: 'inherit'}} rel="noopener noreferrer">на сервисе A</a>
						</Link>
						</Typography>
					</Stack>
					{owner?.refAbbVerified && (
						<Stack direction={'row'} alignItems={'center'} spacing={0.5}>
							<VerifiedUserIcon sx={{ color: 'primary.main'}}/><div>Личность подтверждена</div>
						</Stack>
					)}
				</Stack>
			)}
			<div>{owner?.description}</div>
		</>
	);
}
