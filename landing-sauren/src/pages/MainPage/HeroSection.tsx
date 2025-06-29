import React, { useRef } from "react";
import { Box, Button, Container, useTheme, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import MagnetLines from "../../Animations/MagnetLines/MagnetLines";
import Particles from "../../Backgrounds/Particles/Particles";
import RotatingText from "../../TextAnimations/RotatingText/RotatingText";

const FullScreenHero = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        py: 0,
      }}
    >
      {/* Partículas animadas */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={[theme.palette.primary.main]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={true}
          disableRotation={false}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 8, md: 10 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Contenido de texto */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
            pl: { md: 20 }, // Añadir padding-left para alinear con ClientsSection
            mt: { xs: 6, md: 0 },
          }}
        >
          <Box
            ref={containerRef}
            sx={{
              minHeight: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                mb: 4,
                minHeight: "6rem",
              }}
            >
              Impulsa tu negocio con{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  minWidth: "200px",
                  position: "relative",
                  verticalAlign: "top",
                  textAlign: "left",
                  color: theme.palette.primary.main,
                }}
              >
                <RotatingText
                  texts={[
                    "tecnología",
                    "innovación",
                    "inteligencia",
                    "eficiencia",
                  ]}
                  mainClassName="text-rotate-main"
                  staggerFrom="center"
                  animate={{ y: 0, opacity: 1 }}
                  staggerDuration={0.02}
                  splitLevelClassName="text-rotate-split"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                    mass: 0.5,
                  }}
                  rotationInterval={2500}
                  style={{
                    color: theme.palette.primary.main,
                  }}
                />
              </Box>
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 6,
                color: theme.palette.text.primary,
              }}
            >
              Descubre cómo nuestras soluciones pueden llevar tu empresa al
              siguiente nivel
            </Typography>

            {/* Botones */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
                mb: 6,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRightAlt sx={{ fontSize: "1.5rem" }} />}
                href="#contacto"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: "50px",
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 24px ${theme.palette.primary.main}60`,
                  },
                }}
              >
                Comenzar ahora
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Componente MagnetLines para todas las pantallas */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: { xs: "100%", md: "40%" },
            height: { xs: "40vh", md: "60vh" },
            mb: { xs: 1, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="60vmin"
              lineColor={theme.palette.primary.main}
              lineWidth="0.8vmin"
              lineHeight="5vmin"
              baseAngle={0}
              style={{ margin: 0 }}
            />
          </Box>

          {/* Efecto de profundidad */}
          <Box
            sx={{
              position: "absolute",
              width: "80%",
              height: "80%",
              background: `radial-gradient(circle at center, 
                ${theme.palette.primary.main}15 0%, 
                transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FullScreenHero;
