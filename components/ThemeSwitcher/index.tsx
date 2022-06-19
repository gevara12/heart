import * as React from 'react';
import { useDarkMode } from 'usehooks-ts';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

import { grey } from '@mui/material/colors';


declare module '@mui/material/styles' {
    interface Theme {
        gradient: {
          main: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      gradient?: {
            main?: string;
        };
    }
}

export enum Theme {
  light = 'light',
  dark = 'dark',
}

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600+48,
    md: 900+48,
    lg: 1200+48,
    xl: 1536,
  },
};

const lightTheme = createTheme({
  breakpoints: {...customBreakpoints},
  gradient:{
    main:'linear-gradient(90deg, #F3E7E9 0%, #E3EEFF 99%, #E3EEFF 100%)'
  },
  palette: {
    mode: Theme.light,
    primary: {
      main: '#00a699',
    },
    secondary: {
      main: '#ff5a5f',
    },
    background: {
      default: '#fff',
      paper: grey[50],
    },
    text: {
      primary: grey[900],
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

const darkTheme = createTheme({
  breakpoints: {...customBreakpoints},
  gradient:{
    main:'linear-gradient(90deg, #485563 0%, #29323C 100%)'
  },
  palette: {
    mode: Theme.dark,
    primary: {
      main: '#00a699',
    },
    secondary: {
      main: '#ff5a5f',
    },
    background: {
      default: '#121212',
      paper: grey[900],
    },
    text: {
      primary: grey[50],
    },
  },
});

export const ToggleColorMode = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { isDarkMode } = useDarkMode();
  const [themeConf, setThemeConf] = React.useState(lightTheme);
  const [mode, setMode] = React.useState(Theme.light);

  React.useEffect(() => {
    setMode(isDarkMode ? Theme.dark : Theme.light);
    setThemeConf(isDarkMode ? darkTheme : lightTheme);
  }, [mode, isDarkMode]);

  return (
    <ThemeProvider theme={themeConf}>
      <div data-theme={mode}>{children}</div>
    </ThemeProvider>
  );
};

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const { toggle } = useDarkMode();
  return (
    <FormControlLabel
      control={<Switch checked={theme.palette.mode === Theme.dark} sx={{ m: 1 }} onChange={toggle} color="secondary" />}
      label="Тема"
    />
  );
};
