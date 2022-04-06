import * as React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentApartment } from '@store/apartments/selectors';
import {
  deleteApartmentById,
  fetchApartmentById,
} from '@store/apartments/actions';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Divider,
  Alert,
  IconButton,
  Tooltip,
  Box,
  useTheme,
} from '@mui/material';

import {
  Share as ShareIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HighlightOffRounded as HighlightOffRoundedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { CustomModal } from '@components/CustomModal';
import { hideAlert } from '@components/CustomAlert';

import DeleteIcon from '@mui/icons-material/Delete';
import ApartmentPhotoSlider from '@components/ApartmentPhotoSlider';
import Apartment from '@components/ApartmentMock';
import RatingIconsPanel from '@components/RatingIconsPanel';
import ApartmentPhotoBlock from '@components/ApartmentPhotoBlock';
import ApartmentAboutBlock from '@components/ApartmentAboutBlock';
import ApartmentBlock from '@components/ApartmentBlock';
import ApartmentMobilePinnedBlock from '@components/ApartmentMobilePinnedBlock';
import ApartmentPinnedBlock from '@components/ApartmentPinnedBlock';
import ApartmentOwnerAboutBlock from '@components/ApartmentOwnerAboutBlock';

export const GetApartItemComponent = ({
  id,
}: {
  id: string | string[];
}): React.ReactElement => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const dispatch = useDispatch();
  const { currentApartment } = useSelector(getCurrentApartment);

  const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpen = (id: string) => {
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const confirmationDeleting = async () => {
    try {
      await dispatch(deleteApartmentById(id));
      setOpenSuccess(true);
      hideAlert(() => setOpenSuccess(false));
    } catch (e) {
      setOpenError(true);
      hideAlert(() => setOpenError(false));
      console.error(e);
    }
  };

  React.useEffect(() => {
    dispatch(fetchApartmentById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Typography variant='h2'>{currentApartment.name}</Typography>

      <IconButton size='small' onClick={() => handleOpen(id)}>
        <DeleteIcon />
      </IconButton>

      {currentApartment.images &&
        currentApartment.images.map(({ image, title, imageId }) => (
          <img
            style={{ maxWidth: '100%' }}
            src={image}
            alt={title}
            key={imageId}
          />
        ))}

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={confirmationDeleting}
        title='Удалить апартаменты?'
      />

      <section>
        <Container maxWidth='lg'>
          {isMobile && <ApartmentPhotoSlider />}

          <header>
            <Typography variant='h4' component='div'>
              {Apartment.title}
            </Typography>
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-between',
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'start', md: 'center' }}
                spacing={{ xs: 0, md: 3 }}
              >
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <RatingIconsPanel />
                  <Tooltip title='some explanation'>
                    <IconButton>
                      <HelpOutlineIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Link href='#map' passHref>
                  <a style={{ display: 'flex', color: '#00A699' }}>
                    <FmdGoodOutlinedIcon
                      fontSize='small'
                      sx={{ marginRight: '3px' }}
                    />
                    {Apartment.address}
                  </a>
                </Link>
              </Stack>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Link href='#' passHref>
                  <a
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#00A699',
                    }}
                  >
                    <ShareIcon fontSize='small' sx={{ marginRight: '3px' }} />
                    Поделиться
                  </a>
                </Link>
              </Box>
            </Box>
          </header>

          {!isMobile && <ApartmentPhotoBlock photos={Apartment.photos} />}

          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <ApartmentAboutBlock />

              <Divider sx={{ mt: 3, mb: 3 }} />

              <div>{Apartment.description}</div>

              <Divider sx={{ mt: 3, mb: 3 }} />

              <ApartmentBlock title={'Заселение'}>
                <Grid container spacing={{ xs: 1, md: 2 }}>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <div style={{ display: 'flex' }}>
                        <AccessTimeIcon sx={{ mr: 1 }} />
                        Прибытие с 12:00
                      </div>
                      <div style={{ display: 'flex' }}>
                        <AccessTimeIcon sx={{ mr: 1 }} />
                        Выезд с 14:00
                      </div>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <div style={{ display: 'flex' }}>
                        <HighlightOffRoundedIcon sx={{ color: 'red', mr: 1 }} />
                        Без раннего заезда
                      </div>
                      <div style={{ display: 'flex' }}>
                        <CheckCircleOutlineIcon
                          sx={{ color: 'green', mr: 1 }}
                        />
                        Поздний выезд
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Alert severity='info' sx={{ mt: { xs: 2, md: 4 } }}>
                  После связи с хозяином вам будет доступна инструкция по
                  заселению
                </Alert>
              </ApartmentBlock>

              <Divider sx={{ mt: 3, mb: 3 }} />

              <ApartmentBlock title={'Удобства'}>
                <Grid container spacing={{ xs: 1 }}>
                  {Apartment.options.map((option, i) => (
                    <Grid item xs={12} md={5} key={i}>
                      <div style={{ display: 'flex' }}>
                        <CheckCircleOutlineIcon
                          sx={{ color: 'green', mr: 1 }}
                        />
                        {option}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </ApartmentBlock>

              <Divider sx={{ mt: 3, mb: 3 }} />

              <ApartmentBlock title={'Правила проживания'}>
                <Grid container spacing={{ xs: 1, md: 2 }}>
                  <Grid item xs={12} md={5}>
                    <Stack spacing={1}>
                      {Apartment.rules.allowed.map((rule, i) => (
                        <div style={{ display: 'flex' }} key={i}>
                          <CheckCircleOutlineIcon
                            sx={{ color: 'green', mr: 1 }}
                          />
                          {rule}
                        </div>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Stack spacing={1}>
                      {Apartment.rules.forbidden.map((rule, i) => (
                        <div style={{ display: 'flex' }} key={i}>
                          <HighlightOffRoundedIcon
                            sx={{ color: 'red', mr: 1 }}
                          />
                          {rule}
                        </div>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </ApartmentBlock>
            </Grid>
            <Grid item xs={12} md={1} />

            {isMobile ? (
              <ApartmentMobilePinnedBlock />
            ) : (
              <Grid item xs={12} md={4}>
                <ApartmentPinnedBlock />
              </Grid>
            )}
          </Grid>

          <Divider sx={{ mt: 3, mb: 3 }} />

          <ApartmentBlock title={'На карте'} id='map'>
            <Box sx={{ height: { xs: '162px', sm: '320px', lg: '510px' } }}>
              <iframe
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                src='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
                frameBorder='0'
                scrolling='no'
              />
            </Box>
          </ApartmentBlock>

          <Divider sx={{ mt: 4, mb: 4 }} />

          <ApartmentBlock title={'Хозяин'}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <ApartmentOwnerAboutBlock />
              </Grid>
              <Grid item xs={12} md={1} />
              <Grid item xs={12} md={3}>
                <Typography sx={{ mb: 3 }}>Скорость ответа: 1 час</Typography>
                <Button variant='outlined'>Задать вопрос хозяину</Button>
              </Grid>
            </Grid>
          </ApartmentBlock>
        </Container>
      </section>
    </div>
  );
};
