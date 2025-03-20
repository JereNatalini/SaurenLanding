import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTopAndRender from './components/ScrollToTopAndRender'; // Ajusta la ruta según tu proyecto
import MainLayout from './layouts/MainLayout';
import HeroSection from './pages/MainPage/HeroSection';
import FeaturesSection from './pages/MainPage/FeaturesSection';
import ContactSection from './pages/MainPage/ContactSection';
import HeroSectionWP from './pages/Projects/WePoint/HeroSectionWP';
import FeaturesWP from './pages/Projects/WePoint/FeaturesWP';
import BackgroundWP from './pages/Projects/WePoint/BackgroundWP';
import RoadmapWP from './pages/Projects/WePoint/RoadmapWP';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Container } from '@mui/material';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import SoftwareAuditSection from './pages/MainPage/SoftwareAuditSection';
import BusinessTechUpdate from './pages/MainPage/BusinessTechUpdate';
import ClientsSection from './pages/MainPage/ClientsSection';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
    });
  }, []);

  return (
    <ScrollToTopAndRender>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Container data-aos="fade-up">
                <HeroSection />
              </Container>
              <div data-aos="fade-up">
                <BusinessTechUpdate />
              </div>
              <div data-aos="fade-up">
                <SoftwareAuditSection />
              </div>
              <div>
                <ClientsSection />
              </div>
              <Container data-aos="zoom-in">
                <FeaturesSection />
              </Container>
              <div data-aos="slide-up">
                <ContactSection />
              </div>
            </MainLayout>
          }
        />
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
        <Route path="/about-us"
          element={<MainLayout>
            <AboutUsPage></AboutUsPage>
          </MainLayout>}
        />
      </Routes>
    </ScrollToTopAndRender>
  );
}

export default App;
