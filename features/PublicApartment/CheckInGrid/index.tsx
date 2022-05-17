import React from "react";

import {Grid, Stack} from "@mui/material";

/*import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";*/
import AccessTimeIcon from "@mui/icons-material/AccessTime";


export default function CheckInGrid() {
	return (
		<Grid container spacing={{xs:1,md:2}}>
			<Grid item xs={12} md={5}>
				<Stack spacing={1}>
					<div style={{display:'flex'}}><AccessTimeIcon sx={{ mr:1 }}/>Прибытие с 12:00</div>
					<div style={{display:'flex'}}><AccessTimeIcon sx={{ mr:1 }}/>Выезд с 14:00</div>
				</Stack>
			</Grid>
			{/*<Grid item xs={12} md={5}>
				<Stack spacing={1}>
					<div style={{display:'flex'}}><HighlightOffRoundedIcon sx={{color:'red', mr:1}} />Без раннего заезда</div>
					<div style={{display:'flex'}}><CheckCircleOutlineIcon sx={{color:'green', mr:1}} />Поздний выезд</div>
				</Stack>
			</Grid>*/}
		</Grid>
	)
}