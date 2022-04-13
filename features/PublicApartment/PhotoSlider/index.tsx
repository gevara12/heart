import * as React from "react";
import {Box} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'photoswipe/style.css';


interface PhotoSliderProps  {
	photos: Array<any>
}

export default function PhotoSlider({photos}:PhotoSliderProps){
	const SwiperOpts = {
		spaceBetween:10,
		slidesPerView:1,
	};

	// TODO: common lightbox wrapper
	const [lightbox, setLightbox] = React.useState(null);

	React.useEffect(() => {
		setLightbox(new PhotoSwipeLightbox({ dataSource: [...photos], pswpModule: PhotoSwipe }));

		return () => {
			if (lightbox !== null) {
				lightbox.destroy();
				setLightbox(null);
			}
		};
	}, []);
	React.useEffect(() => {
		if (lightbox !== null){
			lightbox.init();
		}
	},[lightbox]);

	return (
		<Box sx={{ ml:{xs:-2, sm:-3}, mr:{xs:-2, sm:-3}, mb:1.5 }}>
			<Swiper {...SwiperOpts}>
				{ photos.map((photo, i) =>
					<SwiperSlide style={{ height:'194px' }} key={i}>
						<div onClick={ ()=>((lightbox !==null) && lightbox.loadAndOpen(i)) } style={{ height:'100%' }}>
							<img src={photo.src} alt="" style={{ width: '100%', height:'100%', objectFit:'cover' }} />
						</div>
					</SwiperSlide>
				)}
			</Swiper>

		</Box>
	);
}