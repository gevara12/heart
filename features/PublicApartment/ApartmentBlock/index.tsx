import * as React from "react";
import { Typography } from '@mui/material';


interface ApartmentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	children: React.ReactNode
}
export default function ApartmentBlock({title, children, ...rest}:ApartmentBlockProps) {
	return (
		<div>
			<Typography variant='h5' component='div' sx={{mb:4}} {...rest}>{title}</Typography>
			{children}
		</div>
	);
}
