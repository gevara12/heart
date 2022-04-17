import React from "react";

import {Alert, Avatar, Box, Chip, Grid, Stack, TextField, Typography, useTheme} from "@mui/material";
import SyncApartCard from "@features/host/SyncApartCard";
import StarIcon from "@mui/icons-material/Star";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SyncAccountInfoRow from "../SyncAccountInfoRow";


export default function SyncAccountInfo({parsedInfo}:{
	parsedInfo:any,
}) {
	const { name, about, avatar, aparts } = parsedInfo;

	const { breakpoints } = useTheme();

	const isMobile = useMediaQuery( breakpoints.down('md') );

	return (
		<Box sx={{mt:10}}>
			<Grid container spacing={{xs:2, md:4}} sx={{}}>
				<SyncAccountInfoRow title={'Имя'}>
					<TextField variant='outlined' size='small' required value={name} onChange={() => {}} sx={{width:isMobile?'100%':264}}/>
				</SyncAccountInfoRow>
				<SyncAccountInfoRow title={'О себе'}>
					<TextField variant='outlined' size='small' required value={about} rows={8} multiline onChange={() => {}} sx={{width:isMobile?'100%':552}}/>
				</SyncAccountInfoRow>
				<SyncAccountInfoRow title={'Аватар'}>
					<Avatar src={avatar} sx={{ width: 148, height: 148 }} alt={name}/>
				</SyncAccountInfoRow>
				<SyncAccountInfoRow title={'Статус профиля'}>
					<Chip label="Суперхост" />
					<Alert severity="info" sx={{mt:{xs:2,md:4}}}>Топ-сервис на HeartApart</Alert>
				</SyncAccountInfoRow>
				<SyncAccountInfoRow title={'Объявления'}>
					<Grid container spacing={3}>
						{ aparts.map((apart,i)=>
							<Grid item xs={12} md={4} key={i}>
								<SyncApartCard apartment={apart}/>
							</Grid>
						)}
					</Grid>
					<Alert severity="info" sx={{mt:{xs:2,md:4}}}>После подтверждения переноса данных ваши объявления сохранятся как черновики в профиле на HeartApart.</Alert>
				</SyncAccountInfoRow>
				<SyncAccountInfoRow title={'Рейтинг'}>
					<Stack direction={'row'} alignItems={'center'} sx={{mb:2}}><StarIcon fontSize={'large'} sx={{color:'#FF5A5F', mr:0.5}}/><Typography variant="h5">64 отзыва</Typography></Stack>

					<Stack direction={'row'} spacing={4}>
						<Stack spacing={1}>
							<Typography variant="body1">Хозяин</Typography>
							<Typography variant="body1">Гость</Typography>
						</Stack>
						<Stack spacing={1}>
							<Stack direction={'row'} alignItems={'center'}><StarIcon fontSize={'small'} sx={{color:'#FF5A5F', mr:0.5}}/><Typography variant="body1">64 отзыва</Typography></Stack>
							<Stack direction={'row'} alignItems={'center'}><StarIcon fontSize={'small'} sx={{color:'#FF5A5F', mr:0.5}}/><Typography variant="body1">4 отзыва</Typography></Stack>
						</Stack>
					</Stack>
				</SyncAccountInfoRow>
			</Grid>
		</Box>
	)
}