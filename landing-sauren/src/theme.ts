import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
  },
  typography: {
    // Fuente por defecto para el cuerpo del texto
    fontFamily: 'NexaExtraLight, Arial, sans-serif',
    h1: {
      fontFamily: 'NexaHeavy, Arial, sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      color: '#231F20',
    },
    h2: {
      fontFamily: 'NexaHeavy, Arial, sans-serif',
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#231F20',
    },
    h3: {
      fontFamily: 'StretchPro, Arial, sans-serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '231F20',
    },
    h5: {fontFamily: 'NexaHeavy, Arial, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#231F20',
    },
    body1: {
      fontFamily: 'NexaExtraLight, Arial, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#231F20',
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
});

export default theme;
