import React, { useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import theme from '../../../theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallToActionSectionMomentos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      backgroundColor: 'transparent',
      color: 'white',
      textAlign: 'center',
      borderRadius: '16px',
      mx: { xs: 2, md: 4 },
      my: { xs: 4, md: 8 },
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
    }} data-aos="zoom-in" data-aos-once="true">
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 3 }} data-aos="fade-up" data-aos-delay="100">
          ¿Listo para transformar tu negocio digital?
        </Typography>
        <Typography variant="h6" sx={{ mb: 5, lineHeight: 1.6 }} data-aos="fade-up" data-aos-delay="200">
          En Sauren, creamos soluciones de e-commerce a medida que impulsan tu crecimiento. Contáctanos hoy mismo para una consulta gratuita.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{
            bgcolor: 'white',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            py: 1.5,
            px: 4,
            borderRadius: '30px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out'
            }
          }}
          data-aos="zoom-in" data-aos-delay="300"
        >
          Contáctanos
        </Button>
      </Container>
    </Box>
  );
};

export default CallToActionSectionMomentos;
