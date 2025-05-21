import { Box, Typography, Container } from "@mui/material";
import Formulario from "../../components/Formulario";

const ContactFormWithText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        px: 3,
        backgroundColor: "#333333",
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
              <Typography variant="h2" gutterBottom sx={{ color: "#ffffff", mb: 4 }}>
                Transformemos tu idea en realidad
              </Typography>

              <Box component="ul" sx={{ pl: 0, listStyleType: "none" }}>
                <Typography component="li" variant="body1" mb={3} sx={{ color: "#cccccc" }}>
                  <strong>1.</strong> Compártenos tus requerimientos - evaluamos tu proyecto en 48h
                </Typography>
                <Typography component="li" variant="body1" mb={3} sx={{ color: "#cccccc" }}>
                  <strong>2.</strong> Recibe una propuesta a medida con solución y presupuesto
                </Typography>
                <Typography component="li" variant="body1" mb={3} sx={{ color: "#cccccc" }}>
                  <strong>3.</strong> Firma digital y comenzamos a trabajar inmediatamente
                </Typography>
                <Typography component="li" variant="body1" mb={5} sx={{ color: "#cccccc" }}>
                  <strong>4.</strong> Implementación rápida con soporte continuo
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="h2" gutterBottom sx={{ color: "#ffffff", mb: 2 }}>
                ¿Hablamos hoy mismo?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cccccc" }}>
                Agenda una llamada rápida con nuestro equipo de especialistas
              </Typography>
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

export default ContactFormWithText;