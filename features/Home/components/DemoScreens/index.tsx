import * as React from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

export default function DemoScreens() {
  const { breakpoints, palette } = useTheme();
  const isSmBreak = useMediaQuery(breakpoints.down('sm'));
  const isMdBreak = useMediaQuery(breakpoints.down('md'));
  const isLgBreak = useMediaQuery(breakpoints.down('lg'));

  const boxShadow = '0px 4px 24px rgba(46, 60, 80, 0.08)';
  const commonStyles = {
    position: 'absolute',
    boxShadow: boxShadow,
  };
  const background = isSmBreak
    ? 'none'
    : palette.mode === 'dark'
    ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212'
    : '#FAFAFA';

  return (
    <Box
      sx={{ textAlign: 'center', background: background, paddingBottom: isSmBreak ? 0 : isMdBreak ? '186px' : '210px' }}
    >
      <Container fixed sx={{ position: 'relative' }}>
        <img
          style={{
            ...commonStyles,
            position: 'relative',
            width: isSmBreak ? 288 : isMdBreak ? 398 : 740,
            marginTop: isSmBreak ? 0 : isMdBreak ? -48 : -55,
          }}
          src={'/images/home/DemoScreens/Mockup_Desktop.png'}
          alt={''}
        />
        <img
          style={{
            ...commonStyles,
            display: isSmBreak ? 'none' : 'block',
            width: isMdBreak ? 122 : 190,
            left: isLgBreak ? 32 : 160,
            top: isLgBreak ? 91 : 143,
          }}
          src={'/images/home/DemoScreens/Mockup_Mobile.png'}
          alt={''}
        />
        <img
          style={{
            ...commonStyles,
            display: isSmBreak ? 'none' : 'block',
            width: isMdBreak ? 122 : 240,
            right: isLgBreak ? 32 : 155,
            top: -12,
          }}
          src={'/images/home/DemoScreens/Request.png'}
          alt={''}
        />

        <img
          style={{
            ...commonStyles,
            display: isSmBreak ? 'block' : 'none',
            width: 136,
            left: 'calc(50% - 130px)',
            top: 'calc(100% + 42px)',
          }}
          src={'/images/home/HomeHero/Rating.png'}
          alt={''}
        />
        <img
          style={{
            ...commonStyles,
            display: isSmBreak ? 'block' : 'none',
            width: 136,
            right: 'calc(50% - 130px)',
            top: 'calc(100% + 20px)',
          }}
          src={'/images/home/HomeHero/Message.png'}
          alt={''}
        />
      </Container>
    </Box>
  );
}
