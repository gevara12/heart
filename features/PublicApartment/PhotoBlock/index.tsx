import * as React from "react";
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import {Box, styled} from "@mui/material";

import 'photoswipe/style.css';


const Item = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.grey['200'],
	height:'184px',
	'& div':{
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
const BigItem = styled(Item)(({}) => ({
	height:"400px",
}));

interface ApartmentPhotoBlockProps  {
	photos: Array<any>
}
export default function PhotoBlock({photos}:ApartmentPhotoBlockProps) {

	let lightbox;

	React.useEffect(() => {
		lightbox = new PhotoSwipeLightbox({ dataSource: [...photos], pswpModule: PhotoSwipe });
		lightbox.init();

		return () => {
			lightbox.destroy();
			lightbox = null;
		};
	}, []);

	const slicedPhotos = [...photos].slice(0,5);

	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap={4} alignItems="stretch" sx={{ mb:3 }}>
			{ slicedPhotos.map(( image, i) =>
				(i === 0
					? <BigItem gridColumn="span 6" gridRow="1/3" key={i}>
							<div onClick={()=>lightbox.loadAndOpen(i)}>
								<img src={image.src} height={image.height} width={image.width} alt=""/>
							</div>
						</BigItem>
					: <Item gridColumn="span 3" gridRow={i%2!==0 ? 1 : 2} key={i}>
							<div onClick={()=>lightbox.loadAndOpen(i)}>
									<img src={image.src} height={image.height} width={image.width} alt="" />
							</div>
						</Item>
				)
			)}
		</Box>
	);
}