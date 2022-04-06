import { Box } from "@mui/material";
import * as React from "react";


export default function PhotoSlider(){
	return (
		<Box sx={{ ml:{xs:-2, sm:-3}, mr:{xs:-2, sm:-3} }}>
			<img src={'https://cdn.pixabay.com/photo/2017/02/14/10/46/cat-2065595_1280.jpg'} alt=""
			     loading="lazy" style={{height: '100%', width: '100%', objectFit: 'cover'}} />
		</Box>
	);
}