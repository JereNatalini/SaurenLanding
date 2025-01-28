import React, { useEffect } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { FaFlagCheckered, FaRocket, FaCodeBranch, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    icon: <FaRocket />,
    title: "Lanzamiento",
    date: "Q1 2025",
    description: "Versión inicial con funcionalidad básica",
    side: "left",
  },
  {
    icon: <FaCodeBranch />,
    title: "Desarrollo",
    date: "Q2 2025",
    description: "Implementación de características avanzadas",
    side: "right",
  },
  {
    icon: <FaChartLine />,
    title: "Optimización",
    date: "Q3 2025",
    description: "Mejoras de rendimiento y experiencia",
    side: "left",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Madurez",
    date: "Q4 2025",
    description: "Versión estable final y soporte completo",
    side: "right",
  },
];

const RoadmapWP: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.secondary.main;

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100%",
        py: 8,
        px: { xs: 2, md: 6 },
        background: theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      {/* Línea central */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "150px",
          bottom: 0,
          width: "4px",
          background: `linear-gradient(to bottom, ${primaryColor} 0%, #333333 100%)`,
          transform: "translateX(-50%)",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 8,
          color: theme.palette.text.primary,
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          zIndex: 2,
        }}
      >
        Roadmap
      </Typography>

      {/* Contenedor de pasos */}
      <Box>
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: step.side === "left" ? "row" : "row-reverse",
              alignItems: "center",
              position: "relative",
              mb: 8,
            }}
            data-aos="zoom-in" // Agregamos animación de fade-up
            data-aos-delay={`${index * 200}`} // Establecemos un retraso en función del índice
          >
            {/* Conector curvado */}
            <Box
              sx={{
                position: "absolute",
                width: "120px",
                height: "100px",
                border: `2px solid ${primaryColor}`,
                borderRadius: step.side === "left" ? "0 100% 0 0" : "100% 0 0 0",
                borderTop: "none",
                borderLeft: step.side === "left" ? "none" : "2px solid",
                borderRight: step.side === "left" ? "2px solid" : "none",
                top: "50%",
                transform: step.side === "left" ? "translate(-50%, -50%)" : "translate(50%, -50%)",
                left: step.side === "left" ? "50%" : "auto",
                right: step.side === "left" ? "auto" : "50%",
              }}
            />

            {/* Contenido del paso */}
            <Paper
              sx={{
                width: { xs: "100%", md: "400px" },
                p: 3,
                background: "#f9f9f9", // Fondo claro para buen contraste
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                border: `1px solid ${primaryColor}`,
                position: "relative",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0px 4px 20px ${primaryColor}`,
                },
                zIndex: 1, // Reducido para evitar conflictos con el hover
              }}
            >
              {/* Icono del paso */}
              <Box
                sx={{
                  position: "absolute",
                  [step.side === "left" ? "right" : "left"]: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "50px",
                  height: "50px",
                  background: primaryColor,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 15px ${primaryColor}`,
                  color: "#fff",
                  fontSize: "1.5rem",
                }}
              >
                {step.icon}
              </Box>

              {/* Texto */}
              <Typography
                variant="h5"
                sx={{
                  color: primaryColor,
                  mb: 1,
                  fontWeight: "bold",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#555", // Texto más oscuro para contraste
                  mb: 2,
                  fontWeight: "500",
                }}
              >
                {step.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#333", // Más contraste para el cuerpo del texto
                  lineHeight: "1.6",
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RoadmapWP;
