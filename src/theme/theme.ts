import { createTheme, ThemeOptions } from '@mui/material/styles';

const tableCellRootOverride = {
  fontFamily: '"Space Grotesk", "Courier New", monospace',
  borderBottom: '2px solid',
};

const tableCellHeadOverride = {
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Courier New", monospace',
      fontWeight: 800,
      letterSpacing: '-0.05em',
    },
    h2: {
      fontFamily: '"Space Grotesk", "Courier New", monospace',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Space Grotesk", "Courier New", monospace',
      fontWeight: 700,
    },
    button: {
      fontFamily: '"Space Grotesk", "Courier New", monospace',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 16, // Modern rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '2px solid transparent',
          transition: 'all 0.2s ease-in-out',
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        contained: {
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.5)', // 90s brutalist drop shadow
          '&:hover': {
            boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.5)',
            transform: 'translate(2px, 2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.2)', // 90s brutalist shadow for cards
          border: '2px solid',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.2s ease',
            '&.Mui-focused': {
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.2)',
              transform: 'translate(-2px, -2px)',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: tableCellRootOverride,
        head: tableCellHeadOverride as any,
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#FF007F', // Hot Pink
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00F0FF', // Cyber Blue
      contrastText: '#000000',
    },
    background: {
      default: '#F4F4F9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
  },
  components: {
    ...baseOptions.components,
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.8)',
          borderColor: '#111111',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          ...tableCellRootOverride,
          borderBottomColor: '#111111',
        },
        head: {
          ...tableCellHeadOverride,
          backgroundColor: '#FF007F',
          color: '#FFFFFF',
        } as any,
      },
    },
  },
});

export const darkTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#CCFF00', // Neon Cyber/Lime Green
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF007F', // Hot Pink
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0D0E15',
      paper: '#1A1C29',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0',
    },
  },
  components: {
    ...baseOptions.components,
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '6px 6px 0px 0px #CCFF00',
          borderColor: '#444444',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          ...tableCellRootOverride,
          borderBottomColor: '#444444',
        },
        head: {
          ...tableCellHeadOverride,
          backgroundColor: '#CCFF00',
          color: '#000000',
        } as any,
      },
    },
  },
});
