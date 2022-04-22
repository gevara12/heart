import React from "react";
import { useSelector} from "react-redux";

import { Button, TextField, Typography} from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {getCurrentUser} from "@store/auth/selectors";


export default function SupportDialog({ handleClose, open }:{
	handleClose:() => void;
	open:boolean;
}) {

	const currentUser = useSelector(getCurrentUser);
	const handleSubmit = ()=>{
		console.info('handleSubmit');
	};

	return (
		<Dialog onClose={handleClose} aria-labelledby="SupportDialogTitle" open={open} fullWidth >
			<DialogTitle sx={{ m: 0, p: 2 }} id="SupportDialogTitle">Обращение в поддержку
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
					>
						<CloseIcon />
					</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<TextField autoFocus margin="dense" label="Ваш e-mail" type="email" fullWidth variant="outlined" autoComplete="off" value={currentUser.email} />
				<Typography sx={{mt:2, mb:0.5}}>Опишите вашу проблему</Typography>
				<TextField multiline rows={5} margin="dense" type="text" fullWidth variant="outlined" />
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleSubmit}>Отправить</Button>
			</DialogActions>
		</Dialog>
	);
}
