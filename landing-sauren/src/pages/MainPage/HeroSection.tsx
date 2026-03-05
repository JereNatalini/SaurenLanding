import { useState, useEffect, useRef } from "react";
import { Box, Button, Container, useTheme, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../../Backgrounds/Particles/Particles";
import RotatingText from "../../TextAnimations/RotatingText/RotatingText";

const textsList = [
  "Inteligencia Artificial",
  "Software a Medida",
  "Automatización",
  "Innovación Constante",
];

const FullScreenHero = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileTextIndex, setMobileTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileTextIndex((prev) => (prev + 1) % textsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        pt: { xs: '15vh', md: '20vh' },
        pb: { xs: '10vh', md: '15vh' },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
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
          particleCount={80}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={true}
          disableRotation={false}
        />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center" },
          justifyContent: "center",
          textAlign: { xs: "center" }
        }}
      >
        {/* Contenido de texto */}
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
              mb: { xs: 4, md: 6 },
              minHeight: { xs: "5rem", md: "8rem" },
              fontWeight: 800,
              fontSize: { xs: "3rem", sm: "4rem", md: "5.5rem" },
              lineHeight: 1.1,
            }}
          >
            Impulsa tu negocio con{" "}
            <br />
            <Box
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                width: "100%",
                mt: { xs: 1, md: 0 },
                color: theme.palette.primary.main,
              }}
            >
              <RotatingText
                texts={textsList}
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
                rotationInterval={3000}
                style={{
                  color: theme.palette.primary.main,
                  justifyContent: "center",
                  textAlign: "center"
                }}
              />
            </Box>

            {/* Mobile Animation */}
            <Box
              component="div"
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: 1,
                minHeight: "80px", // Fixed height to prevent layout shifts
                color: theme.palette.primary.main,
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileTextIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {textsList[mobileTextIndex]}
                </motion.div>
              </AnimatePresence>
            </Box>
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: { xs: 6, md: 10 },
              color: theme.palette.text.primary,
              maxWidth: "900px",
              mx: "auto",
              opacity: 0.9,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              lineHeight: 1.6,
            }}
          >
            Transformamos empresas combinando desarrollo tecnológico de primer nivel, IA aplicada y consultoría estratégica para llevar tu eficiencia al siguiente nivel.
          </Typography>

          {/* Botones */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              mb: 6,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRightAlt sx={{ fontSize: "1.5rem" }} />}
              href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
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
              Potenciar mi negocio
            </Button>
            
            <Button
              component={ScrollLink}
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              variant="outlined"
              size="large"
              color="primary"
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: "50px",
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  cursor: "pointer",
                },
              }}
            >
              Nuestros servicios
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FullScreenHero;
