import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import theme from '../../theme';
import { Assignment, Search, Build, SupportAgent, BarChart } from '@mui/icons-material';

const ProcessSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%', // Ocupar todo el ancho de la pantalla
        background: 'linear-gradient(to top, #f9f9f9 0%, #e3f2fd 100%)', // Degradado de arriba hacia abajo
        py: 5,
        px: { xs: 2, md: 6 }, // Márgenes laterales dinámicos
        borderTopLeftRadius: '10%',
        borderTopRightRadius: '10%',
        position: 'relative', // Importante para el posicionamiento
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0))',
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: theme.palette.text.primary,
        }}
      >
        Nuestros <span style={{ color: theme.palette.secondary.main }}>Procesos</span>
      </Typography>

      {/* Timeline Vertical */}
      <Timeline
        position="alternate"
        sx={{
          mx: 'auto', // Centrado horizontal del timeline
          maxWidth: '900px', // Ancho máximo para mantenerlo legible
        }}
      >
        {/* Paso 1 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.primary.main }}>
              <Assignment sx={{ color: '#FFF' }} />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}
            >
              1. Análisis Inicial
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Visitamos tu empresa para analizar tus procesos y entender tus objetivos.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Paso 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
              <Search sx={{ color: '#FFF' }} />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: theme.palette.primary.main }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}
            >
              2. Identificación de Debilidades
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Detectamos puntos débiles y áreas de mejora, colaborando con tus empleados.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Paso 3 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.primary.main }}>
              <Build sx={{ color: '#FFF' }} />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}
            >
              3. Desarrollo
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Creamos soluciones personalizadas para optimizar tus procesos y aumentar la productividad.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Paso 4 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
              <BarChart sx={{ color: '#FFF' }} />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: theme.palette.primary.main }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}
            >
              4. Seguimiento
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Realizamos un seguimiento detallado para garantizar la eficacia de nuestras soluciones.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Paso 5 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.primary.main }}>
              <SupportAgent sx={{ color: '#FFF' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}
            >
              5. Mantenimiento y Soporte
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Ofrecemos mantenimiento continuo para adaptarnos a tus necesidades cambiantes.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default ProcessSection;
