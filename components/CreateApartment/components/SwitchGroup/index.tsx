import * as React from 'react';
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentApartment } from '@store/apartments/selectors';
import {
  fetchApartmentById,
  updateApartmentInfo,
} from '@store/apartments/actions';

import { SaveButton } from '../SaveButton';

import styles from './SwitchGroup.module.css';

export const SwitchGroup = ({ qualitiesArr, title }) => {
  const id = '876a0798-5051-44e7-a67a-6dca2b916804';
  const dispatch = useDispatch();

  const [values, setValues] = React.useState(qualitiesArr);

  const { currentApartment } = useSelector(getCurrentApartment);

  const updateInfo = async () => {
    try {
      await dispatch(
        updateApartmentInfo({
          // id: currentApartment?.data?.id,
          ...currentApartment,
          id: '876a0798-5051-44e7-a67a-6dca2b916804',
          qualities: values,
        })
      );
    } catch (e: unknown) {
      console.error(e);
      //  setOpenError(true);
    }
  };

  const checkHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = event.target.name;
      let items = [...values];
      items[index].isChecked = event.target.checked;
      setValues([...values]);
    },
    [values]
  );

  React.useEffect(() => {
    dispatch(fetchApartmentById(id));
  }, [dispatch, id]);

  console.info('currentApartment', currentApartment);

  return (
    <div className={styles.host}>
      <Typography variant='h5' className={styles.subTitle}>
        {title}
      </Typography>

      <FormGroup
        sx={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: {
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {values.map((item, index) => {
          return (
            <FormControlLabel
              key={item.name}
              control={
                <Switch
                  checked={item.isChecked}
                  onChange={checkHandler}
                  name={index}
                  id={item.label}
                  color='primary'
                />
              }
              label={item.label}
            />
          );
        })}
      </FormGroup>

      <SaveButton onClick={updateInfo} />
    </div>
  );
};
