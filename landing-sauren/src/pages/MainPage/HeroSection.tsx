import React, { useRef } from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
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
        background: theme.palette.background.default,
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
          zIndex: 1,
        }}
      >
        <Particles
          particleColors={[theme.palette.primary.main]}
          particleCount={175}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={130}
          moveParticlesOnHover={true}
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
            pr: { md: 6 },
            mt: { xs: 6, md: 0 },
          }}
        >
          <Box 
            ref={containerRef}
            sx={{ 
              minHeight: '40vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              position: 'relative' 
            }}
          >
            <Box sx={{ 
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              lineHeight: 1.2,
              fontWeight: 900,
              fontFamily: 'NexaHeavy, Arial, sans-serif',
              color: theme.palette.text.primary,
              minHeight: '6rem'
            }}>
              Impulsa tu negocio con {' '}
              <Box component="span" sx={{
                display: 'inline-block',
                minWidth: '200px',
                position: 'relative',
                verticalAlign: 'top',
                textAlign: 'left'
              }}>
                <RotatingText
                  texts={['tecnología', 'innovación', 'inteligencia', 'eficiencia']}
                  mainClassName="text-rotate-main"
                  staggerFrom="center"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ 
                    y: "-100%", 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  staggerDuration={0.02}
                  splitLevelClassName="text-rotate-split"
                  transition={{ 
                    type: "spring", 
                    damping: 30, 
                    stiffness: 400,
                    mass: 0.5
                  }}
                  rotationInterval={2500}
                  style={{
                    color: theme.palette.primary.main,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '8px',
                      left: 0,
                      width: '100%',
                      height: '6px',
                      backgroundColor: theme.palette.primary.light,
                      opacity: 0.4,
                      zIndex: -1,
                    }
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ 
              mb: 6,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: 'NexaExtraLight, Arial, sans-serif',
              color: theme.palette.text.secondary,
            }}>
              Descubre cómo nuestras soluciones pueden llevar tu empresa al siguiente nivel
            </Box>

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

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: "50px",
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: theme.palette.primary.light + "08",
                  },
                }}
              >
                Ver demostración
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
              rows={7}
              columns={7}
              containerSize={ { xs: "70vw", md: "40vmin" } }
              lineColor={theme.palette.primary.main}
              lineWidth={ { xs: "0.8vmin", md: "0.6vmin" } }
              lineHeight={ { xs: "3vmin", md: "4vmin" } }
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

      {/* Elemento decorativo abstracto */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "60%",
          height: "80%",
          background: `linear-gradient(45deg, 
            ${theme.palette.primary.main}10 0%, 
            ${theme.palette.secondary.main}10 100%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default FullScreenHero;