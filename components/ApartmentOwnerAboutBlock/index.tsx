import * as React from "react";

import {Avatar, Grid, Stack, Typography} from "@mui/material";


export default function ApartmentOwnerAboutBlock(){
	return (
		<>
			<Grid container wrap="nowrap" spacing={2} sx={{mb:1}}>
				<Grid item>
					<Avatar>W</Avatar>
				</Grid>
				<Grid item xs>
					<Typography variant='h5' noWrap>Иван Иванов</Typography>
					<Typography noWrap>На сайте с: апрель 2022 г.</Typography>
				</Grid>
			</Grid>
			<Stack  direction={'row'} alignItems={'center'} spacing={2} sx={{mb:2}}>
				<div>12 reviews</div>
				<div>approved</div>
			</Stack>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum est exercitationem ipsum iure laudantium maiores nostrum odit perferendis quas quidem quod rem rerum sint totam, vel. Maxime minus nulla velit!</div>
		</>
	);
}
