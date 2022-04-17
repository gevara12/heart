import { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { ToggleColorMode } from '@components/ThemeSwitcher';
import { wrapper } from '@store/store';

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ToggleColorMode>
        <Box
          sx={{
            // display: 'grid', // this block broke some html code inside single page
            // gridTemplateRows: 'auto 1fr auto',
            display: 'flex',
            flexDirection: 'column',
            color: 'text.primary',
            bgcolor: 'background.default',
            minHeight: '100vh',
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ToggleColorMode>
    </>
  );
}

export default wrapper.withRedux(Website);
