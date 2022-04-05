import * as React from "react";

import { Box } from "@mui/material";


export default function Bull(){
	return (
		<Box component="span" sx={{ display: 'inline-block', transform: 'scale(0.8)'}}>•</Box>
	);
}
