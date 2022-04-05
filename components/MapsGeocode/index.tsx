import * as React from 'react';

import MapGL, { Marker } from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';

import Geocoder from 'react-map-gl-geocoder';

function MapsGeocode(): React.ReactElement {
  const [viewport, setViewport] = React.useState({
    latitude: 59.9311,
    longitude: 30.3609,
    zoom: 10,
  });

  const mapRef = React.useRef();

  const handleViewportChange = React.useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = React.useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  // const onResult = (param) => {
  //   console.info('param', param);
  // };

  // const localGeocoder = (query) => {
  //   console.info('query', query);
  // };

  const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZ2V2YXJhMTIiLCJhIjoiY2wxZjUzbnE2MDB2ZTNwdDlkb2xoYWZ5aCJ9.5pmbL-fy9fjHSJzW_OMjXw';

  React.useEffect(() => {
    console.info(viewport);
  }, [viewport]);

  return (
    <div>
      <div style={{ height: 'calc(100vh - 400px)' }}>
        <MapGL
          ref={mapRef}
          {...viewport}
          width='100%'
          height='100%'
          mapStyle='mapbox://styles/gevara12/cl1g9baz6000c15pk8wik4xc8'
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={handleViewportChange}
        >
          <Geocoder
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position='top-right'
            language='ru-RU'
            countries='ru'
          />
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            anchor='bottom'
          >
            <PlaceIcon color='secondary' />
          </Marker>
        </MapGL>
      </div>
    </div>
  );
}

export default MapsGeocode;
