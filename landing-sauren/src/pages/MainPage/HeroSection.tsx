import React from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";
import mainimage from "../../assets/images/mainpage.gif";

const HeroSection: React.FC = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // Column for small screens, row for larger
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 4, md: 8 },
        }}
      >
        {/* Left Content (Text Section) */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            pr: { md: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Optimiza tu Negocio con nuestras{" "}
            <span style={{ color: theme.palette.primary.main }}>
              Auditorías de Software
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.palette.text.primary,
              fontWeight: "bold",
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Mejora la calidad y la eficiencia de tus procesos de negocio con
            nuestras auditorías de software personalizadas, diseñadas para
            identificar problemas, optimizar procedimientos y expandir tu
            productividad.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
              >
                100%
              </Typography>
              <Typography variant="body2">Clientes satisfechos</Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
              >
                2+
              </Typography>
              <Typography variant="body2">Años de Experiencia</Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
              >
                &lt; 24h
              </Typography>
              <Typography variant="body2">para resolver incidencias</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Box
            component="img"
            src={mainimage}
            alt="Auditorías de Software"
            sx={{
              maxWidth: { xs: "85%", md: "100%" },
              height: "auto",
            }}
          />
        </Box>

      </Box>
    </Container>
  );
};

export default HeroSection;
