import React from "react";
import { Box, Typography, Container } from "@mui/material";
import techImage from "../../assets/images/womenCoffee.jpg"; // 📌 Reemplaza con tu imagen real

const BusinessTechUpdate: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2E3192, #ED1C24)", // 🔥 Fondo llamativo
        color: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 📌 Columna en mobile, fila en desktop
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "80%",
              maxWidth: "600px",
              transition: "transform 0.3s ease",
              '&:hover': {
                transform: "scale(1.02)",
                '& .image-container': {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                },
                '& img': {
                  transform: "scale(1.05)",
                  filter: "grayscale(0%)",
                }
              }
            }}
          >
            {/* Fondo degradado con efecto 3D */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                width: "100%",
                height: "100%",
                background: "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)",
                transform: "rotate(-3deg)",
                borderRadius: "16px",
                zIndex: 1,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              }}
            />

            {/* Contenedor principal de la imagen */}
            <Box
              className="image-container"
              sx={{
                position: "relative",
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                zIndex: 2,
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                cursor: "pointer",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",

                  '&:after': {
                    opacity: 1,
                  },

                  '& .image-overlay': {
                    opacity: 0.3,
                  },

                  '& img': {
                    filter: "grayscale(0%) contrast(115%)",
                    transform: "scale(1.03)",
                  },

                  '& .hover-text': {
                    transform: "translateY(0)",
                  }
                },

                '&:after': {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  zIndex: 4,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }
              }}
            >
              {/* Overlay de color */}
              <Box
                className="image-overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(45deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  mixBlendMode: "soft-light",
                }}
              />

              {/* Imagen */}
              <Box
                component="img"
                src={techImage}
                alt="Tecnología actualizada"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  transformOrigin: "center",
                  transition: "all 0.4s ease",
                  filter: "grayscale(30%) contrast(105%)",
                  transform: "scale(1.01)",
                }}
              />

            </Box>
            {/* Efecto de acento decorativo */}
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                right: -10,
                width: "60px",
                height: "60px",
                background: "linear-gradient(45deg, #2E3192, #ED1C24)",
                borderRadius: "12px",
                transform: "rotate(45deg)",
                zIndex: 3,
                opacity: 0.8,
                boxShadow: "0 0 20px rgba(0, 180, 216, 0.4)",
              }}
            />
          </Box>
        </Box>

        {/* Texto a la derecha en md+ (centrado en xs) */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Título */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              mb: 3,
            }}
          >
            Mantente actualizado sin complicaciones
          </Typography>

          {/* Texto principal */}
          <Typography
            variant="h6"
            sx={{
              maxWidth: "800px",
              fontWeight: "400",
              fontSize: { xs: "1rem", md: "1.5rem" },
              opacity: 0.9,
            }}
          >
            Sabemos lo importante que es para tu negocio{" "}
            <strong>mantenerse al día con la tecnología</strong>. Pero a veces,{" "}
            <strong>elegir las herramientas adecuadas</strong> sin una guía puede
            ser difícil. ¡Nosotros estamos aquí para ayudarte a{" "}
            <strong>tomar la mejor decisión</strong> sin complicaciones!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessTechUpdate;
