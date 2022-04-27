import { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import { ToggleColorMode } from '@components/ThemeSwitcher';
import { wrapper } from '@store/store';

function Website({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider>
      <CssBaseline />
      <ToggleColorMode>
        <Box
          sx={{
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
    </StyledEngineProvider>
  );
}

export default wrapper.withRedux(Website);
