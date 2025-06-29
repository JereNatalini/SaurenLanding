import React from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import techImage from "../../assets/images/womenCoffee.jpg";
import { Link as ScrollLink } from "react-scroll";
import TrueFocusWrapper from "../../components/TrueFocusWrapper";
import Particles from "../../Backgrounds/Particles/Particles";

const BusinessTechUpdate: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: "transparent", // Fondo transparente
        color: theme.palette.text.primary, // Color de texto por defecto
      }}
    >
      {/* Partículas animadas */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          zIndex: 0,
          maxWidth: "800px", // Limitar el ancho para centrar en el texto
          maxHeight: "400px", // Limitar la altura para centrar en el texto
        }}
      >
        <Particles
          particleColors={[theme.palette.primary.main]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={true}
          disableRotation={false}
        />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column", // Siempre columna para centrar
          alignItems: "center", // Centrar horizontalmente
          textAlign: "center", // Centrar texto
          gap: { xs: 4, lg: 8 },
        }}
      >
        {/* Contenido de texto */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centrar horizontalmente
            textAlign: "center", // Centrar texto
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              textShadow: "none", // Eliminar sombra de texto
              color: theme.palette.text.primary, // Color de texto por defecto
            }}
          >
            Transforma tu negocio con{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                position: "relative",
                zIndex: 2,
              }}
            >
              <TrueFocusWrapper
                text="tecnología inteligente"
                manualMode={false}
                blurAmount={3}
                borderColor={theme.palette.secondary.light}
                glowColor="rgba(255, 255, 255, 0.6)"
                animationDuration={0.4}
                pauseBetweenAnimations={1.5}
              />
            </Box>
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              maxWidth: "600px",
              opacity: 0.9,
              textShadow: "none", // Eliminar sombra de texto
              color: theme.palette.text.primary,
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
              En un mundo que cambia rápidamente,{" "}
              <strong>mantenerse actualizado</strong> es clave para el éxito.
              Nuestras soluciones están diseñadas para{" "}
              <strong>simplificar la tecnología</strong> y ayudarte a tomar
              decisiones informadas sin complicaciones.
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: "50px",
                boxShadow: `0 4px 20px rgba(0,0,0,0.1)`, // Sombra más suave
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 6px 24px ${theme.palette.primary.main}`,
                },
                transition: "all 0.3s ease",
              }}
              href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
            >
              Descubre cómo
            </Button>

            <Button
              component={ScrollLink}
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              variant="outlined"
              color="primary" // Usar color primario para el borde
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: "50px",
                borderWidth: "2px",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.05)", // Fondo más suave al pasar el ratón
                  borderWidth: "2px",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver casos de éxito
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessTechUpdate;
