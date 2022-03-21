import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { DateRange } from '@mui/lab';

import { MinMaxDateRangePicker } from '@components/MinMaxDateRangePicker';

import data from './russian-cities.json';

export const Search = (): React.ReactElement => {
  const [dates, setDates] = React.useState<DateRange<Date>>([null, null]);

  const isMobile = useMediaQuery({ query: '(max-width: 660px)' });

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={2}
      sx={{
        bgcolor: 'background.default',
        mt: 8,
        p: '8px',
        borderRadius: '5px',
        justifyContent: 'center',
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
