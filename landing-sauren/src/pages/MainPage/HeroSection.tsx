import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import theme from "../../theme";
import mainimage from "../../assets/images/mainpage.gif";
import { ArrowForwardRounded } from "@mui/icons-material";

const HeroSection: React.FC = () => {
  return (
    <Container
      sx={{
        minHeight: { xs: "auto", md: "100vh" }, // Ocupa toda la pantalla en pantallas grandes
        display: "flex",
        alignItems: "center", // Centra el contenido verticalmente
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Left Content (Text Section) */}
        <Box
          sx={{
            flex: 1.5, // Se mantiene ancho suficiente
            textAlign: { xs: "center", md: "left" },
            pr: { md: 8, lg: 12 },
            maxWidth: { xs: "100%", md: "750px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2.3rem", lg: "2.5rem" }, // 🔹 Ajustamos el tamaño en md
              lineHeight: 1.1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {"Optimiza tu Negocio"}
            <br />
            {"con nuestras"}
            <br />
            <span
              style={{
                color: theme.palette.primary.main,
                display: "inline-block",
                whiteSpace: "nowrap",
                fontSize: "clamp(2rem, 2.5vw, 2.5rem)", // 🔹 Se adapta mejor en md sin ser más chico que el resto
                maxWidth: "100%",
              }}
            >
              {"Auditorías de Software"}
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.palette.text.primary,
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", md: "1.2rem", lg: "1.3rem" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Potencia el rendimiento de tus procesos y
            descubre oportunidades con diagnósticos tecnológicos a medida.
          </Typography>

          {/* Métricas alineadas */}
          <Box
            sx={{
              display: "flex",
              gap: 5, // Espacio entre métricas
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {[
              { value: "100%", label: "Clientes satisfechos" },
              { value: "2+", label: "Años de Experiencia" },
              { value: "< 24h", label: "para resolver incidencias" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    fontSize: { xs: "1.6rem", md: "1.8rem", lg: "2rem" },
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>


          <Button
            variant="contained"
            startIcon={<ArrowForwardRounded />}
            component="a"
            href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: { xs: 4, md: 6 },
              py: 2,
              fontSize: { xs: '1.2rem', md: '1.3rem' },
              fontWeight: 'bold',
              borderRadius: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundImage: theme =>
                `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateZ(0)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: theme => `0 8px 24px ${theme.palette.primary.main}80`,
                '&::after': {
                  left: '120%',
                },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '-100%',
                width: '40%',
                height: '200%',
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                transform: 'rotate(30deg)',
                transition: 'left 0.6s ease-in-out',
              },
              mx: { xs: 'auto', md: 0 },
              mt: 4,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              '& .MuiButton-startIcon': {
                transition: 'transform 0.3s ease',
                fontSize: '1.4em',
              },
              '&:hover .MuiButton-startIcon': {
                transform: 'translateX(4px)',
              },
            }}
          >
            Auditoría Gratuita
          </Button>

        </Box>

        {/* Right Content (Graphic Section) */}
        <Box
          sx={{
            flex: 1.6, // Espacio para la imagen
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, md: 0 },
          }}
        >
          <img
            src={mainimage}
            alt="Auditorías de Software"
            style={{
              maxWidth: "110%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Container >
  );
};

export default HeroSection;
