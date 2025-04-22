import React from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  useTheme,
  Paper
} from '@mui/material';
import Formulario from '../../components/Formulario';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
        py: { xs: 6, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontFamily: theme.typography.h1.fontFamily,
              fontWeight: 700,
              letterSpacing: '2px'
            }}
          >
            ¿Hablamos?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mt: 1,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Completa el formulario o contáctanos por otros medios. 
            Estamos listos para impulsar tu proyecto.
          </Typography>
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {/* FORM */}
          <Paper
            elevation={3}
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              backgroundColor: '#1e1e1e'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#fff',
                mb: 3,
                fontFamily: theme.typography.h5.fontFamily,
                fontWeight: 600
              }}
            >
              Escríbenos
            </Typography>
            <Formulario />
          </Paper>

          {/* INFO */}
          <Paper
            elevation={3}
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.primary,
                mb: 3,
                fontFamily: theme.typography.h5.fontFamily,
                fontWeight: 600
              }}
            >
              Datos de Contacto
            </Typography>

            {[
              { icon: <PhoneIcon fontSize="large" />, text: '+54 (351) 733‑6655' },
              { icon: <EmailIcon fontSize="large" />, text: 'ventas@sauren.ar' },
              { icon: <LocationOnIcon fontSize="large" />, text: 'Hugo A. García 1603, Córdoba, Argentina' }
            ].map((item, i) => (
              <Box
                key={i}
                display="flex"
                alignItems="center"
                gap={2}
                sx={{ color: theme.palette.text.primary }}
              >
                <Box sx={{ color: theme.palette.primary.main }}>
                  {item.icon}
                </Box>
                <Typography variant="body1">{item.text}</Typography>
              </Box>
            ))}

            <Divider
              sx={{
                my: 3,
                borderColor: theme.palette.primary.main,
                opacity: 0.3
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: 'center'
              }}
            >
              © 2025 Sauren — Innovando la excelencia tecnológica.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
