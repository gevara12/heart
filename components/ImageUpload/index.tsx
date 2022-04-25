import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Fab, Grid, TextField } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { addImage } from '@store/images/actions';
// import { getImagesList } from '@store/images/selectors';

import styles from './ImageUpload.module.css';

type TImageUploadProps = { id: string };

export const ImageUpload = ({ id }: TImageUploadProps): React.ReactElement => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState<string>('');

  const changeTitleHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [selectedImages, setSelectedImages] = React.useState([]);

  const handleUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files[0];
    const files = Array.from(event?.target?.files);
    console.info('files', files);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    formData.append('title', title);

    // console.info('formData', formData);

    files.forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImages((arr) => [...arr, { file, imageUrl: reader.result }]);
      };
      reader.readAsDataURL(file);
    });

    // @ts-ignore
    // dispatch(addImage(formData));
  };

  console.info('images', selectedImages);

  return (
    <div>
      <input
        className={styles.input}
        accept="image/*"
        id="upload-file"
        multiple
        type="file"
        onChange={handleUploadClick}
      />
      <label htmlFor="upload-file">
        <Button variant="outlined" component="span">
          Загрузить
        </Button>
      </label>
      <TextField
        size="small"
        id="title"
        value={title}
        label="Название"
        variant="outlined"
        onChange={changeTitleHandle}
      />

      {selectedImages && (
        <Grid>
          {selectedImages.map((item) => (
            <div>
              <img src={item.imageUrl} alt="preview" />
            </div>
          ))}
        </Grid>
      )}
    </div>
  );
};
