import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

import { getCurrentUser } from '@store/auth/selectors';
import { updateAvatar } from '@store/avatar/actions';

import styles from './AddAvatar.module.css';
import { Avatar, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type TAddAvatarProps = {};

export const AddAvatar = ({}: TAddAvatarProps): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getCurrentUser);

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files[0];
    setSelectedImage(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    await dispatch(updateAvatar(formData));
  };

  return (
    <>
      <Stack spacing={{ xs: 2, sm: 6 }} direction={{ xs: 'column', sm: 'row' }}>
        {selectedImage ? (
          <div>
            <img alt="not fount" width={'250px'} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        ) : (
          <Avatar sx={{ bgcolor: grey[100], width: 230, height: 230 }} variant="square">
            {data?.avatar ? (
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={data?.avatar} alt="avatar" layout="fill" unoptimized />
              </div>
            ) : (
              <AccountCircleIcon sx={{ width: 190, height: 190, color: '#707070' }} />
            )}
          </Avatar>
        )}

        <div>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Добавьте фото, на котором вас хорошо видно, чтобы повысить доверие к вашему профилю.
          </Typography>

          <input
            style={{ display: 'none' }}
            accept="image/*"
            id="upload-file"
            type="file"
            onChange={handleUploadClick}
          />
          <label htmlFor="upload-file">
            <Button variant="outlined" component="span">
              Загрузить
            </Button>
          </label>
        </div>
      </Stack>
    </>
  );
};
