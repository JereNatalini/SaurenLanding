import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import theme from '../../../theme';
import 'aos/dist/aos.css';
import AOS from 'aos';
import wepoint from '../../../assets/images/wepoint.png';
const HeroSectionWP: React.FC = () => {
    AOS.init({
          duration: 1600, // Duración de las animaciones
          once: true, // Animar solo una vez
        });
    return (
        
        <Box
            sx={{
                width: '100%',
                minHeight: '100%',
                backgroundColor: theme.palette.background.default
            }}
        >
            {/* Separador */}
            <Box>
                
            </Box>
            {/* Hero Section */}
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: { xs: 4, md: 8 },
                }}
            >
                {/* Left Content (Image Section) */}
                <Box data-aos="fade-right"
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={wepoint}
                        alt="Wepoint Project"
                        style={{
                            maxWidth: '80%', // Imagen responsiva
                            height: 'auto',
                        }}
                    />
                </Box>

                {/* Right Content (Text Section) */}
                <Box data-aos="fade-left"
                    sx={{
                        flex: 1,
                        textAlign: { xs: 'center', md: 'left' },
                        pl: { md: 4 },
                        mb: { xs: 4, md: 0 },
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            color: theme.palette.text.primary,
                        }}
                    >
                        PROYECTO <span style={{ color: theme.palette.primary.main }}>WEPOOINT</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                            color: theme.palette.text.primary,
                            fontWeight: 'bold',
                            maxWidth: '500px',
                        }}
                    >
                        Wepoint es un sistema integral de gestión empresarial desarrollado en PHP Laravel, diseñado para optimizar procesos internos,
                        mejorar la eficiencia operativa y ofrecer soluciones personalizadas a las necesidades de cada cliente.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSectionWP;
