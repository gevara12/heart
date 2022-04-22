import React from 'react';

import { Alert, Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import RatingIconsPanel from '@components/RatingIconsPanel';
import Apartment from '@components/ApartmentMock';

import PhotoBlock from '@features/PublicApartment/PhotoBlock';
import AboutBlock from '@features/PublicApartment/AboutBlock';
import ApartmentBlock from '@features/PublicApartment/ApartmentBlock';
import MobilePinnedBlock from '@features/PublicApartment/MobilePinnedBlock';
import PinnedBlock from '@features/PublicApartment/PinnedBlock';
import OwnerAboutBlock from '@features/PublicApartment/OwnerAboutBlock';
import AddressLink from '@features/PublicApartment/AddressLink';
import PublicApartmentDivider from '@features/PublicApartment/PublicApartmentDivider';
import ShareLink from '@features/PublicApartment/ShareLink';
import PhotoSlider from '@features/PublicApartment/PhotoSlider';
import RulesGrid from '@features/PublicApartment/RulesGrid';
import OptionsGrid from '@features/PublicApartment/OptionsGrid';
import CheckInGrid from '@features/PublicApartment/CheckInGrid';
import RatingTooltip from '@features/PublicApartment/RatingTooltip';

export default function PublicApartment({ apartment }: any) {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  return (
    <>
      {isMobile && <PhotoSlider photos={Apartment.photos} />}

      <Typography variant="h5" component="div">
        {apartment.publicInfo?.name}
      </Typography>

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
            <AboutBlock />

            <PublicApartmentDivider />

            <div>{apartment.publicInfo?.description}</div>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Заселение'}>
              <CheckInGrid />
              <Alert severity="info" sx={{ mt: { xs: 2, md: 4 } }}>
                После связи с хозяином вам будет доступна инструкция по заселению
              </Alert>
            </ApartmentBlock>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Удобства'}>
              <OptionsGrid options={Apartment.options} />
            </ApartmentBlock>

            <PublicApartmentDivider />

            <ApartmentBlock title={'Правила проживания'}>
              <RulesGrid rules={Apartment.rules} />
            </ApartmentBlock>
          </Grid>
          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

          {isMobile ? (
            <MobilePinnedBlock />
          ) : (
            <Grid item xs={12} md={4}>
              <PinnedBlock />
            </Grid>
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
            <OwnerAboutBlock />
          </Grid>
          <Grid item xs={12} md={1} />
          <Grid item xs={12} md={3}>
            <Typography sx={{ mb: 3 }}>Скорость ответа: 1 час</Typography>
            <Button variant="outlined">Задать вопрос хозяину</Button>
          </Grid>
        </Grid>
      </ApartmentBlock>
    </>
  );
}
