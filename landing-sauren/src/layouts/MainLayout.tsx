// src/layouts/MainLayout.tsx
import React from "react";
import { Box, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactSection from "../pages/MainPage/ContactSection";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      {/* Contenedor de fondo fijo */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Asegura que esté detrás de todo el contenido
          overflow: "hidden", // Para que las partículas no se salgan del viewport
          background: theme.palette.background.default, // Fondo por defecto del tema
        }}
      >
        {/* Elemento de difuminación superior global */}
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "40%",
            height: "40%",
            background: `radial-gradient(circle at center, 
              ${theme.palette.primary.main}15 0%, 
              transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />

        {/* Elemento de difuminación inferior global */}
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

      {/* Contenido principal de la página */}
      <Box
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          background: "transparent",
        }}
      >
        <Navbar />
        {children}
        <div id="contact" data-aos="slide-up">
          <ContactSection />
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
