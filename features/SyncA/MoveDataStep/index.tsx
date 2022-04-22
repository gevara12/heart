import React from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

import {Box, Button, Stack, styled, Typography} from '@mui/material';

import {SYNC_DECREASE_STEP} from "@store/constants";

import {getParsedData} from "@store/syncA/selectors";
import {saveDataFromA} from "@store/syncA/actions";

import AccountInfo from "@features/SyncA/AccountInfo";
import SupportDialog from "@features/SyncA/SupportDialog/SupportDialog";


const LinkPrimary = styled('a')(({ theme }) => ({
	color: theme.palette.primary.main,
}));

export default function MoveDataStep() {
	const router = useRouter();
	const dispatch = useDispatch();

	const parsedData = useSelector(getParsedData);
	const [openDialog, setOpenDialog] = React.useState(false);

	const handleClickOpen = (e) => {
		e.preventDefault();
		setOpenDialog(true);
	};
	const handleClose = () => {
		setOpenDialog(false);
	};
	const stepDown = ()=>{
		dispatch({ type: SYNC_DECREASE_STEP });
	};

	const moveData = async ()=>{
		try {
			// await new Promise(resolve => setTimeout(resolve, 2000));
			await dispatch(saveDataFromA(parsedData));
			await router.push('/profile')
		} catch (e) {
			console.error(e);
		}
	};

	return (parsedData
		? (
			<>
				<Typography variant="h4" sx={{mt:11}}>Перенос данных профиля</Typography>
				<Typography variant="body1" sx={{mt:4}}><b>Мы нашли ваш профиль в открытых источниках на сервисе А и можем перенести следующие данные.</b></Typography>

	      <AccountInfo parsedInfo={parsedData} sx={{mt:10}}/>

	      <Typography variant="body1" sx={{ mt:8 }}>Если данная информация корректна и относится к вашему профилю, нажмите “Подтвердить”</Typography>

	      <Box sx={{ overflow:'hidden', mt:4 }}>
	        <Stack direction="row" justifyContent="space-between" alignItems="center">
		        <Stack direction="row" spacing={2} alignItems="center">
			        <Button variant="outlined" onClick={stepDown} sx={{ width: '168px'}}>Назад</Button>
		          <Button type="submit" variant="contained" color="primary" sx={{ width:'205px', whiteSpace:'nowrap' }} onClick={moveData}>Перенести данные</Button>
		        </Stack>
		        <LinkPrimary href="#" onClick={handleClickOpen}>Помощь</LinkPrimary>
	        </Stack>
	      </Box>

				<SupportDialog handleClose={handleClose} open={openDialog}/>
	    </>
		) : (
			<>
				<div>no data</div>
				<Button variant="contained" onClick={stepDown}>Назад</Button>
			</>
		)
	);
}
