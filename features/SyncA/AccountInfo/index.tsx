import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Alert, Avatar, Box, Chip, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

import ApartCard from '@features/SyncA/ApartCard';
import AccountInfoRow from '@features/SyncA/AccountInfoRow';
import styles from './AccountInfo.module.css';

type TAccountInfo = {
  parsedInfo: {
    smartName: string;
    profilePictureUrl: string;
    managedListings: [];
    about: string;
    reviewsCountFromGuest: number;
    reviewsCountFromHost: number;
    isSuperhost: boolean;
  };
};

export default function AccountInfo({ parsedInfo }: TAccountInfo) {
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

  // console.info(managedListings, parsedInfo);

  return (
    <Box className={styles.host}>
      <Grid container spacing={{ xs: 4.5, md: 6.5 }}>
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
        {managedListings && (
          <AccountInfoRow title={'Объявления'}>
            <Grid container spacing={3}>
              {managedListings.map((apart) => (
                <Grid item xs={12} md={4} key={uuidv4()}>
                  <ApartCard apartment={apart} />
                </Grid>
              ))}
            </Grid>
            <Alert severity="info" sx={{ mt: { xs: 2, md: 4 }, maxWidth: '820px' }}>
              <Typography variant="body2">
                После подтверждения переноса данных ваши объявления сохранятся как черновики в профиле на HeartApart.
              </Typography>
            </Alert>
          </AccountInfoRow>
        )}

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
