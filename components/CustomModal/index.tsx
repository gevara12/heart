import * as React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

type TCustomModalProps = {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
};

export const CustomModal = ({ isOpen, title, onClose, onConfirm, children }: TCustomModalProps): React.ReactElement => {
  const confirmationHandle = () => {
    onClose();
    onConfirm && onConfirm();
  };

  const declineHandle = () => {
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle sx={{ px: 4, py: 2 }}>{title}</DialogTitle>}
      {children ? (
        children
      ) : (
        <DialogActions sx={{ px: 4, pb: 2, justifyContent: 'center' }}>
          <Button onClick={confirmationHandle} autoFocus sx={{ mr: 2 }} variant="contained">
            Yes
          </Button>
          <Button onClick={declineHandle} sx={{ ml: 2 }} variant="outlined">
            No
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
