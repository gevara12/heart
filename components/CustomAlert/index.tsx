import * as React from 'react';

import { Alert, Collapse } from '@mui/material';

import styles from './CustomAlert.module.css';

export const SHOW_DELAY = 2000;

export enum AlertTextEnum {
  Success = 'Have a nice day',
  Error = 'Something went wrong',
}

export enum SeverityEnum {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

type TAlertProps = {
  children: React.ReactNode;
  isOpen: boolean;
  severity: SeverityEnum;
};

export const CustomAlert = ({ children, isOpen, severity }: TAlertProps): React.ReactElement => {
  return (
    <div className={styles.host}>
      <Collapse in={isOpen}>
        <Alert variant="filled" color={SeverityEnum[severity]} severity={SeverityEnum[severity]}>
          {children}
        </Alert>
      </Collapse>
    </div>
  );
};

export const hideAlert = (handler: () => void) => {
  return setTimeout(() => {
    handler();
  }, SHOW_DELAY);
};
