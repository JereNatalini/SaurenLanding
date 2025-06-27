import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import theme from '../../../theme';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import momentosLogo from '../../../assets/logos/LogoMomentos.png';
import tiendaImg from '../../../assets/images/tienda1.png';
import tiendaImg2 from '../../../assets/images/tienda2.png';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <Box sx={{ 
      width: '100%', 
      py: { xs: 6, md: 12 },
      overflowX: 'hidden'
    }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Imagen izquierda */}
        <Box
          component="img"
          src={tiendaImg}
          alt="Imagen Juguetería Izquierda"
          sx={{
            width: { xs: 180, md: 280 },
            height: 'auto',
            position: 'relative',
            transform: { md: 'translateX(-25%) rotate(-10deg)' },
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            boxShadow: '12px 12px 25px rgba(0,0,0,0.15)',
            borderRadius: '10px',
            zIndex: 1,
            '&:hover': {
              transform: { md: 'translateX(-15%) rotate(-5deg)' },
              boxShadow: '15px 15px 35px rgba(0,0,0,0.2)',
            },
            [theme.breakpoints.down('md')]: {
              order: 1,
              transform: 'rotate(0)',
              width: 200,
              mb: 4
            }
          }}
        />

        {/* Contenido central */}
        <Box sx={{ 
          textAlign: 'center',
          zIndex: 3,
          px: { xs: 0, md: 4 },
          [theme.breakpoints.down('md')]: {
            order: 2,
            mb: 4
          }
        }} data-aos="fade-up">
          <Box
            component="img"
            src={momentosLogo}
            alt="Logo Momentos Inolvidables"
            sx={{ 
              width: { xs: 140, md: 250 }, 
              mb: 3, 
              mx: 'auto',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
            }}
          />

          <Typography
            variant="h3"
            component="h1"
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            <ScrollFloat
              animationDuration={0.8}
              ease="power2.out"
              scrollStart="top 95%"
              scrollEnd="center 60%"
              stagger={0.02}
            >
              Vive <Box component="span" sx={{ color: theme.palette.primary.main }}>Momentos</Box> inolvidables
            </ScrollFloat>
          </Typography>

          <Typography
            variant="body1"
            sx={{ 
              color: theme.palette.text.secondary, 
              mb: 4, 
              maxWidth: 360, 
              mx: 'auto', 
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 500
            }}
          >
            Ecommerce en PrestaShop para negocio B2B y B2C
          </Typography>
        </Box>

        {/* Imagen derecha */}
        <Box
          component="img"
          src={tiendaImg2}
          alt="Imagen Juguetería Derecha"
          sx={{
            width: { xs: 180, md: 280 },
            height: 'auto',
            position: 'relative',
            transform: { md: 'translateX(25%) rotate(10deg)' },
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            boxShadow: '12px 12px 25px rgba(0,0,0,0.15)',
            borderRadius: '10px',
            zIndex: 1,
            '&:hover': {
              transform: { md: 'translateX(15%) rotate(5deg)' },
              boxShadow: '15px 15px 35px rgba(0,0,0,0.2)',
            },
            [theme.breakpoints.down('md')]: {
              order: 3,
              transform: 'rotate(0)',
              width: 200
            }
          }}
        />
      </Container>
    </Box>
  );
};

export default HeroSection;