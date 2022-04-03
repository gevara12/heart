import * as React from "react";
import {Box, Paper, styled} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height:'184px'
}));
const BigItem = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height:"400px",
}));

interface ApartmentPhotoBlockProps  {
	photos: Array<string>
}
export default function ApartmentPhotoBlock({photos}:ApartmentPhotoBlockProps) {
	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap={4} alignItems="stretch" sx={{ mb:3 }}>
			{ photos.map((photo,i)=>
				(i === 0
					? <Box gridColumn="span 8" gridRow="1/3" key={i}>
							<BigItem>
								<img src={photo} alt="" loading="lazy" style={{height: '100%', width: '100%', objectFit: 'cover'}} />
						</BigItem>
					</Box>
					: <Box gridColumn="span 4" gridRow={i} key={i}>
							<Item>
								<img src={photo} alt="" loading="lazy" style={{height: '100%', width: '100%', objectFit: 'cover'}} />
							</Item>
						</Box>
				)
			)}
		</Box>
	);
}