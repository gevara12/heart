import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { getCurrentUser } from '@store/auth/selectors';
import { fetchCurrentUser } from '@store/auth/actions';

import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from '@features/Profile/components/AddAvatar/AddAvatar.module.css';

type TProfileProps = {};

export const Profile = ({}: TProfileProps): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);

  React.useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const currentYear = new Date().getFullYear();
  const fakeName = data?.email.substring(0, data?.email.indexOf('@'));
  return (
    <>
      {data && (
        <>
          <Grid container spacing={{ xs: 2, sm: 8 }}>
            <Grid item xs={12} sm={4}>
              <Avatar sx={{ mb: 4, bgcolor: grey[100], maxWidth: 190, width: '100%', height: 190 }} variant="square">
                {data?.avatar ? (
                  <div className={styles.imageContainer}>
                    <Image className={styles.image} src={data?.avatar} alt="avatar" layout="fill" />
                  </div>
                ) : (
                  <AccountCircleIcon sx={{ width: 190, height: 190, color: '#707070' }} />
                )}
              </Avatar>

              {data.refWhatsapp && (
                <>
                  <Typography
                    component="a"
                    href={data.refWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    sx={{ display: 'flex', color: 'text.primary', textDecoration: 'none', mb: 1 }}
                  >
                    <WhatsAppIcon sx={{ mr: 1 }} /> <span>WhatsApp</span>
                  </Typography>
                </>
              )}

              {data.refTelegram && (
                <>
                  <Typography
                    component="a"
                    href={`https://${data.refTelegram}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    sx={{ display: 'flex', color: 'text.primary', textDecoration: 'none', mb: 1 }}
                  >
                    <TelegramIcon sx={{ mr: 1 }} /> <span>Telegram</span>
                  </Typography>
                </>
              )}
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {data.name ?? fakeName ?? data.name}
                {data.surname}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
                {data.gender}
                {data.dateOfBirth && `, ${currentYear - data.dateOfBirth && data.dateOfBirth.substr(6, 4)}`}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                На HeartApart с {data?.dateOfRegistration}
              </Typography>

              {data.description ||
                (data.city && (
                  <>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                      Обо мне
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      {data.description}
                    </Typography>

                    {data.city && (
                      <Stack direction="row">
                        <LocationOnIcon />
                        {data.city}
                      </Stack>
                    )}
                  </>
                ))}
            </Grid>
          </Grid>
        </>
      )}

      <Link href="profile/edit">
        <Button variant="outlined">Редактировать</Button>
      </Link>
    </>
  );
};
