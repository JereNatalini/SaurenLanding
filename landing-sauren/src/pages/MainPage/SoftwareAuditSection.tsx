import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";

const dynamicTexts = [
  "un E-Commerce",
  "una Integración",
  "un módulo Prestashop",
  "una App para Tiendanube",
  "un sistema propio",
  "un portal para mis clientes",
  "una API personalizada",
  "una App mobile",
  "un CRM",
  "un ERP",
  "un sistema de gestión con múltiples integraciones avanzadas",
];

// 🔥 Calcula el alto mínimo basado en el texto más largo (2 líneas)
const minHeightValue = "80px"; // Ajustable según diseño

const SoftwareAuditSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentText = dynamicTexts[index];

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
        setSpeed(120);
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));
        setSpeed(50);
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % dynamicTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [text, isDeleting]);

  return (
    <Container
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Título */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          color: theme.palette.primary.main,
        }}
      >
        ¿No sabes bien qué necesitas?
      </Typography>

      {/* Texto fijo */}
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "bold",
          maxWidth: "700px",
          mb: 4,
        }}
      >
        ¡Nuestro equipo de expertos te ayudará a elegir la solución!
      </Typography>

      {/* Contenedor con altura fija para prevenir saltos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          minHeight: minHeightValue, // 🔥 Fija un espacio suficiente para 2 líneas
          width: "100%", // Se adapta al contenedor
          maxWidth: "800px", // Evita que se extienda demasiado
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800, // Más gordito
            fontSize: { xs: "2rem", md: "2.2rem" },
            textAlign: "center",
            background: "linear-gradient(90deg, #ED1C24, #2E3192)", // Gradiente
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            overflowWrap: "break-word", // 🔥 Permite que el texto largo pase de línea
            wordBreak: "break-word", // 🔥 Evita cortes incómodos en palabras largas
          }}
        >
          Necesito {text}
          <span style={{ color: theme.palette.primary.main }}>|</span> {/* Cursor animado */}
        </Typography>
      </Box>
    </Container>
  );
};

export default SoftwareAuditSection;
