import * as React from 'react';

import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import { Stack } from '@mui/material';

export default function MobileSuccessDialog({ handleClose, openDialog }: any) {
  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={openDialog}>
      <DialogTitle id="dialog-title">
        <Stack direction={'row'} alignItems={'start'}>
          Спасибо за использование нашего сервиса!
          <IconButton aria-label="close" onClick={handleClose} size={'small'}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>Хозяин жилья свяжется с вами в ближайшее время!</Typography>
        <Typography gutterBottom>А пока вы ждете - посмотрите на котика :З</Typography>
        <img
          style={{ width: '100%' }}
          src="http://desktopwallpapers.org.ua/pic/201210/1920x1200/desktopwallpapers.org.ua-20397.jpg"
          alt=""
        />
      </DialogContent>
    </Dialog>
  );
}
