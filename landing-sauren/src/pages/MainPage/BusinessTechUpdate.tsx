import React from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import techImage from "../../assets/images/womenCoffee.jpg";
import { Link as ScrollLink } from "react-scroll";
import TrueFocusWrapper from "../../components/TrueFocusWrapper";
const BusinessTechUpdate: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: `
          linear-gradient(145deg, 
            ${theme.palette.primary.dark} 0%, 
            ${theme.palette.secondary.main} 100%
          )
        `,
        color: theme.palette.common.white,
      }}
    >
      {/* Elementos decorativos */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(
            circle, 
            rgba(255,255,255,0.15) 0%, 
            transparent 70%
          )`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(
            circle, 
            rgba(255,255,255,0.1) 0%, 
            transparent 70%
          )`,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          gap: { xs: 4, lg: 8 },
        }}
      >
        {/* Contenido de texto */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 3,
              lineHeight: 1.2,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              color: theme.palette.common.white,
            }}
          >
            Transforma tu negocio con{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                position: "relative",
                zIndex: 2,
              }}
            >
              <TrueFocusWrapper
                text="tecnología inteligente"
                manualMode={false}
                blurAmount={3}
                borderColor={theme.palette.secondary.light}
                glowColor="rgba(255, 255, 255, 0.6)"
                animationDuration={0.4}
                pauseBetweenAnimations={1.5}
              />
            </Box>
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: 4,
              maxWidth: "600px",
              opacity: 0.9,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              color: theme.palette.common.white,
            }}
          >
            En un mundo que cambia rápidamente,{" "}
            <strong>mantenerse actualizado</strong> es clave para el éxito.
            Nuestras soluciones están diseñadas para{" "}
            <strong>simplificar la tecnología</strong> y ayudarte a tomar
            decisiones informadas sin complicaciones.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: "50px",
                boxShadow: `0 4px 20px ${theme.palette.common.white}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 6px 24px ${theme.palette.primary.main}`,
                },
                transition: "all 0.3s ease",
              }}
              href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
            >
              Descubre cómo
            </Button>

            <Button
              component={ScrollLink}
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: "50px",
                borderWidth: "2px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderWidth: "2px",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver casos de éxito
            </Button>
          </Box>
        </Box>

        {/* Contenedor de imagen */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            maxWidth: "600px",
            width: "100%",
            perspective: "1000px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: `
                0 30px 60px -10px rgba(0,0,0,0.3),
                0 18px 36px -18px rgba(0,0,0,0.33)
              `,
              transformStyle: "preserve-3d",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              "&:hover": {
                transform: "translateY(-10px) rotateX(5deg)",
                boxShadow: `
                  0 40px 80px -15px rgba(0,0,0,0.4),
                  0 25px 50px -25px rgba(0,0,0,0.4)
                `,
                "&:after": {
                  opacity: 1,
                },
                "& img": {
                  transform: "scale(1.05)",
                },
              },
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(
                  135deg,
                  rgba(255,255,255,0.1) 0%,
                  transparent 100%
                )`,
                opacity: 0,
                transition: "opacity 0.5s ease",
              },
            }}
          >
            <Box
              component="img"
              src={techImage}
              alt="Tecnología para negocios"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.5s ease",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 3,
                background: `linear-gradient(
                  to top,
                  rgba(0,0,0,0.8) 0%,
                  transparent 100%
                )`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: 600,
                }}
              >
                Soluciones que impulsan tu negocio
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Tecnología adaptada a tus necesidades reales
              </Typography>
            </Box>
          </Box>

          {/* Elemento decorativo */}
          <Box
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `linear-gradient(
                45deg,
                ${theme.palette.secondary.light},
                ${theme.palette.primary.light}
              )`,
              filter: "blur(15px)",
              opacity: 0.7,
              zIndex: -1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessTechUpdate;
