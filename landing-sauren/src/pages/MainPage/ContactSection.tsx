import { Box, Typography, Container, useTheme, Button } from "@mui/material";
import Formulario from "../../components/Formulario";
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate('/contact');
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: 3,
        backgroundColor: theme.palette.grey[900],
        borderTopRightRadius: "10%",
        borderTopLeftRadius: "10%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "stretch", // Cambiado para igualar alturas
            justifyContent: "center",
          }}
        >
          {/* Sección de texto (izquierda) */}
          <Box sx={{ 
            flex: 1, 
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between" // Distribuye el espacio verticalmente
          }}>
            <Box>
              <Typography variant="h2" gutterBottom sx={{ color: theme.palette.common.white, mb: 4 }}>
                Transformemos tu idea en realidad
              </Typography>

              <Box component="ul" sx={{ pl: 0, listStyleType: "none" }}>
                <Typography component="li" variant="body1" mb={3} sx={{ color: theme.palette.grey[400] }}>
                  <strong>1.</strong> Compártenos tus requerimientos - evaluamos tu proyecto en 48h
                </Typography>
                <Typography component="li" variant="body1" mb={3} sx={{ color: theme.palette.grey[400] }}>
                  <strong>2.</strong> Recibe una propuesta a medida con solución y presupuesto
                </Typography>
                <Typography component="li" variant="body1" mb={3} sx={{ color: theme.palette.grey[400] }}>
                  <strong>3.</strong> Firma digital y comenzamos a trabajar inmediatamente
                </Typography>
                <Typography component="li" variant="body1" mb={5} sx={{ color: theme.palette.grey[400] }}>
                  <strong>4.</strong> Implementación rápida con soporte continuo
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="h2" gutterBottom sx={{ color: theme.palette.common.white, mb: 2 }}>
                ¿Hablamos hoy mismo?
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.grey[400], mb: 3 }}>
                Agenda una llamada rápida con nuestro equipo de especialistas
              </Typography>
              <Button
                variant="contained"
                onClick={goToContactPage}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Contáctanos
              </Button>
            </Box>
          </Box>

          {/* Sección del formulario (derecha) */}
          <Box sx={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%", // Toma el 100% de la altura del contenedor padre
          }}>
            <Formulario />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;