import React from "react";

import {IconButton, Tooltip} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


export default function RatingTooltip() {
	return (
		<Tooltip title="some explanation">
			<IconButton>
				<HelpOutlineIcon fontSize="small" />
			</IconButton>
		</Tooltip>
	)
}