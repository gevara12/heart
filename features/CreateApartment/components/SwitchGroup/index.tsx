import * as React from 'react';
import { Checkbox, Switch, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SwitchGroup.module.css';
import { FORM_GROUP_VALUE } from '@store/constants';
import { getFormValues } from '@store/newApartForm/selectors';

type TSwitch = {
  name: string;
  label: string;
  isChecked: boolean;
  category?: string;
  isSwitcher?: boolean;
};

type TSwitchGroup = {
  qualitiesArr: [];
  title?: string;
  category?: string;
  isSwitcher?: boolean;
}

export const SwitchGroup = ({ qualitiesArr, title, category = 'qualities', isSwitcher }: TSwitchGroup) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState(qualitiesArr);

  const formValues = useSelector(getFormValues);

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

  React.useEffect(() => {
    // setValues([...values]);
  }, []);

  // console.info('formValues', formValues[category], values);
  return (
    <div className={styles.host}>
      {title && (
        <Typography variant='h5' className={styles.subTitle}>
          {title}
        </Typography>
      )}

      <FormGroup className={styles.group}>
        {Object.entries(values).map(([key, value]: [key: string, value: TSwitch]) => {
          const { name, isChecked, label } = value;
          return (
            <FormControlLabel
              key={name}
              control={
                isSwitcher ? (
                  <Switch
                    checked={isChecked}
                    onChange={checkHandler}
                    name={key}
                    id={label}
                    color='primary'
                    inputProps={{ title: name }}
                  />
                ) : (
                  <Checkbox
                    checked={isChecked}
                    onChange={checkHandler}
                    name={key}
                    id={label}
                    color='primary'
                    inputProps={{ title: name }}
                  />
                )
              }
              label={value.label}
            />
          );
        })}
      </FormGroup>
    </div>
  );
};
