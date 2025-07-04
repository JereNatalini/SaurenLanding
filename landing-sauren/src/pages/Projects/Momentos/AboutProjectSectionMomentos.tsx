import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import projectImage from '../../../assets/images/momentosps.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AboutProjectSectionMomentos: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const challenges = [
    "Adaptar PrestaShop para un modelo B2B y B2C simultáneo.",
    "Sincronizar el inventario en tiempo real con sistemas internos.",
    "Crear una experiencia de usuario atractiva y fácil de usar.",
    "Garantizar la escalabilidad de la plataforma a futuro."
  ];

  const solutions = [
    "Desarrollo de módulos a medida para la gestión de clientes y precios.",
    "Implementación de una API para la sincronización con el ERP del cliente.",
    "Diseño de una interfaz de usuario moderna y optimizada para la conversión.",
    "Optimización del rendimiento y la seguridad de la plataforma."
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Columna de la imagen */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box
              component="img"
              src={projectImage}
              alt="Visión general del proyecto Momentos"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: theme.shadows[10],
                transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: theme.shadows[20],
                }
              }}
            />
          </Grid>
          {/* Columna del texto */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
              Sobre el Proyecto <Box component="span" sx={{ color: 'primary.main' }}>Momentos</Box>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
              Momentos es una plataforma de e-commerce desarrollada para un cliente líder en el sector de juguetería, con el objetivo de modernizar y expandir su presencia digital. La solución se construyó sobre PrestaShop, adaptándose a las necesidades específicas de un modelo de negocio B2B y B2C.
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', height: '100%' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>Desafíos</Typography>
                  <Box>
                    {challenges.map((challenge, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleOutlineIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="body2">{challenge}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', height: '100%' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>Soluciones</Typography>
                  <Box>
                    {solutions.map((solution, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleOutlineIcon color="secondary" sx={{ mr: 1 }} />
                        <Typography variant="body2">{solution}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Tecnologías Utilizadas</Typography>
              <Box>
                <Chip label="PrestaShop" color="primary" sx={{ mr: 1, mb: 1 }} />
                <Chip label="PHP" color="secondary" sx={{ mr: 1, mb: 1 }} />
                <Chip label="MySQL" sx={{ mr: 1, mb: 1 }} />
                <Chip label="React" sx={{ mr: 1, mb: 1 }} />
                <Chip label="TypeScript" sx={{ mr: 1, mb: 1 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutProjectSectionMomentos;

