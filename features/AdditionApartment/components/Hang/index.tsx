import * as React from 'react';
import Typography from '@mui/material/Typography';

import { Qualities } from '@features/AdditionApartment/components/Qualities';
import { CheckInOut } from '@features/AdditionApartment/components/CheckInOut';
import { BetterComfort } from '@features/AdditionApartment/components/BetterComfort';
import { Services } from '@features/AdditionApartment/components/Services';
import { AdditionalRules } from '@features/AdditionApartment/components/AdditionalRules';
import { BottomStick } from '@features/AdditionApartment/components/BottomStick';

import styles from './Hang.module.css';

export const Hang = ({ qualities, additionalRules, betterComfort, service }): React.ReactElement => (
  <>
    <Typography variant="h4" className={styles.title}>
      Укажите удобства вашего жилья
    </Typography>

    <Qualities qualities={qualities} />

    <BetterComfort betterComfort={betterComfort} />

    <Services service={service} />

    <Typography variant="h4" className={styles.title}>
      Укажите правила в вашем жилье
    </Typography>

    <CheckInOut />

    <AdditionalRules additionalRules={additionalRules} />

    <BottomStick hasPrev />
  </>
);
