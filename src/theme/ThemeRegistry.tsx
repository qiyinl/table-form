'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { lightTheme, darkTheme } from './theme';

export const ThemeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  );
}
