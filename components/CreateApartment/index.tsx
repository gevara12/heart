import * as React from 'react';
import { useDispatch } from 'react-redux';

import {
  TextField,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from '@mui/material';

import { createApartment } from '@store/apartments/actions';

import {
  CustomAlert,
  hideAlert,
  AlertTextEnum,
  SeverityEnum,
} from '@components/CustomAlert';
import { MapsGeocode } from '@components/MapsGeocode';
import type { TPlaceType } from '@utils/types';

import { ImageUpload } from '@components/ImageUpload';

// import styles from './CreateApartment.module.css';

type TState = {
  name: string;
  description: string;
  amount: number;
};

// type TComport = {
//   wiFi: boolean;
//   tv: boolean;
//   kitchen: boolean;
//   washingMachine: boolean;
//   parking: boolean;
//   conditioner: boolean;
// };

export const CreateApartment = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);

  const [values, setValues] = React.useState<TState>({
    name: '',
    amount: 0,
    description: '',
  });

  const [placeType, setPlaceType] = React.useState<TPlaceType>('entire-place');

  const handleChange =
    (prop: keyof TState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const changePlaceHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setPlaceType((event.target as HTMLInputElement).value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const createNew = async () => {
    try {
      if (values.name === '') {
        setOpenWarning(true);
        hideAlert(() => setOpenWarning(false));
      } else {
        await dispatch(
          createApartment({
            name: values.name,
            description: values.description,
            placeType,
            amount: values.amount,
          })
        );
        setOpenSuccess(true);
        // dispatch(fetchApartments());
        setValues({
          ...values,
          name: '',
          description: '',
        });
        hideAlert(() => setOpenSuccess(false));

        // setTimeout(() => {
        //   history.push(`/${redirectTo}`);
        // }, REDIRECT_DELAY);
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

      <div>
        <Stack spacing={4}>
          <FormControl fullWidth>
            <TextField
              size='small'
              id='name'
              label='Название'
              variant='outlined'
              value={values.description}
              onChange={handleChange('description')}
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
              startAdornment={
                <InputAdornment position='start'>₽</InputAdornment>
              }
              label='Amount'
            />
          </FormControl>

          <FormControl>
            <FormLabel id='type-of-place'>Выберите тип жилья</FormLabel>
            <RadioGroup
              aria-labelledby='type-of-place'
              value={placeType}
              onChange={changePlaceHandle}
              name='type-of-place-group'
            >
              <FormControlLabel
                value='entire-place'
                control={<Radio />}
                label='Жилье целиком'
              />
              <FormControlLabel
                value='private-room'
                control={<Radio />}
                label='Отдельная комната'
              />
              <FormControlLabel
                value='hotel-room'
                control={<Radio />}
                label='Гостиничный номер'
              />
              <FormControlLabel
                value='shared-room'
                control={<Radio />}
                label='Место в комнате'
              />
            </RadioGroup>
          </FormControl>

          {/* <FormControl>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={handleCheckChange} />
              }
              label={
                <span>
                  <AddIcon />
                </span>
              }
              labelPlacement='top'
            ></FormControlLabel>
          </FormControl> */}

          <MapsGeocode />

          <ImageUpload />
          <div>
            <Button variant='contained' onClick={createNew}>
              Добавить
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  );
};
