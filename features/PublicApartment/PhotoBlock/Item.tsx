import {Box, styled} from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.grey['200'],
	height:'184px',
	'& > div':{
		display:'block',
		height: '100%',
		width: '100%'
	},
	'& img':{
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	}
}));
export default Item;