import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const OurMissionSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
        py: { xs: 6, md: 0 },
        opacity: 0,
        animation: 'slideIn 1s forwards',
        '@keyframes slideIn': {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-end' },
          textAlign: { xs: 'center', md: 'right' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', md: '3rem' },
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#231F20',
          }}
        >
          Nuestra <span style={{ color: '#ED1C24' }}>Misión</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: '90%', md: '60%' },
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          Creemos en el poder de la innovación para transformar negocios. 
          Nuestra misión es diseñar y desarrollar soluciones de software a medida que 
          impulsan la eficiencia y generan un impacto real en la productividad de 
          nuestros clientes. Integrando las últimas tecnologías y metodologías ágiles, 
          nos comprometemos a entregar resultados de alta calidad.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: '90%', md: '60%' },
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          Trabajamos en colaboración con nuestros clientes para co-crear estrategias 
          tecnológicas que aseguren el crecimiento y la sostenibilidad a largo plazo.
        </Typography>
      </Container>
    </Box>
  );
};

export default OurMissionSection;
