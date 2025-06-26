import React, { useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import theme from '../../../theme';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import banner from '../../../assets/images/banner.png';
import momentosLogo from '../../../assets/logos/LogoMomentos.png';

/**
 * HeroSection component para "Momentos Inolvidables" landing
 * Solo la sección Hero, sin previews.
 */
const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: '60vh', md: '80vh' },
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, md: 0 }
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          py: { xs: 6, md: 0 }
        }}
      >
        {/* Left: Logo, Headline, CTA */}
        <Box
          sx={{
            flex: '0 0 55%',
            textAlign: { xs: 'center', md: 'left' },
            zIndex: 1
          }}
          data-aos="fade-right"
        >
          <Box
            component="img"
            src={momentosLogo}
            alt="Logo Momentos Inolvidables"
            sx={{ width: { xs: 120, md: 180 }, mb: 3 }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, mb: 2, color: '#fff' }}
          >
            <ScrollFloat
              animationDuration={1}
              ease="power2.out"
              scrollStart="top 90%"
              scrollEnd="center 60%"
              stagger={0.02}
            >
              Vive <Box component="span" sx={{ color: theme.palette.primary.main }}>Momentos</Box> inolvidables
            </ScrollFloat>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#eee',
              mb: 4,
              lineHeight: 1.6,
              maxWidth: 480,
              mx: { xs: 'auto', md: '0' }
            }}
          >
            Comparte tus recuerdos más preciados y conéctate con quienes amas a través de nuestra plataforma intuitiva.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: 'none' }}
          >
            Comenzar ahora
          </Button>
        </Box>

        {/* Right: Hero Illustration */}
        <Box sx={{ flex: '0 0 40%', zIndex: 1 }} data-aos="fade-left" data-aos-delay="150">
          <Box
            component="img"
            src={banner}
            alt="Banner Momentos"
            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
