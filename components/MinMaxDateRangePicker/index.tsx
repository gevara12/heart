import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import { InputAdornment } from '@mui/material';

import DateRangeIcon from '@mui/icons-material/DateRange';

const getWeeksAfter = (date: Date | null, amount: number) => (date ? addWeeks(date, amount) : undefined);

type TDate = DateRange<Date>;

type TMinMaxDateRangePicker = {
  dates: TDate;
  setDates: (newValue: TDate) => void;
};
export const MinMaxDateRangePicker = ({ dates, setDates }: TMinMaxDateRangePicker) => {
  const changeHandle = (newValue: TDate) => {
    setDates(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={dates}
        maxDate={getWeeksAfter(dates[0], 4)}
        onChange={changeHandle}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              {...startProps}
              sx={{ mr: 2 }}
              label="Заезд"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              {...endProps}
              label="Выезд"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};
