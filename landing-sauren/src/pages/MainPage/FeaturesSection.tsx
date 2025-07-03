import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import momentosps from '../../assets/images/momentosPresta.png';
import wepointLogin from '../../assets/images/WepointLogin.png';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const goToWepoint = () => navigate('/wepoint');
  const goToMomentos = () => navigate('/momentosInolvidables');
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

      {/* Contenedor de proyectos con diseño minimalista */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 6, md: 10 }, // Espaciado entre proyectos
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
            ':hover': {
              transform: 'translateY(-5px)',
            },
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
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              wepoint.ar
            </Typography>
            <Typography variant="body1" color="text.pallete.text.primary" sx={{ mb: 3 }}>
              Aplicación de gestión de stock con visualización de existencias en tiempo real.
            </Typography>
            <Button
              variant="outlined"
              onClick={goToWepoint}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                ':hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              Ver más
            </Button>
          </Box>
        </Box>

        {/* Proyecto 2: Momentos Inolvidables */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' }, // Invertir orden en desktop
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            p: { xs: 2, md: 4 },
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)',
            },
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
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: theme.palette.primary.main,
                fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.125rem' }, // Ajuste de tamaño de fuente responsivo
              }}
            >
              momentosinolvidables.com.ar
            </Typography>
            <Typography variant="body1" color="text.pallete.text.primary" sx={{ mb: 3 }}>
              Tienda web para Momentos Inolvidables, con integración hacia Wepoint.
            </Typography>
            <Button
              variant="outlined"
              onClick={goToMomentos}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                ':hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              Ver más
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsSection;