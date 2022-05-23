import * as React from 'react';
import { Checkbox, Switch, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { FORM_GROUP_OBJECT } from '@store/constants';
import styles from './SwitchGroup.module.css';

type TSwitch = {
  name: string;
  label: string;
  isChecked: boolean;
  category?: string;
  isSwitcher?: boolean;
};

type TSwitchGroup = {
  qualities: {};
  qualitiesArr: [];
  title?: string;
  category?: string;
  isSwitcher?: boolean;
};

export const SwitchGroup = ({ qualities, qualitiesArr, title, category = 'qualities', isSwitcher }: TSwitchGroup) => {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState(qualitiesArr);

  const filtered = Object.keys(values)
    .filter((key) => Object.keys(qualities || {}).includes(key))
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          ...values[key],
          isChecked: true,
        },
      }),
      {},
    );

  const checkHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = event.target.name;

      let items = { ...values };
      items[index].isChecked = event.target.checked;
      dispatch({
        type: FORM_GROUP_OBJECT,
        groupName: category,
        groupObject: items,
      });
      setValues({ ...values });
    },
    [dispatch, values],
  );

  React.useEffect(() => {
    dispatch({
      type: FORM_GROUP_OBJECT,
      groupName: category,
      groupObject: filtered,
    });
    !isSwitcher && setValues({ ...values, ...filtered });
  }, []);

  return (
    <div className={styles.host}>
      {title && (
        <Typography variant="h5" className={styles.subTitle}>
          {title}
        </Typography>
      )}

      <FormGroup className={styles.group}>
        {Object.entries(values).map(([key, value]: [key: string, value: TSwitch]) => {
          const { isChecked, label } = value;
          // console.info('label', value);
          return (
            <FormControlLabel
              key={key}
              control={
                isSwitcher ? (
                  <Switch
                    checked={isChecked}
                    onChange={checkHandler}
                    name={key}
                    id={label}
                    color="primary"
                    inputProps={{ title: key }}
                  />
                ) : (
                  <Checkbox
                    checked={isChecked}
                    onChange={checkHandler}
                    name={key}
                    id={label}
                    color="primary"
                    inputProps={{ title: key }}
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
