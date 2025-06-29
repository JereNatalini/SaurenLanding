import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Chip, useTheme } from '@mui/material';
import { Storage, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import momentosps from '../../assets/images/momentosPresta.png';
import wepointLogin from '../../assets/images/WepointLogin.png';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const goToWepoint = () => navigate('/wepoint');
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundColor: theme.palette.background.default,
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

      {/* Contenedor de proyectos con flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Columna en móvil, fila en desktop
          gap: 4, // Espaciado entre tarjetas
          maxWidth: '1200px',
          mx: 'auto',
          justifyContent: 'center', // Centrar las tarjetas
        }}
      >
        {/* Proyecto 1: Portal para el empleado de Wepoint */}
        <Card
          sx={{
            flex: 1, // Ocupa el espacio disponible
            maxWidth: { xs: '100%', md: '400px' }, // Ancho máximo en desktop
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image={wepointLogin}
            alt="Portal para el empleado de Wepoint"
            sx={{ height: '200px', objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 'calc(100% - 200px)', // Ajuste para que el contenido no desborde
            }}
          >
            <Box>
              <Chip
                icon={<Storage />}
                label="Warehouse App"
                sx={{
                  mb: 2,
                  color: '#FFF',
                  backgroundColor: theme.palette.primary.main,
                  fontWeight: 'bold',
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                wepoint.ar
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Aplicación de gestión de stock con visualizacion de existencias en tiempo real.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              onClick={goToWepoint}
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                ':hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: '#FFF',
                },
                mt: 'auto', // Empuja el botón hacia abajo
              }}
            >
              Ver más
            </Button>
          </CardContent>
        </Card>

        {/* Proyecto 3: Tienda web en Prestashop */}
        <Card
          sx={{
            flex: 1, // Ocupa el espacio disponible
            maxWidth: { xs: '100%', md: '400px' }, // Ancho máximo en desktop
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image={momentosps}
            alt="Tienda web para Momentos Inolvidables"
            sx={{ height: '200px', objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 'calc(100% - 200px)', // Ajuste para que el contenido no desborde
            }}
          >
            <Box>
              <Chip
                icon={<ShoppingCart />}
                label="E-Commerce"
                sx={{
                  mb: 2,
                  color: '#FFF',
                  backgroundColor: theme.palette.primary.main,
                  fontWeight: 'bold',
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                momentosinolvidables.com.ar
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Tienda web para Momentos Inolvidables, con integración hacia Wepoint.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              href="/wepoint"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                ':hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: '#FFF',
                },
                mt: 'auto', // Empuja el botón hacia abajo
              }}
            >
              Ver más
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProjectsSection;