import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Juan Pérez',
    role: 'CEO & Founder',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'María López',
    role: 'CTO',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Carlos García',
    role: 'Lead Developer',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Ana Rodríguez',
    role: 'UI/UX Designer',
    avatar: 'https://via.placeholder.com/80',
  },
];

const OurTeamSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        opacity: 0,
        animation: 'fadeInUp 1s forwards',
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-end' },
          textAlign: { xs: 'center', md: 'right' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#231F20',
          }}
        >
          Nuestro <span style={{ color: '#ED1C24' }}>Equipo</span>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-end' },
            gap: 4,
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              sx={{
                width: 220,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, color: '#ED1C24' }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#231F20' }}>
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
