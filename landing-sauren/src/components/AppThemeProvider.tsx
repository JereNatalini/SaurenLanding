
import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Define the shape of the context
interface ThemeContextType {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: 'light',
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Define the props for the theme provider
interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => {
    const baseTheme = {
      typography: {
        fontFamily: 'NexaExtraLight, Arial, sans-serif',
        h1: {
          fontFamily: 'NexaHeavy, Arial, sans-serif',
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontFamily: 'NexaHeavy, Arial, sans-serif',
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontFamily: 'StretchPro, Arial, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 600,
        },
        h5: {
          fontFamily: 'NexaHeavy, Arial, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 600,
        },
        h6: {
          fontFamily: 'NexaHeavy, Arial, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 600,
        },
        body1: {
          fontFamily: 'NexaExtraLight, Arial, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.6,
        },
        button: {
          fontFamily: 'NexaHeavy, Arial, sans-serif',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '1.1rem',
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              borderRadius: '15px',
              boxShadow: 'none',
              maxWidth: 'none',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              fontWeight: 700,
              textTransform: 'uppercase',
            },
          },
        },
      },
    };

    return createTheme({
      ...baseTheme,
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // Palette for light mode
              primary: {
                main: '#ED1C24',
              },
              secondary: {
                main: '#2E3192',
              },
              background: {
                default: '#ffffff',
                paper: '#f5f5f5',
              },
              text: {
                primary: '#231F20',
                secondary: '#0047ab',
              },
            }
          : {
              // Palette for dark mode
              primary: {
                main: '#E53935',
              },
              secondary: {
                main: '#5C6BC0',
              },
              background: {
                default: '#121212',
                paper: '#1E1E1E',
              },
              text: {
                primary: '#E0E0E0',
                secondary: '#BB86FC',
              },
            }),
      },
    });
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
