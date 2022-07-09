import * as React from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function LeftRightPromoCard2({ card, reverse = false }: any) {
  const { breakpoints, gradient } = useTheme();
  const isSmBreak = useMediaQuery(breakpoints.down('sm'));
  const isMdBreak = useMediaQuery(breakpoints.down('md'));

  return (
    <Stack
      direction={isSmBreak ? 'column' : reverse ? 'row-reverse' : 'row'}
      sx={{}}
      spacing={{ xs: isMdBreak ? 2.5 : 7.5 }}
    >
      <Box sx={{ flex: '1 1 50%' }}>
        <Typography variant={isMdBreak ? 'h6' : 'h4'} sx={{ color: 'primary.main', fontWeight: 500 }}>
          {card.title}
        </Typography>
        <Typography
          variant={isMdBreak ? 'body2' : 'body1'}
          component="div"
          sx={{ mt: isMdBreak ? 1 : 2.5 }}
          dangerouslySetInnerHTML={{ __html: card.desc }}
        />
      </Box>
      <Box
        sx={{
          flex: isSmBreak ? '1 0 auto' : '1 1 50%',
          display: 'flex',
          background: gradient.main,
          borderRadius: '20px',
          height: isMdBreak ? '188px' : '328px',
        }}
      >
        <img style={{ display: 'block', height: isMdBreak ? 127 : 210, margin: 'auto' }} src={card.image} alt={''} />
      </Box>
    </Stack>
  );
}
