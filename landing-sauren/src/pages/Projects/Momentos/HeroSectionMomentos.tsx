import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import theme from '../../../theme';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import momentosLogo from '../../../assets/logos/LogoMomentos.png';
import tiendaImg from '../../../assets/images/tienda1.png';
import tiendaImg2 from '../../../assets/images/tienda2.png';

const HeroSectionMomentos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <Box sx={{ 
      width: '100%', 
      py: { xs: 6, md: 12 },
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #f4f4f4 0%, #ffffff 100%)'
    }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 4, md: 2 }}>
          <Grid item xs={12} md={5} sx={{ textAlign: 'center', order: { xs: 2, md: 1 } }} data-aos="fade-right">
            <Box
              component="img"
              src={momentosLogo}
              alt="Logo Momentos Inolvidables"
              sx={{ 
                width: { xs: 150, md: 220 }, 
                mb: 3, 
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
                lineHeight: 1.2
              }}
            >
              <ScrollFloat
                animationDuration={0.8}
                ease="power2.out"
                scrollStart="top 95%"
                scrollEnd="center 60%"
                stagger={0.02}
              >
                Vive <Box component="span" sx={{ color: theme.palette.primary.main }}>Momentos</Box> Inolvidables
              </ScrollFloat>
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: theme.palette.text.secondary, 
                mb: 4, 
                maxWidth: 480, 
                mx: 'auto', 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontWeight: 400
              }}
            >
              Desarrollamos una solución de ecommerce completa en PrestaShop, integrando módulos a medida para una gestión eficiente de catálogos B2B y B2C.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7} sx={{ order: { xs: 1, md: 2 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
              <Box
                component="img"
                src={tiendaImg}
                alt="Juguetería Momentos 1"
                data-aos="fade-left"
                sx={{
                  width: { xs: '45%', sm: 220, md: 280 },
                  borderRadius: '12px',
                  boxShadow: '10px 10px 30px rgba(0,0,0,0.1)',
                  transform: 'rotate(-5deg)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(-2deg) scale(1.05)'
                  }
                }}
              />
              <Box
                component="img"
                src={tiendaImg2}
                alt="Juguetería Momentos 2"
                data-aos="fade-left"
                data-aos-delay="200"
                sx={{
                  width: { xs: '45%', sm: 220, md: 280 },
                  borderRadius: '12px',
                  boxShadow: '10px 10px 30px rgba(0,0,0,0.1)',
                  transform: 'rotate(5deg)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(2deg) scale(1.05)'
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSectionMomentos;
