import * as React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

type TMapBlockProps = { address: any };

export const MapBlock = ({ address }: TMapBlockProps): React.ReactElement => {
  const { latitude, longitude } = address;
  return (
    <YMaps>
      <div>
        <Map width="100%" height={360} defaultState={{ center: [latitude, longitude], zoom: 16 }}>
          <Placemark geometry={[latitude, longitude]} />
        </Map>
      </div>
    </YMaps>
  );
};
