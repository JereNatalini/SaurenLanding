import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import momentosps from '../../assets/images/momentosPresta.png';
import wepointLogin from '../../assets/images/WepointLogin.png';
import caddyLanding from '../../assets/images/caddyLanding.png';

const ProjectsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: "transparent",
      }}
    >
      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 2,
        }}
      >
        <span style={{ color: theme.palette.primary.main }}>CASOS DE EXITO</span>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          mb: 6,
          color: theme.palette.text.primary,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        Descubre cómo hemos transformado ideas en soluciones digitales innovadoras.
      </Typography>

      {/* Contenedor de proyectos */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 6, md: 10 },
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {/* Proyecto 1: Wepoint */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            p: { xs: 2, md: 4 },
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-5px)' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', md: '50%' },
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={wepointLogin}
              alt="Portal para el empleado de Wepoint"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: '250px', md: '400px' },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}>
              wepoint.ar
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
              Aplicación de gestión de stock con visualización de existencias en tiempo real.
            </Typography>
          </Box>
        </Box>

        {/* Proyecto 2: Momentos Inolvidables */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            p: { xs: 2, md: 4 },
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-5px)' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', md: '50%' },
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={momentosps}
              alt="Tienda web para Momentos Inolvidables"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: '250px', md: '400px' },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main, fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.125rem' } }}>
              momentosinolvidables.com.ar
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
              Tienda web para Momentos Inolvidables, con integración hacia Wepoint.
            </Typography>
          </Box>
        </Box>

        {/* Proyecto 3: Caddy */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            p: { xs: 2, md: 4 },
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-5px)' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', md: '50%' },
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={caddyLanding}
              alt="Landing page para Caddy"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: '250px', md: '400px' },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}>
              caddy.com.ar
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
              App web/mobile de envios. Abarcando desde la solicitud del envio hasta la entrega del paquete.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default ProjectsSection;