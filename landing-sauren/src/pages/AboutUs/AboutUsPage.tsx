import React from 'react';
import { Box } from '@mui/material';

// Importa tus secciones
import AboutHeroSection from './AboutHeroSection';
import OurMissionSection from './OurMissionSection';
import OurTeamSection from './OurTeamSection';

// Importa tu imagen de logo (si está en /src/assets/images/logoBg.png, por ejemplo)
import logoBackground from '../../assets/images/backgroundAboutUs.png';

const AboutUsPage: React.FC = () => {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                // Muestra el fondo solo en pantallas medianas en adelante
                backgroundImage: { xs: 'none', md: `url(${logoBackground})` },
                backgroundRepeat: 'no-repeat',
                // En mobile el backgroundSize no aplica, pero en md se muestra con 60%
                backgroundSize: { xs: '80%', md: '60%' },
                // Ajusta la posición para desktop
                backgroundPosition: '-50% -10%',
                bgcolor: '#ffffff',
            }}
        >
            <AboutHeroSection />
            <OurMissionSection />
            <OurTeamSection />
            {/* <OurClientsSection /> */}
        </Box>
    );
};

export default AboutUsPage;
