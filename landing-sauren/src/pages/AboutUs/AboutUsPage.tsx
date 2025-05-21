import React from 'react';
import { Box } from '@mui/material';

// Importa tus secciones
import AboutHeroSection from './AboutHeroSection';
import OurMissionSection from './OurMissionSection';
import OurTeamSection from './OurTeamSection';

// Importa tu imagen de logo (si está en /src/assets/images/logoBg.png, por ejemplo)
import logoBackground from '../../assets/images/backgroundAboutUs.png';
import OurClientsSection from './OurClientesSection';

const AboutUsPage: React.FC = () => {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${logoBackground})`,
                backgroundRepeat: 'no-repeat',
                // Ajusta la escala del logo
                backgroundSize: { xs: '80%', md: '60%' },
                // Ubícalo al centro vertical, a la izquierda horizontal
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
