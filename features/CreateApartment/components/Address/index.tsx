import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme, Typography } from '@mui/material';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { FORM_ADDRESS } from '@store/constants';
import { BottomStick } from '@features/CreateApartment/components/BottomStick';
import styles from './Address.module.css';


export const Address = (): React.ReactElement => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = React.useState<DaDataSuggestion<DaDataAddress> | undefined>();
  const [address, setAddress] = React.useState({});

  const token = '3c9f0cc96bc74c9a502a32038734bcd118b13e13';

  React.useEffect(() => {
    setAddress({
      address: value?.value,
      addressDetails: {
        city: value?.data?.city,
        country: value?.data?.country,
        house: value?.data?.house,
        street: value?.data?.street,
        streetType: value?.data?.street_type,
        latitude: value?.data?.geo_lat,
        longitude: value?.data?.geo_lon,
      },
    });
  }, [value]);

  React.useEffect(() => {
    dispatch({
      type: FORM_ADDRESS,
      address,
    });
  }, [address]);

  return (
    <div>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Укажите адрес
      </Typography>

      <div>
        <AddressSuggestions
          token={token}
          value={value}
          onChange={setValue}
          uid='dadata-address-order-page'
          httpCache
          inputProps={{
            style: { backgroundColor: theme.palette.background.default, color: theme.palette.text.primary },
          }}
          suggestionsClassName={styles.suggestions}
          suggestionClassName={styles.suggestion}
        />
      </div>

      <BottomStick hasPrev />
    </div>
  );
};
