import React from 'react';
import dynamic from 'next/dynamic';

import { Alert, Box, Button, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

import RatingIconsPanel from '@components/RatingIconsPanel';
import Apartment from '@components/ApartmentMock';

const PhotoBlock = dynamic(() => import('@features/PublicApartment/PhotoBlock'), {
  loading: () => <span>Loading...</span>,
  ssr: false,
});

const PhotoSlider = dynamic(() => import('@features/PublicApartment/PhotoSlider'), {
  loading: () => <span>Loading...</span>,
  ssr: false,
});

import AboutBlock from '@features/PublicApartment/AboutBlock';
import ApartmentBlock from '@features/PublicApartment/ApartmentBlock';
import MobilePinnedBlock from '@features/PublicApartment/MobilePinnedBlock';
import PinnedBlock from '@features/PublicApartment/PinnedBlock';
import OwnerAboutBlock from '@features/PublicApartment/OwnerAboutBlock';
import AddressLink from '@features/PublicApartment/AddressLink';
import PublicApartmentDivider from '@features/PublicApartment/PublicApartmentDivider';
import ShareLink from '@features/PublicApartment/ShareLink';
import RulesGrid from '@features/PublicApartment/RulesGrid';
import OptionsGrid from '@features/PublicApartment/OptionsGrid';
import CheckInGrid from '@features/PublicApartment/CheckInGrid';
import RatingTooltip from '@features/PublicApartment/RatingTooltip';

import styles from './PublicApartment.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '@store/users/selectors';
import { fetchUser } from '@store/users/actions';

export default function PublicApartment({ apartment, ownerAvailable = true }: any) {
  const { breakpoints } = useTheme();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery(breakpoints.down('md'));

  const { publicInfo } = apartment;
  // console.log(apartment.ownerId)

  const apartOwner = useSelector(getUser);
  React.useEffect(() => {
    dispatch(fetchUser(apartment.ownerId));
  }, [dispatch]);
  // console.log('apartOwner', apartOwner);

  return (
    <div className={styles.host}>
      {isMobile && <PhotoSlider photos={Apartment.photos} />}

      {publicInfo?.name.value && (
        <Typography variant="h5" component="div">
          {publicInfo.name.value}
        </Typography>
      )}

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'start', md: 'center' }}
          spacing={{ xs: 0, md: 3 }}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <RatingIconsPanel />
            <RatingTooltip />
          </Stack>

          <AddressLink text={Apartment.address} />
        </Stack>
        {!isMobile && <ShareLink />}
      </Stack>

      {isMobile && <PublicApartmentDivider />}

      {!isMobile && <PhotoBlock photos={Apartment.photos} />}

      <Box sx={{ overflow: 'hidden' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <AboutBlock characteristics={publicInfo.characteristics} owner={apartOwner} />

            <PublicApartmentDivider />

            <div>{publicInfo.description.value}</div>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Заселение'}>
              <CheckInGrid />
            </ApartmentBlock>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Удобства'}>
              <OptionsGrid options={publicInfo.qualities} />
            </ApartmentBlock>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Правила проживания'}>
              <RulesGrid rules={Apartment.rules} />
            </ApartmentBlock>
          </Grid>
          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

          {ownerAvailable && (
            <>
              {isMobile ? (
                <MobilePinnedBlock />
              ) : (
                <Grid item xs={12} md={4}>
                  <PinnedBlock />
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Box>

      <PublicApartmentDivider />

      <ApartmentBlock title={'На карте'} id="map">
        <Box sx={{ height: { xs: '162px', sm: '320px', lg: '510px' } }}>
          <iframe
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          />
        </Box>
      </ApartmentBlock>

      <PublicApartmentDivider />

      <ApartmentBlock title={'Хозяин'}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            {apartOwner && <OwnerAboutBlock owner={apartOwner} />}
          </Grid>
          <Grid item xs={12} md={1} />
          <Grid item xs={12} md={3}>
            <Typography sx={{ mb: 3 }}>Скорость ответа: 1 час</Typography>
            <Button variant="outlined">Задать вопрос хозяину</Button>
          </Grid>
        </Grid>
      </ApartmentBlock>
    </div>
  );
}
