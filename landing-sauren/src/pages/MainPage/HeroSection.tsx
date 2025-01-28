import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import theme from '../../theme';
import mainImage from '../../assets/images/mainpage.png';

const HeroSection: React.FC = () => {
  return (
      <Container>
        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger
            alignItems: 'center',
            justifyContent: 'space-between',
            py: { xs: 4, md: 8 },
          }}
        >
          {/* Left Content (Text Section) */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, pr: { md: 4 } }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Optimiza tu Negocio con las <span style={{ color: theme.palette.secondary.main }}>Auditorías de Software</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#555', maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}>
              Mejora la calidad y el rendimiento de tus sistemas con nuestras auditorías de software personalizadas,
              diseñadas para identificar problemas, optimizar procesos y garantizar la seguridad de tu infraestructura.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>
                  50+
                </Typography>
                <Typography variant="body2">Auditorías Completadas</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>
                  20+
                </Typography>
                <Typography variant="body2">Clientes Satisfechos</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>
                  10+
                </Typography>
                <Typography variant="body2">Años de Experiencia</Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Content (Graphic Section) */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src={mainImage}
              alt="Auditorías de Software"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Container>

  );
};

export default HeroSection;
