import * as React from 'react';
import { ClickAwayListener, Grow, IconButton, Paper, Popper, Stack, TextField, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './GuestPopover.module.css';

export const GuestPopover = () => {
  const [adultCount, setAdultCount] = React.useState<number>(0);
  const [childCount, setChildCount] = React.useState<number>(0);
  const [animalCount, setAnimalCount] = React.useState<number>(0);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const incAdultNum = () => {
    setAdultCount(adultCount + 1);
  };

  const decAdultNum = () => {
    adultCount > 0 ? setAdultCount(adultCount - 1) : setAdultCount(0);
  };

  const incChildNum = () => {
    setChildCount(childCount + 1);
  };

  const decChildNum = () => {
    childCount > 0 ? setChildCount(childCount - 1) : setChildCount(0);
  };

  const incAnimalNum = () => {
    setAnimalCount(animalCount + 1);
  };

  const decAnimalNum = () => {
    animalCount > 0 ? setAnimalCount(animalCount - 1) : setAnimalCount(0);
  };

  return (
    <div>
      <div ref={anchorRef} aria-label="split button" role="button">
        <TextField
          id="guests"
          label="Гости"
          value={adultCount + childCount + animalCount}
          onFocus={handleClick}
          sx={{ width: '100%' }}
          // inputRef={input => (this.tf = input)}
        />
        {/*<Button variant='contained' onClick={handleClick}>*/}
        {/*  Open Popover*/}
        {/*</Button>*/}
      </div>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition style={{ zIndex: '10' }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper sx={{ px: 2, py: 1 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body1" component="span" className={styles.countLabel}>
                      Взрослые:
                    </Typography>

                    <IconButton onClick={decAdultNum}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                      {adultCount}
                    </Typography>
                    <IconButton onClick={incAdultNum}>
                      <AddIcon />
                    </IconButton>
                  </Stack>

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body1" component="span" className={styles.countLabel}>
                      Дети:
                    </Typography>

                    <IconButton onClick={decChildNum}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                      {childCount}
                    </Typography>
                    <IconButton onClick={incChildNum}>
                      <AddIcon />
                    </IconButton>
                  </Stack>

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body1" component="span" className={styles.countLabel}>
                      Животные:
                    </Typography>

                    <IconButton onClick={decAnimalNum}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" component="span" sx={{ mx: 2 }}>
                      {animalCount}
                    </Typography>
                    <IconButton onClick={incAnimalNum}>
                      <AddIcon />
                    </IconButton>
                  </Stack>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
