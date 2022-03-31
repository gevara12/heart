import * as React from 'react';
import debounce from 'lodash/debounce';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Autocomplete, FormControl, TextField } from '@mui/material';

// const position = [51.505, -0.09];

export const MapsGeocode = (): React.ReactElement => {
  const [value, setValue] = React.useState<string>('');
  const [dbValue, saveToDb] = React.useState<string>('');
  const [result, setResult] = React.useState<[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = React.useCallback(
    debounce((nextValue) => saveToDb(nextValue), 800),
    []
  );

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);

    debouncedSave(nextValue);
  };

  // const token = 'SY9Gz6fHAEtGBn4Fa6HiyGQSQfrn9FRB';
  // const fetchUrl = `https://kladr-api.ru/api.php?query=${decodeURI(
  //   dbValue
  // )}&contentType=city&withParent=1&limit=3`;

  const fetchUrl = `https://nominatim.openstreetmap.org/search/?q=Красносельское, ${decodeURI(
    dbValue
  )}&accept-language=ru-RU&countrycodes=RU&format=json&addressdetails=1&limit=5`;

  const getCoordinates = async () => {
    try {
      const response = await fetch(fetchUrl, {
        method: 'GET',
      });
      const result = await response.json();
      console.info('result', result);
      return result;
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  };

  React.useEffect(() => {
    getCoordinates().then((r) => setResult(r));
  }, [dbValue]);

  // console.info(result);
  return (
    <div>
      {result && (
        <FormControl>
          <Autocomplete
            disablePortal
            id='select-area'
            sx={{ minWidth: '300px' }}
            size='small'
            options={result}
            getOptionLabel={(option) => option?.display_name}
            selectOnFocus
            renderInput={(params) => (
              <TextField
                {...params}
                label='Адрес'
                value={value}
                onChange={handleChange}
              />
            )}
          />
        </FormControl>
      )}
    </div>
  );
};
