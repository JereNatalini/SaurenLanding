import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme } from '@mui/material';
import { Code, AutoAwesome, Assessment } from '@mui/icons-material';

const services = [
  {
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos plataformas robustas, E-commerce, portales B2B/B2C y aplicaciones móviles diseñadas para escalar con tu negocio.',
    icon: <Code sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Integración de Inteligencia Artificial',
    description: 'Automatizamos procesos complejos, implementamos agentes conversacionales y analizamos datos para brindar predicciones precisas.',
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Auditoría y Consultoría IT',
    description: 'Analizamos la arquitectura de tus sistemas actuales para detectar cuellos de botella, problemas de seguridad y oportunidades de mejora.',
    icon: <Assessment sx={{ fontSize: 40 }} />,
  }
];

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'transparent' }} id="services">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 800,
          }}
        >
          Nuestras <span style={{ color: theme.palette.primary.main }}>Capacidades</span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            mb: 8,
            color: theme.palette.text.primary,
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9,
          }}
        >
          Combinamos experiencia técnica con las últimas innovaciones en IA para ofrecer soluciones end-to-end.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 40px ${theme.palette.primary.main}20`,
                    borderColor: `${theme.palette.primary.main}40`,
                  }
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: '12px',
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      display: 'inline-flex'
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
