import React from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";

const BusinessTechUpdate: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2E3192, #ED1C24)", // 🔥 Fondo llamativo
        color: "#fff", // Texto en blanco para contraste
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        textAlign: "center",
      }}
    >
      <Container>
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
            margin: "0 auto",
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
      </Container>
    </Box>
  );
};

export default BusinessTechUpdate;
