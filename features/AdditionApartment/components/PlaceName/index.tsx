import * as React from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';

import { FORM_VALUE, INCREASE } from '@store/constants';
import { showSnackbar } from '@store/snackbar/actions';
import { SeverityEnum } from '@components/CustomSnackBar';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';

type TState = {
  name: { value: string };
  description: { value: string };
  amount: { value: number };
};

export const PlaceName = ({ placeNameInput }) => {
  const dispatch = useDispatch();
  const handleNext = () => {
    values.name.value === ''
      ? dispatch(
        showSnackbar({
          message: 'Заполните Название',
          severity: SeverityEnum.warning,
        }),
      )
      : dispatch({ type: INCREASE });
  };

  const [values, setValues] = React.useState<TState>({
    name: { value: placeNameInput },
    amount: { value: 0 },
    description: { value: '' },
  });

  const handleChange = (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FORM_VALUE,
      name: [prop],
      fieldValue: event.target.value,
    });
    setValues({ ...values, [prop]: { value: event.target.value } });
  };

  return (
    <div>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Дайте название вашему объявлению и установите цену
      </Typography>

      <Stack spacing={4}>
        <FormControl fullWidth>
          <Typography variant='h6' sx={{ mb: 1.5 }}>
            Введите название
          </Typography>
          <TextField
            size='small'
            id='name'
            label='Название'
            variant='outlined'
            value={values.name.value}
            onChange={handleChange('name')}
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <Typography variant='h6' sx={{ mb: 1.5 }}>
            Добавьте описание
          </Typography>
          <TextField
            size='small'
            id='description'
            label='Описание'
            variant='outlined'
            multiline
            rows={4}
            value={values.description.value}
            onChange={handleChange('description')}
          />
        </FormControl>

        <FormControl>
          <Typography variant='h6' sx={{ mb: 1.5 }}>
            Установите цену
          </Typography>
          <OutlinedInput
            notched={false}
            id='amount'
            size='small'
            value={values.amount.value}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position='start'>₽/ночь</InputAdornment>}
            label='Amount'
            sx={{ maxWidth: '150px' }}
          />
        </FormControl>

        <BottomStick hasPrev clickNext={handleNext} />
      </Stack>
    </div>
  );
};
