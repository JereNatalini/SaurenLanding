import React from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import TrueFocusWrapper from "../../components/TrueFocusWrapper";
import Particles from "../../Backgrounds/Particles/Particles";

// Importar los iconos
import barCodeScanner from "../../assets/BusinessTechUpdate/barCodeScanner.webp";
import glasess from "../../assets/BusinessTechUpdate/glasess.webp";
import ia from "../../assets/BusinessTechUpdate/ia.webp";
import iphone11 from "../../assets/BusinessTechUpdate/iphone11.webp";
import qrCode from "../../assets/BusinessTechUpdate/qrCode.webp";
import terminal from "../../assets/BusinessTechUpdate/terminal.webp";
import botDog from "../../assets/BusinessTechUpdate/botDog.webp";
import camera from "../../assets/BusinessTechUpdate/camera.webp";
import drone from "../../assets/BusinessTechUpdate/drone.webp";
import ibmPc from "../../assets/BusinessTechUpdate/ibmPc.webp";
import screen from "../../assets/BusinessTechUpdate/screen.webp";

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

      {/* Iconos dispersos */}
      <Box
        component="img"
        src={barCodeScanner}
        alt="Bar Code Scanner"
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: { xs: "80px", md: "100px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(5deg)' }
        }}
      />
      <Box
        component="img"
        src={glasess}
        alt="Glasses"
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: { xs: "80px", md: "110px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(-5deg)' }
        }}
      />
      <Box
        component="img"
        src={ia}
        alt="AI Icon"
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: { xs: "90px", md: "120px" },
          opacity: 0.3,
          zIndex: 0,
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      />
      <Box
        component="img"
        src={iphone11}
        alt="iPhone"
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: { xs: "70px", md: "90px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(5deg)' }
        }}
      />
      <Box
        component="img"
        src={qrCode}
        alt="QR Code"
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: { xs: "60px", md: "80px" },
          opacity: 0.3,
          zIndex: 0,
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(-5deg)' }
        }}
      />
      <Box
        component="img"
        src={terminal}
        alt="Terminal"
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "20%",
          width: { xs: "80px", md: "100px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      />
      <Box
        component="img"
        src={botDog}
        alt="Bot Dog"
        sx={{
          position: "absolute",
          top: "5%",
          left: "25%",
          width: { xs: "90px", md: "110px" },
          opacity: 0.3,
          zIndex: 0,
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(5deg)' }
        }}
      />
      <Box
        component="img"
        src={camera}
        alt="Camera"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: { xs: "70px", md: "90px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(-5deg)' }
        }}
      />
      <Box
        component="img"
        src={drone}
        alt="Drone"
        sx={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: { xs: "100px", md: "130px" },
          opacity: 0.3,
          zIndex: 0,
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      />
      <Box
        component="img"
        src={ibmPc}
        alt="IBM PC"
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: { xs: "90px", md: "120px" },
          opacity: 0.3,
          zIndex: 0,
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(5deg)' }
        }}
      />
      <Box
        component="img"
        src={screen}
        alt="Screen"
        sx={{
          position: "absolute",
          top: "15%",
          left: "40%",
          width: { xs: "80px", md: "100px" },
          opacity: 0.3,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(-5deg)' }
        }}
      />
      {/* Repeticiones para simetría */}
      <Box
        component="img"
        src={ia}
        alt="AI Icon"
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "18%",
          width: { xs: "70px", md: "100px" },
          opacity: 0.2,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      />
      <Box
        component="img"
        src={qrCode}
        alt="QR Code"
        sx={{
          position: "absolute",
          top: "35%",
          left: "3%",
          width: { xs: "50px", md: "70px" },
          opacity: 0.2,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(5deg)' }
        }}
      />
      <Box
        component="img"
        src={drone}
        alt="Drone"
        sx={{
          position: "absolute",
          bottom: "30%",
          right: "10%",
          width: { xs: "80px", md: "110px" },
          opacity: 0.2,
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.1) rotate(-5deg)' }
        }}
      />

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
            Sabemos que necesitas{" "}
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
                borderColor="red"
                glowColor="rgba(255, 0, 0, 0.6)"
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

