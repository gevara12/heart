import * as React from 'react';
import { Button, Stack } from '@mui/material';

export const NextButton = ({ onClick }) => {
  return (
    <Stack
      direction='row'
      justifyContent='flex-end'
      sx={{ position: 'absolute', bottom: 0, right: 0 }}
    >
      <Button variant='contained' onClick={onClick}>
        Дальше
      </Button>
    </Stack>
  );
};
