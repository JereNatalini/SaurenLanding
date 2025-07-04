import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import theme from '../../../theme';
import projectImage from '../../../assets/images/momentosps.png'; // Placeholder image
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutProjectSectionMomentos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right" data-aos-once="true">
            <Box
              component="img"
              src={projectImage}
              alt="Project Overview"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03) rotate(2deg)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left" data-aos-once="true">
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 3 }} data-aos="fade-up" data-aos-delay="100">
              Sobre el Proyecto <Box component="span" sx={{ color: theme.palette.primary.main }}>Momentos</Box>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }} data-aos="fade-up" data-aos-delay="200">
              Momentos es una plataforma de e-commerce desarrollada para un cliente líder en el sector de juguetería, con el objetivo de modernizar y expandir su presencia digital. La solución se construyó sobre PrestaShop, adaptándose a las necesidades específicas de un modelo de negocio B2B y B2C.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }} data-aos="fade-up" data-aos-delay="300">
              Nuestro enfoque se centró en la creación de una experiencia de usuario intuitiva y atractiva, garantizando al mismo tiempo una gestión de inventario y pedidos eficiente. Se implementaron módulos personalizados para la sincronización con sistemas internos y la optimización de procesos logísticos.
            </Typography>
            <Typography variant="body1" color="text.secondary" data-aos="fade-up" data-aos-delay="400">
              El resultado es una tienda online robusta, escalable y fácil de usar, que permite a nuestro cliente llegar a un público más amplio y gestionar sus operaciones de manera más efectiva.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutProjectSectionMomentos;
