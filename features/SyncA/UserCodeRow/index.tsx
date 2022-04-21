import React from "react";
import {useSelector} from "react-redux";

import {getCurrentUser} from "@store/auth/selectors";

import {Button, CircularProgress, Stack, Tooltip, Typography} from "@mui/material";


export default function UserCodeRow(){

	const currentUser = useSelector(getCurrentUser);
	const [open, setOpen] = React.useState(false);

	const checkID = currentUser ? currentUser.id.split('-')[0] : '';

	const copy = () => {
		navigator.clipboard.writeText(checkID);
		setOpen(true);
		setTimeout(setOpen.bind(null,false),2000)
	};

	return (
		<Stack direction="row" alignItems="center" sx={{mt:3}}>
			<Typography variant="body1" sx={{mr:7}}>Скопируйте данный код:</Typography>
			<Stack direction="row" alignItems="center">
				{ !currentUser
					? (
						<CircularProgress size={36} />
					)
					: (
						<>
							<Typography variant="body1" sx={{mr:3}}>{checkID}</Typography>
							<Tooltip PopperProps={{disablePortal:true}} open={open} title="Скопировано" placement="right" disableHoverListener>
								<Button variant="outlined" onClick={copy}>Скопировать</Button>
							</Tooltip>
						</>
					)
				}
			</Stack>
		</Stack>
	)
}