import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import InfiniteScroll from "../../components/InfiniteScroll/InfiniteScroll";
// Importación de logos
import LogoMomentos from "../../assets/logos/LogoMomentos.webp";
import LogoWepoint from "../../assets/logos/LogoWepoint.webp";
import LogoDacapo from "../../assets/logos/LogoDacapo.webp";
import LogoCaddy from "../../assets/logos/LogoCaddy.webp";
import LogoDinter from "../../assets/logos/LogoDinter.webp";
import LogoMeFalta from "../../assets/logos/LogoMeFalta.png";

const clientLogos = [
  { src: LogoMomentos, alt: "Momentos" },
  { src: LogoWepoint, alt: "Wepoint" },
  { src: LogoDacapo, alt: "Dacapo" },
  { src: LogoCaddy, alt: "Caddy" },
  { src: LogoDinter, alt: "Dinter" },
  { src: LogoMeFalta, alt: "Me Falta" },
];

const ClientsSection: React.FC = () => {
  const theme = useTheme();

  const logoItems = [...clientLogos, ...clientLogos].map((logo, index) => ({
    content: (
      <Box
        key={index}
        sx={{
          minWidth: { xs: "180px", md: "280px" },
          px: { xs: 2, md: 3 },
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.08)",
            boxShadow: `0 8px 24px ${theme.palette.primary.light}`,
          },
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100px",
            objectFit: "contain",
            filter: "grayscale(100%) contrast(80%)",
            transition: "filter 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "grayscale(0%) contrast(100%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "grayscale(100%) contrast(80%)")
          }
        />
      </Box>
    ),
  }));

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ pl: { xs: 0, md: 20 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Columna del texto (izquierda) */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
              }}
            >
              EMPRESAS QUE{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                CONFÍAN
              </Box>{" "}
              EN NOSOTROS
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: theme.palette.text.primary,
              }}
            >
              Estas empresas líderes en sus sectores han elegido nuestros
              talentos para llevar sus servicios al siguiente nivel.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              Desde startups innovadoras hasta corporaciones establecidas, cada
              cliente representa una historia de éxito compartido.
            </Typography>
          </Grid>

          {/* Columna del InfiniteScroll (derecha) */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: { xs: "400px", md: "700px" },
                pr: { md: 0 },
              }}
            >
              <InfiniteScroll
                items={logoItems}
                isTilted={true}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.3}
                autoplayDirection="down"
                pauseOnHover={false}
                width="100%"
                maxHeight="100%"
                itemMinHeight={150}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientsSection;
