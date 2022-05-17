import {styled} from "@mui/material";
import Item from "./Item";

const BigItem = styled(Item)(({}) => ({
	height:"400px",
	position: 'relative',
}));
export default BigItem;