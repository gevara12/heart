import { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { ThemeSwitcher, ToggleColorMode } from '@components/ThemeSwitcher';
import { wrapper } from '@store/store';

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ToggleColorMode>
        <Box
          sx={{
            display: 'flex',
            color: 'text.primary',
            bgcolor: 'background.default',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Component {...pageProps} />
        </Box>
        <ThemeSwitcher />
      </ToggleColorMode>
    </>
  );
}

export default wrapper.withRedux(Website);
