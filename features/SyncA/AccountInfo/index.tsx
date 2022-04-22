import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Alert, Avatar, Box, Chip, Grid, Stack, Typography, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

import useMediaQuery from '@mui/material/useMediaQuery';

import ApartCard from '@features/SyncA/ApartCard';
import AccountInfoRow from '@features/SyncA/AccountInfoRow';

export default function AccountInfo({ parsedInfo, ...rest }: { parsedInfo: any; [key: string]: any }) {
  const {
    smartName,
    profilePictureUrl,
    managedListings,
    about,
    reviewsCountFromGuest,
    reviewsCountFromHost,
    isSuperhost,
  } = parsedInfo;

  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down('md'));

  return (
    <Box {...rest}>
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{}}>
        {smartName && (
          <AccountInfoRow title={'Имя'}>
            <Typography variant="body1" sx={{ width: isMobile ? '100%' : 552 }}>
              {smartName}
            </Typography>
          </AccountInfoRow>
        )}
        {about && (
          <AccountInfoRow title={'О себе'}>
            <Typography variant="body1" sx={{ width: isMobile ? '100%' : 552 }}>
              {about}
            </Typography>
          </AccountInfoRow>
        )}
        {profilePictureUrl && (
          <AccountInfoRow title={'Аватар'}>
            <Avatar src={profilePictureUrl} sx={{ width: 148, height: 148 }} alt={smartName} />
          </AccountInfoRow>
        )}
        {isSuperhost && (
          <AccountInfoRow title={'Статус профиля'}>
            <div>
              <Chip label="Суперхост" color="secondary" variant="outlined" />
            </div>
            <Alert severity="info" sx={{ mt: { xs: 2, md: 4 }, display: 'inline-flex' }}>
              Топ-сервис на HeartApart
            </Alert>
          </AccountInfoRow>
        )}
        <AccountInfoRow title={'Объявления'}>
          <Grid container spacing={3}>
            {managedListings.map((apart) => (
              <Grid item xs={12} md={4} key={uuidv4()}>
                <ApartCard apartment={apart} />
              </Grid>
            ))}
          </Grid>
          <Alert severity="info" sx={{ mt: { xs: 2, md: 4 } }}>
            <Typography variant="body2">
              После подтверждения переноса данных ваши объявления сохранятся как черновики в профиле на HeartApart.
            </Typography>
          </Alert>
        </AccountInfoRow>
        <AccountInfoRow title={'Рейтинг'}>
          <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
            <BoltIcon fontSize={'small'} sx={{ color: 'secondary.main' }} />
            <Typography variant="body1">{reviewsCountFromGuest} отзывов от гостей</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
            <BoltIcon fontSize={'small'} sx={{ color: 'secondary.main' }} />
            <Typography variant="body1">{reviewsCountFromHost} отзывов от хозяев</Typography>
          </Stack>
        </AccountInfoRow>
      </Grid>
    </Box>
  );
}
