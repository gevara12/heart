import React, {useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

import {Box, Button, Stack, styled, Typography} from '@mui/material';

import {SYNC_DECREASE_STEP} from "@store/constants";

import {getParsedData} from "@store/syncA/selectors";
import {saveDataFromA} from "@store/syncA/actions";

import AccountInfo from "@features/SyncA/AccountInfo";
import SupportDialog from "@features/SyncA/SupportDialog/SupportDialog";
import {LoadingButton} from "@mui/lab";


const LinkPrimary = styled('a')(({ theme }) => ({
	color: theme.palette.primary.main,
}));

export default function MoveDataStep() {
	const router = useRouter();
	const dispatch = useDispatch();

	const parsedData = useSelector(getParsedData);

	const [loading, setLoading] = useState<boolean>(false);
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
		setLoading(true)
		try {
			// await new Promise(resolve => setTimeout(resolve, 2000));
			await dispatch(saveDataFromA(parsedData));
			await router.push('/profile');
			setLoading(false)
		} catch (e) {
			console.error(e);
			setLoading(false)
		}
	};

	return (parsedData
		? (
			<>
				<Typography variant="h4" sx={{mt:10.5}}>Перенос данных профиля</Typography>
				<Typography variant="body1" sx={{mt:4, maxWidth:'830px'}}><b>Мы нашли ваш профиль в открытых источниках на сервисе А и можем перенести следующие данные.</b></Typography>

	      <AccountInfo parsedInfo={parsedData} sx={{mt:6.5,overflow:'hidden'}}/>

	      <Typography variant="body1" sx={{ mt:6.5, maxWidth:'648px' }}>Если данная информация корректна и относится к вашему профилю, нажмите “Перенести данные”</Typography>

	      <Box sx={{ overflow:'hidden', mt:4, mb:17 }}>
	        <Stack direction="row" justifyContent="space-between" alignItems="center">
		        <Stack direction="row" spacing={2} alignItems="center">
			        <Button variant="outlined" onClick={stepDown} sx={{ width: '168px'}}>Назад</Button>
			        <LoadingButton variant="contained" type="submit" color="primary" loading={loading} disabled={loading} sx={{ width:'205px', whiteSpace:'nowrap' }} onClick={moveData}>Перенести данные</LoadingButton>
		        </Stack>
		        <LinkPrimary href="#" onClick={handleClickOpen}>Помощь</LinkPrimary>
	        </Stack>
	      </Box>

				<SupportDialog handleClose={handleClose} open={openDialog}/>
	    </>
		) : (
			<>
				<Box sx={{mt:10.5}}>no data</Box>
				<Button variant="contained" onClick={stepDown} sx={{ mt:4, mb:17 }}>Назад</Button>
			</>
		)
	);
}
