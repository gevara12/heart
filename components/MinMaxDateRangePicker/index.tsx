import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import { Box, TextField } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';

const getWeeksAfter = (date: Date | null, amount: number) =>
  date ? addWeeks(date, amount) : undefined;

type TDate = DateRange<Date>;

type TMinMaxDateRangePicker = {
  dates: TDate;
  setDates: () => void;
};
export const MinMaxDateRangePicker = ({
  dates,
  setDates,
}: TMinMaxDateRangePicker) => {
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
            <TextField {...startProps} sx={{ mr: 2 }} label='Заезд' />
            <TextField {...endProps} label='Выезд' />
          </>
        )}
      />
    </LocalizationProvider>
  );
};
