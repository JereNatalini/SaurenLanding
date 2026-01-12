import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const OurTeamSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: { xs: 6, md: 0 },
        opacity: 0,
        animation: 'fadeInUp 1s forwards',
        '@keyframes fadeInUp': {
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
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', md: '3rem' },
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#231F20',
          }}
        >
          Nuestro <span style={{ color: '#ED1C24' }}>Equipo</span>
        </Typography>

        <Box
          sx={{
            maxWidth: { xs: '95%', md: '75%' },
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.15rem' },
              lineHeight: 1.8,
              mb: 3,
              color: theme.palette.text.primary,
              fontWeight: 400,
            }}
          >
            Profesionales que han trabajado en empresas como{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#ED1C24' }}>
              MercadoLibre
            </Box>
            ,{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#ED1C24' }}>
              Globant
            </Box>
            ,{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#ED1C24' }}>
              Naranja
            </Box>
            {' '}y otras compañías de tecnología reconocidas internacionalmente.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 3,
              color: theme.palette.text.secondary,
              fontStyle: 'italic',
            }}
          >
            Cubrimos el ciclo completo de desarrollo: análisis, diseño, implementación, 
            testing y despliegue. Trabajamos con tecnologías modernas como React, TypeScript, 
            Node.js, Java, PHP y AWS.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
            }}
          >
            Aplicamos{' '}
            <Box component="span" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
              metodologías ágiles
            </Box>
            , pruebas automatizadas y las mejores prácticas de la industria para 
            garantizar calidad y transparencia en cada proyecto.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
