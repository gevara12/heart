import * as React from "react";
import { Typography } from '@mui/material';


interface ApartmentBlockProps  {
	title: string
	children: React.ReactNode
}
export default function ApartmentBlock({title, children}:ApartmentBlockProps) {
	return (
		<div>
			<Typography variant='h5' component='div' sx={{mb:4}}>{title}</Typography>
			{children}
		</div>
	);
}
