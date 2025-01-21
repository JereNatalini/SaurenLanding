import React from 'react';
import HeroSection from './pages/MainPage/HeroSection';
import MainLayout from './layouts/MainLayout';
import FeaturesSection from './pages/MainPage/FeaturesSection';
import ProcessSection from './pages/MainPage/ProcessSection';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <MainLayout>
      {/* HeroSection dentro de un Container restringido */}
      <Container>
        <HeroSection />
      </Container>

      {/* ProcessSection ocupa todo el ancho */}
      <ProcessSection />

      {/* FeaturesSection dentro de un Container restringido */}
      <Container>
        <FeaturesSection />
      </Container>
      
    </MainLayout>
  );
}

export default App;
