import {Box, styled} from "@mui/material";

const Grid = styled(Box)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(12, 1fr)",
	gridTemplateRows: "repeat(2, 1fr)",
	gap: theme.spacing(4),
	alignItems: "stretch",
}));
export default Grid;