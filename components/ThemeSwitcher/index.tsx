import * as React from 'react';
import { useDarkMode } from 'usehooks-ts';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

import { grey } from '@mui/material/colors';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

const lightTheme = createTheme({
  palette: {
    mode: Theme.light,
    primary: {
      main: '#00A699',
    },
    secondary: {
      main: '#FF5A5F',
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
  palette: {
    mode: Theme.dark,
    primary: {
      main: '#00A699',
    },
    secondary: {
      main: '#FF5A5F',
    },
    background: {
      default: '#000',
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
    setMode(isDarkMode && Theme.dark);
    setThemeConf(isDarkMode ? darkTheme : lightTheme);
  }, [mode, isDarkMode]);

  return <ThemeProvider theme={themeConf}>{children}</ThemeProvider>;
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
