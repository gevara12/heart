import * as React from 'react';
import { Button } from '@mui/material';

export const NextButton = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      Дальше
    </Button>
  );
};
