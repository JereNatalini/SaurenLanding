import React from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";

// Importa los logos (cambia por tus imágenes)
import logo1 from "../../assets/logos/LogoMomentos.webp";
import logo2 from "../../assets/logos/LogoWepoint.webp";
import logo3 from "../../assets/logos/LogoDacapo.webp";
import logo4 from "../../assets/logos/LogoCaddy.webp";
import logo5 from "../../assets/logos/LogoDinter.webp";
import logo6 from "../../assets/logos/LogoMeFalta.webp";

// Lista de logos de clientes
const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "#f9f9f9",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* 🔹 Título */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          Empresas que confían en nosotros
        </Typography>

        {/* 🔹 Carrusel infinito de logos */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, md: 6 },
              animation: "scroll 15s linear infinite",
              whiteSpace: "nowrap",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" }, // 🔥 Solo movemos la mitad
              },
            }}
          >
            {/* 🔥 Duplicamos los logos para efecto infinito sin cortes */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: "120px", md: "200px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt={`Cliente ${index + 1}`}
                  style={{ width: "100%", maxHeight: "80px", objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSection;
