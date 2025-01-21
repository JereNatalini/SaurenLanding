import React from 'react';
import HeroSection from './pages/MainPage/HeroSection';
import MainLayout from './layouts/MainLayout';
import FeaturesSection from './pages/MainPage/FeaturesSection';
import ProcessSection from './pages/MainPage/ProcessSection';
import { Container } from '@mui/material';
import ContactSection from './pages/MainPage/ContactSection';
import './App.css';

import 'aos/dist/aos.css';
import AOS from 'aos';


function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1600, // Duración de las animaciones
      once: true, // Animar solo una vez
    });
  }, []);

  return (
    <MainLayout>
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
  );
}


export default App;
