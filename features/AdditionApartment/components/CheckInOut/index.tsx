import * as React from 'react';
import { useDispatch } from 'react-redux';

import { FormControl, Stack, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';
import { FORM_VALUE } from '@store/constants';
import { addZeroBefore } from '@utils/helpers';

import styles from './CheckInOut.module.css';

const formatTime = (value: Date) => {
  return `${addZeroBefore(value.getHours())}:${addZeroBefore(value.getMinutes())}`;
};

export const CheckInOut = () => {
  const dispatch = useDispatch();
  const [checkIn, setCheckIn] = React.useState<Date | null>(new Date('2022-08-18T14:00:00'));
  const [checkOut, setCheckOut] = React.useState<Date | null>(new Date('2022-08-18T12:00:00'));

  const checkInHandler = React.useCallback(
    (newValue) => {
      setCheckIn(newValue);
    },
    [checkIn],
  );

  const checkOutHandler = React.useCallback(
    (newValue) => {
      setCheckOut(newValue);
    },
    [checkOut],
  );

  React.useEffect(() => {
    dispatch({
      type: FORM_VALUE,
      name: 'checkInTime',
      fieldValue: formatTime(checkIn),
    });
    dispatch({
      type: FORM_VALUE,
      name: 'checkOutTime',
      fieldValue: formatTime(checkOut),
    });
  }, [dispatch, checkIn, checkOut]);

  return (
    <div className={styles.host}>
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
