import * as React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import styles from './SwitchGroup.module.css';
import { FORM_GROUP_VALUE } from '@store/constants';

type TSwitch = {
  name: string;
  label: string;
  isChecked: boolean;
  category?: string;
};

export const SwitchGroup = ({ qualitiesArr, title, category = 'qualities' }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState(qualitiesArr);

  const checkHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = event.target.name;
      let items = [...values];
      items[index].isChecked = event.target.checked;
      dispatch({
        type: FORM_GROUP_VALUE,
        groupName: category,
        name: event.target.title,
        fieldValue: event.target.checked,
      });
      setValues([...values]);
    },
    [dispatch, values],
  );

  return (
    <div className={styles.host}>
      <Typography variant="h5" className={styles.subTitle}>
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
        {Object.entries(values).map(([key, value]: [key: string, value: TSwitch]) => {
          const { name, isChecked, label } = value;
          return (
            <FormControlLabel
              key={name}
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={checkHandler}
                  name={key}
                  id={label}
                  color="primary"
                  inputProps={{ title: name }}
                />
              }
              label={value.label}
            />
          );
        })}
      </FormGroup>
    </div>
  );
};
