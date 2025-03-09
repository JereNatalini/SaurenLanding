import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const clientLogos = [
  'https://via.placeholder.com/150?text=Cliente+1',
  'https://via.placeholder.com/150?text=Cliente+2',
  'https://via.placeholder.com/150?text=Cliente+3',
  'https://via.placeholder.com/150?text=Cliente+4',
  'https://via.placeholder.com/150?text=Cliente+5',
  'https://via.placeholder.com/150?text=Cliente+6',
];

const OurClientsSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#f5f5f5',
        py: 10,
        opacity: 0,
        animation: 'fadeIn 1s forwards',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: '#231F20',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Nuestros <span style={{ color: '#ED1C24' }}>Clientes</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: '#231F20',
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          Grandes empresas y startups confían en nosotros para impulsar sus proyectos y alcanzar
          nuevas metas. Nuestra pasión por la innovación se refleja en cada colaboración.
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {clientLogos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                component="img"
                src={logo}
                alt={`Cliente ${index + 1}`}
                sx={{
                  maxWidth: '100%',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurClientsSection;
