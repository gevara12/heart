import * as React from 'react';
import styles from '@features/CreateApartment/components/Hang/Hang.module.css';
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { INCREASE } from '@store/constants';
import { useDispatch } from 'react-redux';
import { NextButton } from '@features/CreateApartment/components/NextButton';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Characteristics = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch({ type: INCREASE });
  };

  const [guest, setGuestCount] = React.useState<number>(0);
  const [bed, setBedCount] = React.useState<number>(0);
  const [floor, setFloorCount] = React.useState<number>(0);

  const incGuestNum = () => {
    setGuestCount(guest + 1);
  };
  const decGuestNum = () => {
    guest > 0 ? setGuestCount(guest - 1) : setGuestCount(0);
  };

  const incBedNum = () => {
    setBedCount(bed + 1);
  };
  const decBedNum = () => {
    bed > 0 ? setBedCount(bed - 1) : setBedCount(0);
  };

  const incFloorNum = () => {
    setFloorCount(floor + 1);
  };

  const decFloorNum = () => {
    floor > 0 ? setFloorCount(floor - 1) : setFloorCount(0);
  };

  return (
    <>
      <Typography variant="h4" className={styles.title}>
        Укажите удобства вашего жилья
      </Typography>

      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Сколько гостей вы готовы принять?
          </Typography>

          <div>
            <Button size="large" onClick={decGuestNum} variant="outlined">
              <RemoveIcon />
            </Button>
            <TextField
              size="small"
              variant="outlined"
              value={guest}
              onChange={(e) => setGuestCount(+e.target.value)}
              sx={{ mx: 2, width: '60px' }}
              inputProps={{
                step: 1,
                min: 0,
                max: 20,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button size="large" variant="outlined" onClick={incGuestNum}>
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Количество кроватей
          </Typography>

          <div>
            <Button onClick={decBedNum} size="large" variant="outlined">
              <RemoveIcon />
            </Button>
            <TextField
              size="small"
              variant="outlined"
              value={bed}
              onChange={(e) => setBedCount(+e.target.value)}
              sx={{ mx: 2, width: '60px' }}
              inputProps={{
                step: 1,
                min: 0,
                max: 8,
                type: 'number',
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
            <Button onClick={incBedNum} size="large" variant="outlined">
              <AddIcon />
            </Button>
          </div>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" component="span" className={styles.countLabel}>
            Этаж:
          </Typography>

          <IconButton onClick={decFloorNum}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" component="span" sx={{ mx: 2 }}>
            {floor}
          </Typography>
          <IconButton onClick={incFloorNum}>
            <AddIcon />
          </IconButton>
        </Stack>
      </Stack>

      <NextButton onClick={handleNext} />
    </>
  );
};
