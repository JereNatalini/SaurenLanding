import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import theme from '../../../theme';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import banner from '../../../assets/images/banner.png';
import momentosLogo from '../../../assets/logos/LogoMomentos.png';
import tiendaImg from '../../../assets/images/tienda.png';
import carritoImg from '../../../assets/images/carrito.png';

/**
 * HeroSection con hero mejor distribuido,
 * contenido centrado con proporciones ajustadas,
 * ScrollFloat en el headline, previews abajo.
 */
const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const previews = [
    { image: tiendaImg, label: 'Tienda' },
    { image: carritoImg, label: 'Carrito' }
  ];

  return (
    <>
      {/* Hero */}
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
              sx={{ width: { xs: 150, md: 200 }, mb: 3 }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 700, mb: 2, color: '#fff' }}
            >
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="top bottom"
                scrollEnd="center center"
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
                maxWidth: 480
              }}
            >
              Comparte tus recuerdos más preciados y conéctate con quienes amas a través de nuestra plataforma intuitiva.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: 'none', px: 5, py: 1.5 }}
            >
              Comenzar ahora
            </Button>
          </Box>

          {/* Right: Hero Illustration */}
          <Box
            sx={{ flex: '0 0 40%', zIndex: 1 }}
            data-aos="fade-left"
          >
            <Box
              component="img"
              src={tiendaImg}
              alt="Vista previa de tienda"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 4
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Previews Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          py: { xs: 4, md: 8 }
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}
            data-aos="fade-up"
          >
            Conoce la plataforma
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center'
            }}
          >
            {previews.map((item, idx) => (
              <Card
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                sx={{ width: 260, boxShadow: 3, borderRadius: 2 }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.label}
                  sx={{ height: 140, objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center', py: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
