import React, { useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardSwap, { Card } from '../../../components/CardSwap/CardSwap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import theme from '../../../theme';

const FeaturesSectionMomentos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 48, color: '#FFB000' }} aria-hidden />,
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
      icon: <SchoolIcon sx={{ fontSize: 48, color: '#0061A3' }} aria-hidden />,
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
      icon: <SyncAltIcon sx={{ fontSize: 48, color: '#E2351C' }} aria-hidden />,
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
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 4,
          position: 'relative',
          minHeight: 600
        }}>
          {/* Contenido a la izquierda - Rediseñado */}
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
            data-aos="fade-right"
          >
            {/* Panel superior con título y descripción */}
            <Box sx={{
              p: 4,
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
                position: 'relative'
              }}>
                Tu E-commerce de Alto Rendimiento
              </Typography>

              <Typography variant="body1" sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontSize: '1.1rem',
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
              p: 3,
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
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  ¿Por qué PrestaShop?
                </Typography>
              </Box>

              <Typography variant="body1" sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                pl: 6
              }}>
                La plataforma ideal para negocios que buscan escalabilidad y control total sobre su e-commerce.
              </Typography>

              <Box component="ul" sx={{
                pl: 6,
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
            position: 'absolute',
            top: '60%', // Cambiado de 50% a 60% para bajar más
            right: 0,
            transform: 'translate(35%, -50%)', // Aumentado de 25% a 35% para más a la derecha
            width: '55%',
            maxWidth: 600,
            zIndex: 1,
            height: 500
          }}>
            <CardSwap
              cardDistance={isMobile ? 30 : 60}
              verticalDistance={isMobile ? 40 : 70}
              delay={4500}
              pauseOnHover={true}
              width="100%"
              height={500}
            >
              {features.map((feat, idx) => (
                <Card key={idx} customClass="swap-card">
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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
                      fontSize: '1.1rem',
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
                          <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
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