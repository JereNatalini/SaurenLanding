import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
// Aquí importás los assets de manera estática:
import LogoMomentos from "../../assets/logos/LogoMomentos.webp";
import LogoWepoint  from "../../assets/logos/LogoWepoint.webp";
import LogoDacapo   from "../../assets/logos/LogoDacapo.webp";
import LogoCaddy    from "../../assets/logos/LogoCaddy.webp";
import LogoDinter   from "../../assets/logos/LogoDinter.webp";
import LogoMeFalta  from "../../assets/logos/LogoMeFalta.png";

const clientLogos = [
  { src: LogoMomentos, alt: "Momentos" },
  { src: LogoWepoint,  alt: "Wepoint" },
  { src: LogoDacapo,   alt: "Dacapo"  },
  { src: LogoCaddy,    alt: "Caddy"   },
  { src: LogoDinter,   alt: "Dinter"  },
  { src: LogoMeFalta,  alt: "Me Falta"},
];

const ClientsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, ${theme.palette.background.default} 100%)`,
          zIndex: 2,
        },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: "center",
            color: theme.palette.text.primary,
            fontFamily: "StretchPro, Arial, sans-serif",
          }}
        >
          EMPRESAS QUE <Box component="span" sx={{ color: theme.palette.primary.main }}>CONFÍAN</Box> EN NOSOTROS
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 4, md: 8 },
            animation: "scroll 20s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
            width: "max-content",
          }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: "120px", md: "200px" },
                px: { xs: 1, md: 2 },
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 6px 16px ${theme.palette.primary.light}`,
                },
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "60px",
                  objectFit: "contain",
                  filter: "grayscale(100%) contrast(80%)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%) contrast(100%)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) contrast(80%)")}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSection;