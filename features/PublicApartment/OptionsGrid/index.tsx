import React from "react";

import {Grid} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


export default function OptionsGrid({options}:any) {
	return (
		<Grid container spacing={{xs:1}}>
			{options.map((option,i)=>
				<Grid item xs={12} md={5} key={i}>
					<div style={{display:'flex'}}><CheckCircleOutlineIcon sx={{color:'green', mr:1}} />{option}</div>
				</Grid>
			)}
		</Grid>
	)
}