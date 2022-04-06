import * as React from 'react';
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';

import { SaveButton } from '../SaveButton';

import {
  ApartmentReducer,
  initializer,
} from '@features/CreateApartment/customReducer';

import styles from './SwitchGroup.module.css';

export const SwitchGroup = ({ qualitiesArr, title, payloadField }) => {
  const [values, setValues] = React.useState(qualitiesArr);

  const [state, apartDispatch] = React.useReducer(
    ApartmentReducer,
    {},
    initializer
  );

  const updateInfo = () => {
    apartDispatch({ type: 'update', payload: { [payloadField]: values } });
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
    const { currentApartment } =
      JSON.parse(localStorage.getItem('currentApartment')) || {};
    console.info('jso', currentApartment);
    currentApartment && setValues([...currentApartment?.[payloadField]]);
  }, []);

  React.useEffect(() => {
    apartDispatch({
      type: 'update',
      payload: { ...state.currentApartment, [payloadField]: values },
    });
    localStorage.setItem('currentApartment', JSON.stringify(state));
  }, [values]);

  // console.table(state.currentApartment);

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
