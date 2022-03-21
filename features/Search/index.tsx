import * as React from 'react';

import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { DateRange } from '@mui/lab';

import { MinMaxDateRangePicker } from '@components/MinMaxDateRangePicker';

import data from './russian-cities.json';

export const Search = (): React.ReactElement => {
  const [dates, setDates] = React.useState<DateRange<Date>>([null, null]);

  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        bgcolor: 'background.default',
        p: '8px',
        borderRadius: '5px',
      }}
    >
      <Autocomplete
        disablePortal
        id='select-area'
        options={data}
        getOptionLabel={(option) => option.name}
        selectOnFocus
        sx={{ width: 240 }}
        renderInput={(params) => <TextField {...params} label='Локация' />}
      />

      <MinMaxDateRangePicker dates={dates} setDates={setDates} />

      <div>
        <Button size='large' variant='contained'>
          Найти жилье
        </Button>
      </div>
    </Stack>
  );
};
