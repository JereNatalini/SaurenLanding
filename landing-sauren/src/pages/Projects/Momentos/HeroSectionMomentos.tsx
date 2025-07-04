import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import momentosLogo from '../../../assets/logos/LogoMomentos.png';
import momentosLogoWhite from '../../../assets/logos/LogoMomentosWhite.png'; // Import the white logo
import tiendaImg from '../../../assets/images/tienda1.png';
import tiendaImg2 from '../../../assets/images/tienda2.png';
import { useTheme } from '../../../components/AppThemeProvider'; // Import useTheme hook

const HeroSectionMomentos: React.FC = () => {
  const { mode } = useTheme(); // Get the current theme mode

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const logoSrc = mode === 'dark' ? momentosLogoWhite : momentosLogo;

  return (
    <Box sx={{ 
      width: '100%', 
      py: { xs: 6, md: 12 },
      pt: { xs: 10, md: 12 }, // Add more padding top on mobile
      overflow: 'hidden',
      background: 'transparent'
    }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 4, md: 2 }}>
          {/* Mobile and Desktop: Logo and Title */}
          <Grid item xs={12} md={5} sx={{ textAlign: 'center', order: { xs: 1, md: 1 } }} data-aos="fade-right">
            <Box
              component="img"
              src={logoSrc} // Use the dynamic logo source
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
                Vive <Box component="span" sx={{ color: 'primary.main' }}>Momentos</Box> Inolvidables
              </ScrollFloat>
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: 'text.secondary', 
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

          {/* Desktop: Two images side-by-side */}
          <Grid item md={7} sx={{ order: { md: 2 }, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: { md: 4 } 
            }}>
              <Box
                component="img"
                src={tiendaImg}
                alt="Juguetería Momentos 1"
                data-aos="fade-left"
                sx={{
                  width: { md: 280 },
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
                  width: { md: 280 },
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

          {/* Mobile: One image, then the other */}
          <Grid item xs={12} sx={{ order: { xs: 2, md: 3 }, display: { md: 'none' } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 4 
            }}>
              <Box
                component="img"
                src={tiendaImg}
                alt="Juguetería Momentos 1"
                data-aos="fade-up"
                sx={{
                  width: '80%',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                component="img"
                src={tiendaImg2}
                alt="Juguetería Momentos 2"
                data-aos="fade-up"
                sx={{
                  width: '80%',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
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
""
