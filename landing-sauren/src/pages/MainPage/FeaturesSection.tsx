import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { BusinessCenter, Storage, ShoppingCart } from '@mui/icons-material';
import theme from '../../theme';

const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
      }}
    >
      {/* Título */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Talento impulsando <span style={{ color: theme.palette.secondary.main }}>Historias de Éxito</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: theme.palette.text.secondary }}>
        Estos son algunos de los proyectos que hemos desarrollado para nuestros clientes, optimizando procesos y creando valor.
      </Typography>

      {/* Contenedor basado en CSS Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, // Tres columnas en pantallas grandes
          gap: 4, // Espaciado entre columnas y filas
        }}
      >
        {/* Proyecto 1: Portal para el empleado de Wepoint */}
        <Card
          sx={{
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="../src/assets/images/3.png"
            alt="Portal para el empleado de Wepoint"
            sx={{ height: '200px', objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box>
              <Chip
                icon={<Storage />}
                label="Gestión de Warehouse"
                sx={{ mb: 2, color: '#FFF', backgroundColor: theme.palette.primary.main }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}>
                Portal para el empleado de Wepoint
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Aplicación de gestión de ingreso y egreso de productos al warehouse.
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#FFF',
                ':hover': { backgroundColor: theme.palette.primary.dark },
              }}
            >
              Ver caso
            </Button>
          </CardContent>
        </Card>

        {/* Proyecto 2 y Proyecto 3: Aplica el mismo patrón */}
        {/* Portal para el cliente de Wepoint */}
        <Card
          sx={{
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="../src/assets/images/1.png"
            alt="Portal para el cliente de Wepoint"
            sx={{ height: '200px', objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box>
              <Chip
                icon={<BusinessCenter />}
                label="Gestión de Clientes"
                sx={{ mb: 2, color: '#FFF', backgroundColor: theme.palette.secondary.main }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.secondary.main }}>
                Portal para el cliente de Wepoint
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Gestión de órdenes, productos y demás funcionalidades para el warehouse.
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: '#FFF',
                ':hover': { backgroundColor: theme.palette.secondary.dark },
              }}
            >
              Ver caso
            </Button>
          </CardContent>
        </Card>

        {/* Proyecto 3: Tienda web en Prestashop */}
        <Card
          sx={{
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="../src/assets/images/2.png"
            alt="Tienda web para Momentos Inolvidables"
            sx={{ height: '200px', objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box>
              <Chip
                icon={<ShoppingCart />}
                label="E-Commerce"
                sx={{ mb: 2, color: '#FFF', backgroundColor: theme.palette.primary.main }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}>
                Tienda web en Prestashop
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Tienda web para Momentos Inolvidables, con integración hacia Wepoint.
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#FFF',
                ':hover': { backgroundColor: theme.palette.primary.dark },
              }}
            >
              Ver caso
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
