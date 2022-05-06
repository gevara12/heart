import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { FORM_GROUP_VALUE } from '@store/constants';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';

import styles from '@features/CreateApartment/components/Hang/Hang.module.css';
import { getFormValues } from '@store/newApartForm/selectors';
import type { TCharacteristic } from '@utils/types';

export default function Characteristics(): React.ReactElement {
  const dispatch = useDispatch();
  const { characteristics } = useSelector(getFormValues);

  const [values, setValues] = React.useState<TCharacteristic>({
    guest: { value: 2 },
    bed: { value: 1 },
    bathrooms: { value: 1 },
    rooms: { value: 1 },
    floor: { value: 1 },
    square: { value: 10 },
  });

  const handleChange = React.useCallback(
    (prop: keyof TCharacteristic) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FORM_GROUP_VALUE,
        groupName: 'characteristics',
        name: [prop],
        fieldValue: Number(event.target.value),
      });
      setValues({ ...values, [prop]: {value: Number(event.target.value)} });
    },
    [dispatch, values],
  );

  const incHandleChange = (prop: keyof TCharacteristic) => {
    dispatch({
      type: FORM_GROUP_VALUE,
      groupName: 'characteristics',
      name: [prop],
      fieldValue: Number(values[prop].value) + 1,
    });
    setValues({ ...values, [prop]: { value: Number(values[prop].value) + 1 } });
  };

  const decHandleChange = (prop: keyof TCharacteristic) => {
    dispatch({
      type: FORM_GROUP_VALUE,
      groupName: 'characteristics',
      name: [prop],
      fieldValue: values[prop].value > 0 ? Number(values[prop].value) - 1 : 0,
    });
    setValues({
      ...values, [prop]: values[prop].value > 0 ? {
        value: Number(values[prop].value) - 1,
      } : { value: 0 },
    });
  };

  React.useEffect(() => {
    setValues({ ...values, ...characteristics });
  }, []);

  return (
    <div>
      <Typography variant='h4' className={styles.title}>
        Укажите характеристики
      </Typography>

      <Stack spacing={4} sx={{ mb: 4 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Сколько гостей вы готовы принять?
          </Typography>

          <div>
            <Button size='large' onClick={() => decHandleChange('guest')} variant='outlined'>
              <RemoveIcon />
            </Button>
            <TextField
              size='small'
              variant='outlined'
              value={values.guest.value}
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
            <Button size='large' variant='outlined' onClick={() => incHandleChange('guest')}>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Количество кроватей
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('bed')} size='large' variant='outlined'>
              <RemoveIcon />
            </Button>
            <TextField
              size='small'
              variant='outlined'
              value={values.bed.value}
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
            <Button onClick={() => incHandleChange('bed')} size='large' variant='outlined'>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Количество санузлов
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('bathrooms')} size='large' variant='outlined'>
              <RemoveIcon />
            </Button>
            <TextField
              size='small'
              variant='outlined'
              value={values.bathrooms.value}
              onChange={handleChange('bathrooms')}
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
            <Button onClick={() => incHandleChange('bathrooms')} size='large' variant='outlined'>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Количество спален
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('rooms')} size='large' variant='outlined'>
              <RemoveIcon />
            </Button>
            <TextField
              size='small'
              variant='outlined'
              value={values.rooms.value}
              onChange={handleChange('rooms')}
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
            <Button onClick={() => incHandleChange('rooms')} size='large' variant='outlined'>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Этаж
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('floor')} size='large' variant='outlined'>
              <RemoveIcon />
            </Button>
            <TextField
              size='small'
              variant='outlined'
              value={values.floor.value}
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
            <Button onClick={() => incHandleChange('floor')} size='large' variant='outlined'>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          spacing={{ xs: 2, sm: 1 }}
          justifyContent='space-between'
        >
          <Typography variant='body1' component='span' className={styles.countLabel}>
            Общая площадь жилья
          </Typography>

          <div>
            <Button onClick={() => decHandleChange('square')} size='large' variant='outlined'>
              <RemoveIcon />
            </Button>
            <OutlinedInput
              size='small'
              value={values.square.value}
              onChange={handleChange('square')}
              sx={{ mx: 2, width: '100px' }}
              endAdornment={<InputAdornment position='end'>㎡</InputAdornment>}
              inputProps={{
                step: 1,
                min: 0,
                max: 2000,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button onClick={() => incHandleChange('square')} size='large' variant='outlined'>
              <AddIcon />
            </Button>
          </div>
        </Stack>
      </Stack>

      <BottomStick hasPrev />
    </div>
  );
}
