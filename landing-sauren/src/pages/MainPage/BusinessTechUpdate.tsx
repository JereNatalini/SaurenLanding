import React from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";
import techImage from "../../assets/images/tryingHard.jpg"; // 📌 Reemplaza con tu imagen real

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
        {/* 📌 Imagen a la izquierda en md y lg */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" }, // Oculto en xs, visible en md+
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={techImage}
            alt="Tecnología actualizada"
            style={{
              maxWidth: "80%",
              height: "auto",
            }}
          />
        </Box>

        {/* 📌 Texto a la derecha en md+ (centrado en xs) */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* 🔹 Título */}
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

          {/* 🔹 Texto principal */}
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
