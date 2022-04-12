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
  const [checkInValue, setCheckInValue] = React.useState<Date | null>(new Date('2022-08-18T14:00:00'));
  const [checkOutValue, setCheckOutValue] = React.useState<Date | null>(new Date('2022-08-18T12:00:00'));

  const checkInHandler = React.useCallback(
    (newValue) => {
      setCheckInValue(newValue);
      let time = `${addZeroBefore(newValue.getHours())}:${addZeroBefore(newValue.getMinutes())}`;
      dispatch({
        type: FORM_VALUE,
        name: 'checkInTime',
        fieldValue: time,
      });
    },
    [checkInValue, setCheckInValue],
  );

  const checkOutHandler = React.useCallback(
    (newValue) => {
      setCheckOutValue(newValue);
      let time = `${addZeroBefore(newValue.getHours())}:${addZeroBefore(newValue.getMinutes())}`;
      dispatch({
        type: FORM_VALUE,
        name: 'checkOutTime',
        fieldValue: time,
      });
    },
    [checkInValue, setCheckInValue],
  );

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <Stack spacing={2} direction="row">
          <FormControl>
            <TimePicker
              label="Заселение после"
              value={checkInValue}
              onChange={checkInHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>

          <FormControl>
            <TimePicker
              label="Выезд до"
              value={checkOutValue}
              onChange={checkOutHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
