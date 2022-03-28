import * as React from 'react';

import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { DateRange } from '@mui/lab';

import { MinMaxDateRangePicker } from '@components/MinMaxDateRangePicker';
import { GuestPopover } from '@components/GuestPopover';

import data from './russian-cities.json';

export const Search = (): React.ReactElement => {
  const [dates, setDates] = React.useState<DateRange<Date>>([null, null]);

  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing={2}
      sx={{
        bgcolor: 'background.default',
        mt: 8,
        p: 2,
        borderRadius: '5px',
        // justifyContent: 'center',
      }}
    >
      <Autocomplete
        disablePortal
        id='select-area'
        options={data}
        getOptionLabel={(option) => option.name}
        selectOnFocus
        // sx={{ flexGrow: 2 }}
        style={{flex: '1 0 auto'}}
        renderInput={(params) => <TextField {...params} sx={{flex: '1 0 auto'}} label='Локация' />}
      />

      <MinMaxDateRangePicker dates={dates} setDates={setDates}  />

      <GuestPopover />

      <div>
        <Button size='large' variant='contained' sx={{ minHeight: '56px', width:'100%',flex: '1 0 auto' }}>
          Найти жилье
        </Button>
      </div>
    </Stack>
  );
};
