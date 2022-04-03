import * as React from "react";
import Link from "next/link";

import {Avatar, Grid, Stack, Typography} from "@mui/material";
import Bull from "@components/Bull";


export default function ApartmentAboutBlock(){
	return (
		<Grid container wrap="nowrap" spacing={2} sx={{mb:1}}>
			<Grid item xs>
				<Typography variant='h6' component='div' sx={{mb:1}}>Жилье целиком в многоэтажном доме</Typography>
				<Stack direction={ 'row' } alignItems={'center'} spacing={1}>
					<Typography>до 2х гостей</Typography>
					<Bull/>
					<Typography>1 спальня</Typography>
					<Bull/>
					<Typography>1 кровать</Typography>
				</Stack>
				<Stack direction={{ xs: 'column', md:'row' }} alignItems={{xs:'start',md:'center'}} spacing={1} sx={{mt:2}}>
					<Stack direction={'row'} alignItems={'center'} spacing={1}>
						<Typography>20 отзывов</Typography>
						<Link href='#' passHref><a style={{ color: '#00A699'}}>на сервисе A</a></Link>
					</Stack>
					<Bull/>
					<Stack direction={'row'} alignItems={'center'} spacing={1}>
						<Typography>20 отзывов</Typography>
						<Link href='#' passHref><a style={{ color: '#00A699'}}>на сервисе B</a></Link>
					</Stack>
				</Stack>
			</Grid>
			<Grid item>
				<Avatar alt="Remy Sharp" src="https://i1.sndcdn.com/avatars-000211446087-hahqw0-t500x500.jpg" sx={{ width:{xs:40,md:70}, height:{xs:40,md:70} }} />
			</Grid>
		</Grid>
	);
}
