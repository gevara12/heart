import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentUser, getUserKey } from '@store/auth/selectors';

import { Button, CircularProgress, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function UserCodeRow() {
  const currentUser = useSelector(getCurrentUser);
  const userKey = useSelector(getUserKey);
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const copy = () => {
    navigator.clipboard.writeText(userKey);
    setOpen(true);
    setTimeout(setOpen.bind(null, false), 1000);
  };

  return (
    <Stack direction={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'flex-start' : 'center'} sx={{ mt: 3 }}>
      <Typography variant="body1" sx={{ mr: 7 }}>
        Скопируйте данный код:
      </Typography>
      <Stack direction="row" alignItems="center">
        {currentUser ? (
          <>
            <Typography variant="body1" sx={{ mr: 3 }}>
              {userKey}
            </Typography>
            {navigator.clipboard && (
              <Tooltip
                PopperProps={{ disablePortal: true }}
                open={open}
                title="Скопировано"
                placement={isMobile ? 'top' : 'right'}
                disableHoverListener
              >
                <Button variant="outlined" onClick={copy}>
                  Скопировать
                </Button>
              </Tooltip>
            )}
          </>
        ) : (
          <CircularProgress size={36} />
        )}
      </Stack>
    </Stack>
  );
}
