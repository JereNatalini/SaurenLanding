import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
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
  "un ERP"
];

const minHeightValue = "80px"; // 🔥 Fija un espacio para evitar saltos

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
        py: { xs: 6, md: 10, lg: 12 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🔹 Título */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          mb: 2,
          color: theme.palette.primary.main,
        }}
      >
        ¿No sabes bien qué necesitas?😅
      </Typography>

      {/* 🔹 Texto fijo con énfasis en "auditoría gratuita" */}
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "bold",
          maxWidth: "700px",
          mb: 4,
          fontSize: { xs: "1.3rem", md: "2rem" }
        }}
      >
        ¡Solicita tu{" "}
        <span style={{ color: theme.palette.primary.main }}>auditoría gratuita</span>{" "}
        y nuestro equipo de expertos te ayudará a elegir la mejor solución!
      </Typography>

      {/* 🔹 Contenedor con altura fija para prevenir saltos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          minHeight: minHeightValue,
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.2rem" },
            textAlign: "center",
            background: "linear-gradient(90deg, #ED1C24, #2E3192)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          Necesito {text}
          <span style={{ color: theme.palette.primary.main }}>|</span> {/* Cursor animado */}
        </Typography>
      </Box>

      {/* 🔹 Botón CTA (Call to Action) */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          py: 2,
          px: 4,
          fontSize: "1.2rem",
          fontWeight: "bold",
          textTransform: "none",
          background: "linear-gradient(90deg, #ED1C24, #2E3192)",
          color: "#fff",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            background: "linear-gradient(90deg, #2E3192, #ED1C24)",
          },
        }}
      >
        Quiero mi auditoría
      </Button>
    </Container>
  );
};

export default SoftwareAuditSection;
