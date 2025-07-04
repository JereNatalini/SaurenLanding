import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardSwap, { Card } from '../../../components/CardSwap/CardSwap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SecurityIcon from '@mui/icons-material/Security'; // New icon
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // New icon
import theme from '../../../theme';
import { useTheme } from '../../../components/AppThemeProvider';

const FeaturesSectionMomentos: React.FC = () => {
  const { mode } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 48, color: '#FFB000' }} aria-hidden />,
      title: 'E-commerce B2B/B2C',
      description: 'Implementación completa de PrestaShop con diseño responsive, optimizado para conversiones tanto en B2B como en B2C, con gestión de catálogos y precios diferenciados.',
      details: [
        'Diseño responsive y adaptable',
        'Optimización para conversiones',
        'Pasarelas de pago integradas',
        'Gestión de inventario avanzada'
      ]
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 48, color: '#0061A3' }} aria-hidden />,
      title: 'Capacitación Personalizada',
      description: 'Programas de formación personalizados para tu equipo, con soporte continuo en el uso de PrestaShop y las herramientas integradas.',
      details: [
        'Sesiones teórico-prácticas',
        'Material didáctico personalizado',
        'Soporte post-capacitación',
        'Actualizaciones periódicas'
      ]
    },
    {
      icon: <SyncAltIcon sx={{ fontSize: 48, color: '#E2351C' }} aria-hidden />,
      title: 'Integración Dux y Wepoint',
      description: 'Solución de sincronización avanzada con Dux para conectar tu tienda con Wepoint y sistemas internos, automatizando procesos y centralizando la información.',
      details: [
        'Sincronización en tiempo real',
        'Gestión de inventario centralizada',
        'Automatización de pedidos',
        'Reportes integrados'
      ]
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: '#4CAF50' }} aria-hidden />,
      title: 'Seguridad y Rendimiento',
      description: 'Garantizamos la seguridad de tu plataforma y optimizamos su rendimiento para una experiencia de compra rápida y confiable.',
      details: [
        'Certificados SSL',
        'Protección contra ataques',
        'Optimización de carga',
        'Copias de seguridad automáticas'
      ]
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#9C27B0' }} aria-hidden />,
      title: 'Soporte Continuo',
      description: 'Ofrecemos soporte técnico y consultoría para asegurar el funcionamiento óptimo de tu e-commerce y resolver cualquier incidencia.',
      details: [
        'Asistencia técnica 24/7',
        'Actualizaciones de software',
        'Consultoría estratégica',
        'Mantenimiento preventivo'
      ]
    }
  ];

  return (
    <Box component="section" sx={{
      py: { xs: 6, md: 10 },
      backgroundColor: 'transparent',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #FFB000 0%, #0061A3 50%, #E2351C 100%)'
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center', // Center items for a better mobile view
          justifyContent: 'space-between',
          gap: { xs: 6, md: 4 }, // Increase gap for mobile
          position: 'relative',
          minHeight: { md: 600 }
        }}>
          {/* Contenido a la izquierda - Rediseñado */}
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              mb: { xs: 4, md: 0 } // Add margin bottom for mobile
            }}
            data-aos="fade-right"
          >
            {/* Panel superior con título y descripción */}
            <Box sx={{
              p: { xs: 3, md: 4 },
              bgcolor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              textAlign: 'left',
              borderLeft: '4px solid #FFB000',
              background: 'linear-gradient(to bottom right, #ffffff, #f9f9f9)',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                borderRadius: '50%',
                transform: 'translate(40%, -40%)',
                opacity: 0.1
              }
            }}>
              <Typography variant="h4" sx={{
                fontWeight: 800,
                mb: 2,
                color: '#333',
                position: 'relative',
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' } // Responsive font size
              }}>
                Tu E-commerce de Alto Rendimiento
              </Typography>

              <Typography variant="body1" sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontSize: { xs: '1rem', md: '1.1rem' }, // Responsive font size
                lineHeight: 1.6,
                position: 'relative'
              }}>
                Desarrollamos tiendas online que convierten visitantes en clientes, con tecnología PrestaShop y soluciones a medida.
              </Typography>

              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mt: 3
              }}>
                {['Responsive', 'Optimizada', 'Escalable', 'Segura'].map((item, i) => (
                  <Box key={i} sx={{
                    bgcolor: '#f0f7ff',
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    fontWeight: 600,
                    color: '#0061A3',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      width: '8px',
                      height: '8px',
                      bgcolor: '#0061A3',
                      borderRadius: '50%',
                      mr: 1
                    }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Panel de características de PrestaShop */}
            <Box sx={{
              p: { xs: 3, md: 3 },
              bgcolor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              textAlign: 'left',
              borderTop: '4px solid #E2351C',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}>
                <Box sx={{
                  width: '40px',
                  height: '40px',
                  bgcolor: '#0061A3',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <Box sx={{ color: 'white', fontSize: '24px' }}>✓</Box>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  ¿Por qué PrestaShop?
                </Typography>
              </Box>

              <Typography variant="body1" sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                pl: { xs: 0, sm: 6 }, // Adjust padding for mobile
                fontSize: { xs: '0.95rem', md: '1rem' }
              }}>
                La plataforma ideal para negocios que buscan escalabilidad y control total sobre su e-commerce.
              </Typography>

              <Box component="ul" sx={{
                pl: { xs: 2, sm: 6 }, // Adjust padding for mobile
                mt: 2,
                '& li': {
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1.5,
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    bgcolor: '#FFB000',
                    borderRadius: '50%',
                    mr: 1.5,
                    flexShrink: 0
                  }
                }
              }}>
                <li>Altamente personalizable</li>
                <li>Gran ecosistema de módulos</li>
                <li>Optimizado para SEO</li>
                <li>Comunidad activa de desarrollo</li>
              </Box>
            </Box>
          </Box>

          {/* CardSwap a la derecha - Posicionado absolutamente */}
          <Box sx={{
            width: { xs: '100%', md: '55%' },
            maxWidth: { xs: '100%', md: 600 },
            zIndex: 1,
            mt: { xs: 4, md: 0 },
            position: { md: 'absolute' },
            top: { md: '50%' },
            right: { md: 0 },
            transform: { md: 'translate(35%, -50%)' },
            height: { xs: 450, sm: 500, md: 500 },
          }}>
            <CardSwap
              cardDistance={isMobile ? 20 : 60} // Smaller distance for mobile
              verticalDistance={isMobile ? 30 : 70} // Smaller distance for mobile
              delay={4500}
              pauseOnHover={true}
              width="100%"
              height="100%"
            >
              {features.map((feat, idx) => (
                <Card key={idx} customClass="swap-card">
                  <Box sx={{ 
                    p: { xs: 3, md: 4 },
                    bgcolor: mode === 'dark' ? '#1E1E1E' : 'background.paper', // Darker background in dark mode
                    color: 'text.primary',
                    height: '100%',
                    borderRadius: '12px',
                    boxShadow: mode === 'dark' ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.12)', // Adjusted shadow for dark mode
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      {feat.icon}
                      <Typography variant="h5" sx={{
                        fontWeight: 700,
                        ml: 2,
                        color: 'text.primary',
                        fontSize: { xs: '1.3rem', md: '1.5rem' } // Responsive font size
                      }}>
                        {feat.title}
                      </Typography>
                    </Box>

                    <Typography variant="body1" sx={{
                      color: 'text.secondary',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.1rem' }, // Responsive font size
                      lineHeight: 1.6
                    }}>
                      {feat.description}
                    </Typography>

                    <Box component="ul" sx={{
                      pl: 0,
                      mb: 3,
                      '& li': {
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1.8,
                        '&:before': {
                          content: '""',
                          display: 'inline-block',
                          width: '8px',
                          height: '8px',
                          bgcolor: '#E2351C',
                          borderRadius: '50%',
                          mt: '0.7rem',
                          mr: 2,
                          flexShrink: 0
                        }
                      }
                    }}>
                      {feat.details.map((detail, i) => (
                        <li key={i}>
                          <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            {detail}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                </Card>
              ))}
            </CardSwap>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSectionMomentos;