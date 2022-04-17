import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';
import { FormControl, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FORM_VALUE } from '@store/constants';
import { addZeroBefore } from '@utils/helpers';

export const CheckInOut = () => {
  const dispatch = useDispatch();
  const [checkIn, setCheckIn] = React.useState<Date | null>(new Date('2022-08-18T14:00:00'));
  const [checkOut, setCheckOut] = React.useState<Date | null>(new Date('2022-08-18T12:00:00'));

  const checkInHandler = React.useCallback(
    (newValue) => {
      setCheckIn(newValue);
      let time = `${addZeroBefore(newValue.getHours())}:${addZeroBefore(newValue.getMinutes())}`;
      dispatch({
        type: FORM_VALUE,
        name: 'checkInTime',
        fieldValue: time,
      });
    },
    [checkIn, setCheckIn],
  );

  const checkOutHandler = React.useCallback(
    (newValue) => {
      setCheckOut(newValue);
      let time = `${addZeroBefore(newValue.getHours())}:${addZeroBefore(newValue.getMinutes())}`;
      dispatch({
        type: FORM_VALUE,
        name: 'checkOutTime',
        fieldValue: time,
      });
    },
    [checkIn, setCheckIn],
  );

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <Stack spacing={2} direction="row">
          <FormControl>
            <TimePicker
              label="Заселение после"
              value={checkIn}
              onChange={checkInHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>

          <FormControl>
            <TimePicker
              label="Выезд до"
              value={checkOut}
              onChange={checkOutHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
