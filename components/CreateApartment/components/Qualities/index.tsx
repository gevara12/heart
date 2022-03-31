import * as React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './Qualities.module.css';

// type TComport = {
//   wiFi: boolean;
//   tv: boolean;
//   kitchen: boolean;
//   washingMachine: boolean;
//   parking: boolean;
//   conditioner: boolean;
// };

export const Qualities = () => {
  const [values, setValues] = React.useState({
    name: '',
    amount: 0,
    description: '',
  });

  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Typography variant='h4' className={styles.title}>
        Укажите удобства вашего жилья
      </Typography>

      <Typography variant='h5' className={styles.subTitle}>
        Стандратные
      </Typography>

      <FormControl>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleCheckChange} />}
          label={
            <span>
              <AddIcon />
            </span>
          }
          labelPlacement='top'
        ></FormControlLabel>
      </FormControl>
    </div>
  );
};
