import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ed1c24', // Naranja
        },
        secondary: {
            main: '#ed1c24', // Azul
        },
        background: {
            default: '#ffffff', // Fondo claro
            paper: '#f5f5f5', // Fondo para tarjetas y áreas secundarias
        },
        text: {
            primary: '#222222', // Texto principal
            secondary: '#0047ab', // Texto secundario o de énfasis
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '3rem', fontWeight: 700, color: '#222222' },
        h2: { fontSize: '2.25rem', fontWeight: 600, color: '#222222' },
        body1: { fontSize: '1rem', lineHeight: 1.6, color: '#222222' },
        button: {
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '1.1rem', // Tamaño ajustado
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
