import * as React from 'react';

// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'photoswipe/style.css';

import PhotoBlockGrid from './Grid';
import BigItem from './BigItem';
import Item from './Item';


interface ApartmentPhotoBlockProps {
  photos: Array<any>;
}

export default function PhotoBlock({ photos }: ApartmentPhotoBlockProps) {
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

  const slicedPhotos = [...photos].slice(0, 5);

  return (
    <PhotoBlockGrid sx={{ mb: 3 }}>
      {slicedPhotos.map(({ src, height, width }, i) =>
        (i === 0
            ? <BigItem gridColumn='span 6' gridRow='1/3' key={i}>
              <div onClick={() => ((lightbox !== null) && lightbox.loadAndOpen(i))}>
                <img src={src} height={height} width={width} alt='' />
              </div>
            </BigItem>
            : <Item gridColumn='span 3' gridRow={i % 2 !== 0 ? 1 : 2} key={i}>
              <div onClick={() => ((lightbox !== null) && lightbox.loadAndOpen(i))}>
                <img src={src} height={height} width={width} alt='' />
              </div>
            </Item>
        ),
      )}
    </PhotoBlockGrid>
  );
}
