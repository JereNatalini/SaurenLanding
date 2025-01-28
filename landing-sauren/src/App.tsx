import React from 'react';
import HeroSection from './pages/MainPage/HeroSection';
import MainLayout from './layouts/MainLayout';
import FeaturesSection from './pages/MainPage/FeaturesSection';
import ProcessSection from './pages/MainPage/ProcessSection';
import ContactSection from './pages/MainPage/ContactSection';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // No necesitas importar Router aquí

import 'aos/dist/aos.css';
import AOS from 'aos';
import { Container } from '@mui/material';
import HeroSectionWP from './pages/Projects/WePoint/HeroSectionWP';
import FeaturesWP from './pages/Projects/WePoint/FeaturesWP';
import BackgroundWP from './pages/Projects/WePoint/BackgroundWP';
import RoadmapWP from './pages/Projects/WePoint/RoadmapWP';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1600, // Duración de las animaciones
      once: true, // Animar solo una vez
    });
  }, []);

  return (
    <Routes>
      {/* Ruta principal */}
      <Route
        path="/"
        element={
          <MainLayout> {/* MainLayout envuelve el contenido de la página principal */}
            {/* Secciones principales de la landing */}
            {/* HeroSection con animación de fade-up */}
            <Container data-aos="fade-up">
              <HeroSection />
            </Container>

            {/* ProcessSection con animación de fade-left */}
            <div data-aos="fade-up">
              <ProcessSection />
            </div>

            {/* FeaturesSection con animación de zoom-in */}
            <Container data-aos="zoom-in">
              <FeaturesSection />
            </Container>

            {/* ContactSection con animación de fade-up */}
            <div data-aos="slide-up">
              <ContactSection />
            </div>
          </MainLayout>
        }
      />

      {/* Ruta para WePoint */}
      <Route
        path="/wepoint"
        element={
          <MainLayout>
            <div>
              <HeroSectionWP />
            </div>

            <div>
              <BackgroundWP />
            </div>

            <div>
              <FeaturesWP />
            </div>

            <Container>
              <RoadmapWP />
            </Container>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;