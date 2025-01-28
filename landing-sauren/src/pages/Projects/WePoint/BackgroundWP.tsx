import React from 'react';
import { Box, Typography } from '@mui/material';


const BackgroundWP: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        px: 4,
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Fondo con imagen */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/src/assets/images/whBackground.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1, // Opacidad baja para no distraer del contenido
          zIndex: 0,
        }}
      />

      {/* Contenido de la sección */}
      <Box position="relative" zIndex={1}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ color: '#333333', fontWeight: 'bold', mb: 4 }}
        >
          ¿Qué es Wepoint?
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          paragraph
          sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
        >
          Wepoint es una plataforma innovadora diseñada para simplificar y optimizar tus procesos. Con un enfoque en la
          eficiencia y la experiencia del usuario, hemos creado una solución que se adapta a tus necesidades y te ayuda a
          alcanzar tus objetivos de manera más rápida y efectiva.
        </Typography>
      </Box>
    </Box>
  );
};

export default BackgroundWP;