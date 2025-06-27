import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardSwap, { Card } from '../../../components/CardSwap/CardSwap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import theme from '../../../theme';
import featuresImage from '../../../assets/images/momentosPresta.png';

const FeaturesSectionMomentos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);
  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 48, color: '#FFB000', mb: 1 }} aria-hidden />,
      title: 'E-commerce',
      description: 'Implementación completa de PrestaShop con diseño responsive, optimizado para conversiones tanto en B2B como en B2C.',
      details: [
        'Diseño responsive y adaptable',
        'Optimización para conversiones',
        'Pasarelas de pago integradas',
        'Gestión de inventario avanzada'
      ]
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 48, color: '#0061A3', mb: 1 }} aria-hidden />,
      title: 'Capacitación',
      description: 'Programas de formación personalizados para tu equipo, con soporte continuo en el uso de PrestaShop.',
      details: [
        'Sesiones teórico-prácticas',
        'Material didáctico personalizado',
        'Soporte post-capacitación',
        'Actualizaciones periódicas'
      ]
    },
    {
      icon: <SyncAltIcon sx={{ fontSize: 48, color: '#E2351C', mb: 1 }} aria-hidden />,
      title: 'Integración Dux',
      description: 'Solución de sincronización avanzada con Dux para conectar tu tienda con Wepoint y sistemas internos.',
      details: [
        'Sincronización en tiempo real',
        'Gestión de inventario centralizada',
        'Automatización de pedidos',
        'Reportes integrados'
      ]
    }
  ];

  return (
    <Box component="section" sx={{ 
      py: { xs: 6, md: 10 },
      backgroundColor: '#f8f9fa',
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
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} data-aos="fade-up">
          <Typography variant="h4" component="h2" sx={{ 
            fontWeight: 800, 
            mb: 2,
            color: '#333'
          }}>
            Soluciones Integrales
          </Typography>
          <Typography variant="body1" sx={{ 
            color: theme.palette.text.secondary, 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: '1.1rem',
            mb: 3
          }}>
            Implementamos soluciones completas para potenciar tu negocio digital
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 4,
          position: 'relative'
        }}>
          {/* Imagen a la izquierda - Más compacta */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '40%' },
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}
            data-aos="fade-right"
          >
            <Box
              component="img"
              src={featuresImage}
              alt="Soluciones e-commerce"
              sx={{ 
                width: '100%', 
                maxWidth: 450,
                borderRadius: '12px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                transform: 'rotate(-1deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(0deg)'
                }
              }}
            />
            
            <Box sx={{
              mt: 4,
              p: 3,
              bgcolor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              textAlign: 'left',
              borderLeft: '4px solid #FFB000'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                ¿Por qué PrestaShop?
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                La plataforma ideal para negocios que buscan escalabilidad y control total sobre su e-commerce.
              </Typography>
              
              <Box component="ul" sx={{ 
                pl: 2.5, 
                mt: 2,
                '& li': {
                  mb: 1,
                  position: 'relative',
                  pl: '1.5rem',
                  '&:before': {
                    content: '"✓"',
                    position: 'absolute',
                    left: 0,
                    color: '#0061A3',
                    fontWeight: 'bold'
                  }
                }
              }}>
                <li>Altamente personalizable</li>
                <li>Gran ecosistema de módulos</li>
                <li>Optimizado para SEO</li>
                <li>Comunidad activa</li>
              </Box>
            </Box>
          </Box>
          
          {/* CardSwap a la derecha - Más grande y desplazado */}
          <Box sx={{ 
            width: { xs: '100%', md: '60%' },
            position: 'relative',
            minHeight: 500,
            transform: { md: 'translateX(5%)' },
            zIndex: 1
          }}>
            <CardSwap
              cardDistance={isMobile ? 30 : 60}
              verticalDistance={isMobile ? 40 : 70}
              delay={5000}
              pauseOnHover={true}
              width="100%"
              height={isMobile ? 400 : 500}
            >
              {features.map((feat, idx) => (
                <Card key={idx} customClass="swap-card">    
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {feat.icon}
                      <Typography variant="h5" sx={{ 
                        fontWeight: 700, 
                        ml: 2,
                        color: 'text.primary'
                      }}>
                        {feat.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body1" sx={{ 
                      color: 'text.secondary', 
                      mb: 3,
                      fontSize: '1.1rem'
                    }}>
                      {feat.description}
                    </Typography>
                    
                    <Box component="ul" sx={{ 
                      pl: 0, 
                      mb: 3,
                      '& li': {
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1.5,
                        '&:before': {
                          content: '""',
                          display: 'inline-block',
                          width: '6px',
                          height: '6px',
                          bgcolor: '#E2351C',
                          borderRadius: '50%',
                          mt: '0.6rem',
                          mr: 1.5,
                          flexShrink: 0
                        }
                      }
                    }}>
                      {feat.details.map((detail, i) => (
                        <li key={i}>
                          <Typography variant="body2" sx={{ color: 'text.primary' }}>
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