import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import {
  AlertTextEnum,
  CustomAlert,
  hideAlert,
  SeverityEnum,
} from '@components/CustomAlert';
import { getCurrentApartment } from '@store/apartments/selectors';
import { updateApartment } from '@store/apartments/actions';
import { SaveButton } from '../SaveButton';

type TState = {
  name: string;
  description: string;
  amount: number;
};

export const PlaceName = () => {
  const dispatch = useDispatch();
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);

  const [values, setValues] = React.useState<TState>({
    name: '',
    amount: 0,
    description: '',
  });

  const handleChange =
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const { currentApartment } = useSelector(getCurrentApartment);

  const createNew = async () => {
    try {
      if (values.name === '') {
        setOpenWarning(true);
        hideAlert(() => setOpenWarning(false));
      } else {
        await dispatch(
          updateApartment({
            id: currentApartment?.data?.id,
            name: values.name,
            description: values.description,
            amount: values.amount,
          })
        );
        setOpenSuccess(true);
        hideAlert(() => setOpenSuccess(false));
      }
    } catch (e: unknown) {
      console.error(e);
      setOpenError(true);
    }
  };
  return (
    <div>
      <CustomAlert isOpen={openSuccess} severity={SeverityEnum.success}>
        {AlertTextEnum.Success}
      </CustomAlert>
      <CustomAlert isOpen={openError} severity={SeverityEnum.error}>
        {AlertTextEnum.Error}
      </CustomAlert>
      <CustomAlert isOpen={openWarning} severity={SeverityEnum.warning}>
        Заполните поля
      </CustomAlert>

      <Stack spacing={4}>
        <FormControl fullWidth>
          <TextField
            size='small'
            id='name'
            label='Название'
            variant='outlined'
            value={values.name}
            onChange={handleChange('name')}
            error={openWarning}
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            size='small'
            id='description'
            label='Описание'
            variant='outlined'
            multiline
            rows={4}
            value={values.description}
            onChange={handleChange('description')}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor='amount'>Цена</InputLabel>
          <OutlinedInput
            id='amount'
            size='small'
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position='start'>₽</InputAdornment>}
            label='Amount'
          />
        </FormControl>

        <SaveButton onClick={createNew} />
      </Stack>
    </div>
  );
};
