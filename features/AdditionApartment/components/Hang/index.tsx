import * as React from 'react';
import Typography from '@mui/material/Typography';

import { Qualities } from '@features/CreateApartment/components/Qualities';
import { CheckInOut } from '@features/CreateApartment/components/CheckInOut';
import { BetterComfort } from '@features/CreateApartment/components/BetterComfort';
import { Services } from '@features/CreateApartment/components/Services';
import { AdditionalRules } from '@features/CreateApartment/components/AdditionalRules';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';

import styles from './Hang.module.css';

const Hang = (): React.ReactElement => (
  <>
    <Typography variant="h4" className={styles.title}>
      Укажите удобства вашего жилья
    </Typography>

    <Qualities />

    <BetterComfort />

    <Services />

    <Typography variant="h4" className={styles.title}>
      Укажите правила в вашем жилье
    </Typography>

    <CheckInOut />

    <AdditionalRules />

    <BottomStick hasPrev />
  </>
);

export default Hang;
