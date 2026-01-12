import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';

const AboutHeroSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: { xs: 6, md: 0 },
        // Animación de aparición suave
        opacity: 0,
        animation: 'fadeIn 1s forwards',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
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
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#231F20',
            }}
          >
            Sobre <span style={{ color: '#ED1C24' }}>Nosotros</span>
          </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: '90%', md: '60%' },
            mb: 4,
            fontSize: '1.2rem',
            lineHeight: 1.6,
          }}
        >
          Somos un equipo apasionado por la tecnología y el desarrollo de software, 
          dedicados a crear soluciones innovadoras que transformen negocios y 
          mejoren la experiencia de los usuarios. Nuestra visión es inspirar la 
          transformación digital y elevar la calidad en cada proyecto.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            paddingX: 3,
            paddingY: 1.5,
          }}
          href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
          target="_blank"
        >
          Conoce Más
        </Button>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;
