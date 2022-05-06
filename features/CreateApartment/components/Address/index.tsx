import * as React from 'react';
import { useTheme, Typography } from '@mui/material';

import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { BottomStick } from '@features/CreateApartment/components/BottomStick';
import styles from './Address.module.css';

export const Address = (): React.ReactElement => {
  const theme = useTheme();
  const [value, setValue] = React.useState<DaDataSuggestion<DaDataAddress> | undefined>();

  const token = '3c9f0cc96bc74c9a502a32038734bcd118b13e13';

  console.info(value);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Укажите адрес
      </Typography>

      <div>
        <AddressSuggestions
          token={token}
          value={value}
          onChange={setValue}
          uid="dadata-address-order-page"
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
