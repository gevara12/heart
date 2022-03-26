import * as React from 'react';

import { Apartments } from '@features/host/Apartments';

import styles from './UserApartments.module.css';

export const UserApartments = (): React.ReactElement => {
  return (
    <div className={styles.host}>
      <Apartments />
    </div>
  );
};
