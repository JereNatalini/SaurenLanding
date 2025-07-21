import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';

const features = [
  {
    icon: '🚀',
    title: 'Rendimiento Optimizado',
    description: 'Hemos optimizado Wepoint para ofrecer un rendimiento excepcional en todas las plataformas.',
  },
  {
    icon: '🔒',
    title: 'Seguridad Avanzada',
    description: 'Protegemos tus datos con las últimas tecnologías en seguridad cibernética.',
  },
  {
    icon: '🎨',
    title: 'Diseño Intuitivo',
    description: 'Una interfaz de usuario limpia y fácil de usar para una experiencia sin complicaciones.',
  },
  {
    icon: '🔄',
    title: 'Actualizaciones Constantes',
    description: 'Mantenemos Wepoint actualizado con las últimas características y mejoras.',
  },
];

const FeaturesWP: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, rgba(240, 248, 255, 0.5) 0%, rgba(230, 230, 250, 0.5) 100%)`, // Gradiente suave
          zIndex: 0,
        },
      }}
    >
      {/* Contenido de la sección */}
      <Box position="relative" zIndex={2}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: 'text.primary' }}>
          Características del Proyecto
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph sx={{ color: 'text.secondary' }}>
          Descubre todo lo que hemos implementado para mejorar tu experiencia.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mt: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              data-aos="fade-up" // Animación de aparición
              data-aos-delay={index * 250} // Retraso para que aparezcan una por una
              sx={{
                flex: '1 1 calc(25% - 32px)',
                minWidth: '250px',
                maxWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 2,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {feature.icon}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'text.primary' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Forma abstracta en la parte inferior */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          backgroundColor: theme.palette.background.paper,
          clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default FeaturesWP;