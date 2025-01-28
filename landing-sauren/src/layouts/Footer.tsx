import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email, Place, Phone } from '@mui/icons-material';
import theme from '../theme';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: '#333333', // O el color que prefieras
        pt: 4,
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        {/* Primera sección: Logo y Redes Sociales */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src={logo} alt="Sauren Logo" style={{ height: 'auto', width: '100px', maxWidth: '100%' }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Link href="https://facebook.com" color="inherit">
              <Facebook sx={{ fontSize: 28, color: theme.palette.background.paper }} />
            </Link>
            <Link href="https://twitter.com" color="inherit">
              <Twitter sx={{ fontSize: 28, color: theme.palette.background.paper }} />
            </Link>
            <Link href="https://linkedin.com" color="inherit">
              <LinkedIn sx={{ fontSize: 28, color: theme.palette.background.paper }} />
            </Link>
          </Box>
        </Box>

        {/* Segunda sección: Enlaces y Contacto */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            mb: 4
          }}
        >
          {/* Enlaces rápidos */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: theme.palette.background.paper }}>
              Compañía
            </Typography>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Sobre nosotros
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Servicios
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Proyectos
            </Link>
          </Box>

          {/* Contacto */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: theme.palette.background.paper }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Place sx={{ fontSize: 20, mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body2" sx={{ color: theme.palette.background.paper }}>
                Av. Principal 123, Lima, Perú
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Email sx={{ fontSize: 20, mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body2" sx={{ color: theme.palette.background.paper }}>
                contacto@sauren.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Phone sx={{ fontSize: 20, mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body2" sx={{ color: theme.palette.background.paper }}>
                +54 351 7 336655
              </Typography>
            </Box>
          </Box>

          {/* Legal */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: theme.palette.background.paper }}>
              Legal
            </Typography>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Términos de servicio
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Política de privacidad
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover" sx={{ mb: 1, color: theme.palette.background.paper }}>
              Política de cookies
            </Link>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid', borderColor: '#FF6600', pt: 3 }}>
          <Typography variant="body2" sx={{ color: theme.palette.background.paper }} textAlign="center">
            © {new Date().getFullYear()} Sauren. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
