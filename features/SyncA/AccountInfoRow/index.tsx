import React from "react";
import {Grid, Typography} from "@mui/material";


export default function AccountInfoRow({ title, children}:{
	title:string
	children?:React.ReactNode
}){
	return (
		<>
			<Grid item xs={12} md={3}>
				<Typography variant="h6">{title}</Typography>
			</Grid>
			<Grid item xs={12} md={9}>
				{children}
			</Grid>
		</>
	)
}