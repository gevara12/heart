import React from 'react';

import { IconButton, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const RatingTooltip = () => (
  <Tooltip title="some explanation">
    <IconButton>
      <HelpOutlineIcon fontSize="small" />
    </IconButton>
  </Tooltip>
);
