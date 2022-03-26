import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Fab, TextField } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { addImage } from '@store/images/actions';
// import { getImagesList } from '@store/images/selectors';

import styles from './ImageUpload.module.css';

type TImageUploadProps = {};

export const ImageUpload = ({}: TImageUploadProps): React.ReactElement => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState<string>('');

  const changeTitleHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files[0];
    // console.info(file);
    let formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('id', '5619cb9b-6436-403b-beb5-5d606f15675a');
    // formData.append('id', '276bbd3b-a83f-4827-bcb8-41d9a681556c');

    // console.info('formData', formData);
    // @ts-ignore
    dispatch(addImage(formData));
  }

  // const images = useSelector(getImagesList);

  // console.info('images', images);
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
        <Fab component="span">
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
      <TextField
        size="small"
        id="title"
        value={title}
        label="Название"
        variant="outlined"
        onChange={changeTitleHandle}
      />

      {/*{images && (*/}
      {/*  <Grid>{images.map((item: TImageData) => (*/}
      {/*    <div>*/}
      {/*      <span>{item.title}</span>*/}
      {/*      <img src={item.image} alt={item.title} />*/}
      {/*    </div>*/}
      {/*  ))}</Grid>*/}
      {/*)}*/}
    </div>
  );
};
