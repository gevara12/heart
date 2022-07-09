import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Box, Stack, styled } from '@mui/material';

const Dot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '6px',
  height: '6px',
  orderRadius: '50%',
}));

export default function ParseInfoList() {
  const list = [
    'Имя',
    'О себе',
    'Статус «Суперхост»',
    'Количество отзывов о вас как о хозяине',
    'До 10 объявлений из профиля',
    'Рейтинг и количество отзывов у каждого объявления',
  ];
  return (
    <Stack direction="column" spacing={1.5} sx={{ mt: 2 }}>
      {list.map((item) => (
        <Stack direction="row" spacing={1} alignItems="center" key={uuidv4()}>
          <Dot />
          <span>{item}</span>
        </Stack>
      ))}
    </Stack>
  );
}
