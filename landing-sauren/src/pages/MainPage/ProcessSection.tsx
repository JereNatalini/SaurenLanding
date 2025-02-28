import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Assignment, Search, Build, SupportAgent, BarChart } from '@mui/icons-material';
import theme from '../../theme';

const steps = [
  {
    title: 'Análisis',
    description: 'Visitamos tu empresa para analizar tus procesos y entender tus objetivos.',
    icon: <Assignment sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
  {
    title: 'Debilidades',
    description: 'Te asesoramos para perfeccionar tu idea de producto identificando oportunidades de mejora.',
    icon: <Search sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
  {
    title: 'Desarrollo',
    description: 'Creamos soluciones personalizadas para optimizar tus procesos y aumentar la productividad.',
    icon: <Build sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
  {
    title: 'Solución',
    description: 'Implementamos tus soluciones para garantizar tu eficiencia y productividad.',
    icon: <BarChart sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
  {
    title: 'Soporte',
    description: 'Ofrecemos mantenimiento continuo para adaptarnos a tus necesidades cambiantes.',
    icon: <SupportAgent sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: theme.palette.background.default,
        py: 8,
        px: { xs: 2, md: 6 },
        textAlign: 'center',
        perspective: '1000px', // Agrega profundidad real a las tarjetas
      }}
    >
      {/* Título */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 4,
          color: theme.palette.text.primary,
        }}
      >
        <span style={{ color: theme.palette.primary.main }}>NUESTROS</span> PROCESOOS
      </Typography>

      {/* Grid con tarjetas */}
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              sx={{
                minHeight: '230px', // Hace la tarjeta más gruesa visualmente
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: '15px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transformStyle: 'preserve-3d',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05) rotateX(-5deg)', // Da un efecto de inclinación realista
                  boxShadow: '0px 15px 30px rgb(221, 99, 103)',
                  border: '1px solid rgb(237, 28, 36)', // Iluminación en los bordes
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '5%',
                  width: '90%',
                  height: '20px',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderRadius: '50%',
                  filter: 'blur(10px)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover::after': {
                  opacity: 1, // Activa la sombra inferior al pasar el mouse
                },
              }}
            >
              {step.icon}
              <Typography
                variant="h2"
                sx={{ fontWeight: 'bold', mt: 2, color: theme.palette.primary.main }}
              >
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                {step.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProcessSection;
