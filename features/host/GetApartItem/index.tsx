import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentApartment } from '@store/apartments/selectors';
import { deleteApartmentById, fetchApartmentById } from '@store/apartments/actions';
import { IconButton, Typography } from '@mui/material';
import { CustomModal } from '@components/CustomModal';
import { hideAlert } from '@components/CustomAlert';

import DeleteIcon from '@mui/icons-material/Delete';
import { ImageUpload } from '@components/ImageUpload';

export const GetApartItemComponent = ({ id }: { id: string | string[] }): React.ReactElement => {
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
      // navigate(`/${APARTMENTS}`);
    } catch (e) {
      setOpenError(true);
      hideAlert(() => setOpenError(false));
      console.error(e);
    }
  };

  React.useEffect(() => {
    dispatch(fetchApartmentById(id));
  }, [dispatch, id]);

  console.info('currentApartment', currentApartment);

  return (
    <div>
      <Typography variant="h2">{currentApartment.name}</Typography>

      <IconButton size="small" onClick={() => handleOpen(id)}>
        <DeleteIcon />
      </IconButton>

      {/*{currentApartment.publicInfo.images &&*/}
      {/*  currentApartment.publicInfo.images.map(({ imageUrl, title, imageId }) => (*/}
      {/*    <img style={{ maxWidth: '100%' }} src={imageUrl} alt={title} key={imageId} />*/}
      {/*  ))}*/}

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={confirmationDeleting}
        title="Удалить апартаменты?"
      />

      <ImageUpload id={id} />
    </div>
  );
};
