import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const ToggleColorMode = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [mode, setMode] = React.useState(Theme.light);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === Theme.light ? Theme.dark : Theme.light
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#00A699',
                },
                secondary: {
                  main: '#FF5A5F',
                },
                text: {
                  primary: 'rgba(0,0,0,0.9)',
                },
              }
            : {
                primary: {
                  main: '#00A699',
                },
                secondary: {
                  main: '#FF5A5F',
                },
                // primary: {
                //   light: '#fff1ff',
                //   main: purple[500],
                //   dark: '#af8eb5',
                //   contrastText: '#000',
                // },
                // secondary: {
                //   light: '#b6ffff',
                //   main: '#81d4fa',
                //   dark: '#4ba3c7',
                //   contrastText: '#000',
                // },
              }),
        },
      }),
    [mode]
  );

  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div data-theme={mode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    </ColorModeContext.Provider>
  );
};

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 4,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        p: 1,
        zIndex: 1300,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === Theme.dark ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};
