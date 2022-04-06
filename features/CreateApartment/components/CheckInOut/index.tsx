import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';

export const CheckInOut = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <div>
      <span>CheckInOut</span>
      {value && value.getHours()}
      {value && value.getMinutes()}

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <TimePicker
          label='Basic example'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
