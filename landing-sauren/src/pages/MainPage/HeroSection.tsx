import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material";
import MagnetLines from "../../Animations/MagnetLines/MagnetLines";
import Particles from "../../Backgrounds/Particles/Particles";

const FullScreenHero = () => {
  const theme = useTheme();

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
      {/* Partículas con color primario */}
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
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              lineHeight: 1.1,
              textShadow: `0 2px 10px rgba(0,0,0,0.1)`,
              '& span': {
                color: theme.palette.primary.main,
                display: 'inline-block',
                position: 'relative',
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
              }
            }}
          >
            Transforma tu negocio con <span>tecnología inteligente</span>
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              maxWidth: "90%",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Nuestras soluciones tecnológicas personalizadas escalan tu empresa 
            al siguiente nivel con inteligencia artificial y análisis predictivo.
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
              Ver casos de éxito
            </Button>
          </Box>

          {/* Features */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, auto)" },
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {[
              "Análisis en tiempo real",
              "Tecnología escalable", 
              "Soporte 24/7",
              "Resultados garantizados"
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "12px",
                  px: 2,
                  py: 1,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
              >
                <CheckCircle
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ 
                    fontWeight: 500,
                    fontSize: "0.9rem"
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Componente MagnetLines para desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "40%",
            minHeight: "60vh",
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
              containerSize="40vmin"
              lineColor={theme.palette.primary.main}
              lineWidth="0.6vmin"
              lineHeight="4vmin"
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