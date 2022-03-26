import * as React from 'react';
import debounce from 'lodash/debounce';
import { Button, FormControl, TextField } from '@mui/material';

export const MapsGeocode = (): React.ReactElement => {
  const [value, setValue] = React.useState<string>('');
  const [dbValue, saveToDb] = React.useState<string>('');

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

  // const API_KEY = 'eb50643f-5042-4adb-bf03-add61c041354';
  const API_KEY = 'runsuj6833';
  const fetchUrl = `https://catalog.api.2gis.com/3.0/items/geocode?q=Moscow, Sadovnicheskaya, 25&fields=items.point&key=${API_KEY}`;

  const getCoordinates = async () => {
    try {
      const response = await fetch(fetchUrl, {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      });
      const result = await response.json();

      console.info(response, result);
      return result;
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  };

  return (
    <div>
      <FormControl>
        <TextField
          size='small'
          label='Введите адрес'
          value={value}
          onChange={handleChange}
        />
      </FormControl>

      <div>
        {value}
        <br />
        {dbValue}
      </div>
      <div>
        <Button variant='contained' onClick={getCoordinates}>
          Указать местоположение
        </Button>
      </div>
    </div>
  );
};
