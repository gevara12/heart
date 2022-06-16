import * as React from 'react';
import { Box } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import LuxuryIcon from '@components/LuxuryIcon';
import SuperHostIcon from '@components/SuperHostIcon';

import 'photoswipe/style.css';

type TPhoto = {
  src: string;
  width: number;
  height: number;
};

type TPhotoSliderProps = {
  photos: TPhoto[];
};

export default function PhotoSlider({ photos }: TPhotoSliderProps) {
  const SwiperOpts = {
    spaceBetween: 10,
    slidesPerView: 1,
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
    if (lightbox !== null) {
      lightbox.init();
    }
  }, [lightbox]);

  return (
    <Box sx={{ ml: { xs: -2, sm: -3 }, mr: { xs: -2, sm: -3 }, mb: 1.5 }}>
      <span style={{ position: 'absolute', display: 'flex', width: '100%', padding: '8px 12px', zIndex: 2 }}>
        <LuxuryIcon size={'small'} />
        <SuperHostIcon size={'small'} sx={{ ml: 1 }} />
      </span>
      <Swiper {...SwiperOpts}>
        {photos.map((photo, i) => {
          console.info(photo.imageUrl);
          return (
            <SwiperSlide style={{ height: '194px' }} key={i}>
              <div onClick={() => lightbox !== null && lightbox.loadAndOpen(i)} style={{ height: '100%' }}>
                <img src={photo.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
