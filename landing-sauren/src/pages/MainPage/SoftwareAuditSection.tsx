import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";

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

const SoftwareAuditSection: React.FC = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const textRef = useRef<HTMLDivElement>(null);

  // Ajustamos el tamaño de fuente basado en el ancho del contenedor
  const [fontSize, setFontSize] = useState({ xs: "2.2rem", md: "3rem" });

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

  // Efecto para ajustar el tamaño de fuente si el texto es muy largo
  useEffect(() => {
    const checkTextWidth = () => {
      if (textRef.current) {
        const containerWidth = textRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;
        
        // Si el texto ocupa más del 90% del contenedor, reducimos el tamaño
        if (textWidth > containerWidth * 0.9) {
          setFontSize({ xs: "1.8rem", md: "2.5rem" });
        } else {
          setFontSize({ xs: "2.2rem", md: "3rem" });
        }
      }
    };

    checkTextWidth();
    window.addEventListener('resize', checkTextWidth);
    
    return () => {
      window.removeEventListener('resize', checkTextWidth);
    };
  }, [text]);

  return (
    <Container
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Contenedor del texto animado con ref */}
      <Box
        ref={textRef}
        sx={{
          width: "100%",
          maxWidth: "900px",
          minHeight: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          overflow: "hidden", // Evita que el texto desbordado cause scroll
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: fontSize,
            textAlign: "center",
            background: "linear-gradient(90deg, #ED1C24, #2E3192)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            px: 2, // Padding horizontal para evitar que el texto toque los bordes
          }}
        >
          Necesito {text}
          <span style={{ 
            color: theme.palette.primary.main,
            animation: "blink 1s infinite",
            "@keyframes blink": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0 },
              "100%": { opacity: 1 },
            }
          }}>|</span>
        </Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "bold",
          maxWidth: "700px",
          mb: 4,
          fontSize: { xs: "1.5rem", md: "2.125rem" }, // Reducir tamaño en móvil
        }}
      >
        ¡Solicita tu{" "}
        <span style={{ color: theme.palette.primary.main }}>auditoría gratuita</span>{" "}
        y nuestro equipo de expertos te ayudará a elegir la mejor solución!
      </Typography>

      <Button
        component="a"
        href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
        target="_blank"
        rel="noopener noreferrer"
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