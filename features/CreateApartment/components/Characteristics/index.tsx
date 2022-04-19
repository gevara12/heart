import * as React from 'react';
import styles from '@features/CreateApartment/components/Hang/Hang.module.css';
import { Button, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { FORM_GROUP_VALUE, INCREASE } from '@store/constants';
import { useDispatch } from 'react-redux';
import { NextButton } from '@features/CreateApartment/components/NextButton';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type TState = {
  guest: number;
  bed: number;
  floor: number;
  square: number;
};
export const Characteristics = (): React.ReactElement => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState<TState>({
    guest: 0,
    bed: 0,
    floor: 0,
    square: 4,
  });

  const handleChange = React.useCallback(
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FORM_GROUP_VALUE,
        groupName: 'characteristics',
        name: [prop],
        fieldValue: Number(event.target.value),
      });
      setValues({ ...values, [prop]: Number(event.target.value) });
    },
    [dispatch, values],
  );

  const incHandleChange = (prop: keyof TState) => {
    dispatch({
      type: FORM_GROUP_VALUE,
      groupName: 'characteristics',
      name: [prop],
      fieldValue: Number(values[prop]) + 1,
    });
    setValues({ ...values, [prop]: Number(values[prop]) + 1 });
  };

  const decHandleChange = (prop: keyof TState) => {
    dispatch({
      type: FORM_GROUP_VALUE,
      groupName: 'characteristics',
      name: [prop],
      fieldValue: values[prop] > 0 ? Number(values[prop]) - 1 : 0,
    });
    setValues({ ...values, [prop]: values[prop] > 0 ? Number(values[prop]) - 1 : 0 });
  };

  const handleNext = () => {
    dispatch({ type: INCREASE });
  };

  return (
    <>
      <Typography variant="h4" className={styles.title}>
        Укажите характеристики
      </Typography>

      <Stack spacing={4}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent="space-between"
        >
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Сколько гостей вы готовы принять?
          </Typography>

          <div>
            <Button size="large" onClick={() => decHandleChange('guest')} variant="outlined">
              <RemoveIcon />
            </Button>
            <TextField
              size="small"
              variant="outlined"
              value={values.guest}
              onChange={handleChange('guest')}
              sx={{ mx: 2, width: '100px' }}
              inputProps={{
                step: 1,
                min: 0,
                max: 20,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button size="large" variant="outlined" onClick={() => incHandleChange('guest')}>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent="space-between"
        >
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Количество кроватей
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('bed')} size="large" variant="outlined">
              <RemoveIcon />
            </Button>
            <TextField
              size="small"
              variant="outlined"
              value={values.bed}
              onChange={handleChange('bed')}
              sx={{ mx: 2, width: '100px' }}
              inputProps={{
                step: 1,
                min: 0,
                max: 8,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button onClick={() => incHandleChange('bed')} size="large" variant="outlined">
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent="space-between"
        >
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Этаж
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('floor')} size="large" variant="outlined">
              <RemoveIcon />
            </Button>
            <TextField
              size="small"
              variant="outlined"
              value={values.floor}
              onChange={handleChange('floor')}
              sx={{ mx: 2, width: '100px' }}
              inputProps={{
                step: 1,
                min: 0,
                max: 40,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button onClick={() => incHandleChange('floor')} size="large" variant="outlined">
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent="space-between"
        >
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Общая площадь жилья
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('square')} size="large" variant="outlined">
              <RemoveIcon />
            </Button>
            <OutlinedInput
              size="small"
              value={values.square}
              onChange={handleChange('square')}
              sx={{ mx: 2, width: '100px' }}
              endAdornment={<InputAdornment position="end">㎡</InputAdornment>}
              inputProps={{
                step: 1,
                min: 0,
                max: 2000,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button onClick={() => incHandleChange('square')} size="large" variant="outlined">
              <AddIcon />
            </Button>
          </div>
        </Stack>
      </Stack>

      <NextButton onClick={handleNext} />
    </>
  );
};
