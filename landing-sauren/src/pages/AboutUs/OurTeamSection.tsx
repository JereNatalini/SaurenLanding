import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, useTheme } from '@mui/material';

const teamMembers = [
  {
    name: 'Juan Santacroce',
    role: 'Co-Founder & Full Stack Developer',
    avatar: 'https://instagram.fcor18-1.fna.fbcdn.net/v/t51.2885-19/450397260_1135371631090160_5156320495696725436_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcor18-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QGx5kz95myoyuXeWpUu69SH201ZEI4LRP-i8MaQiN7ZKAx_mYAJT4YelU0-dMk8ne0&_nc_ohc=1IMApHhfensQ7kNvwGS40fU&_nc_gid=GJJt2Us87C181Z6H7AG35g&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfInyHphdOGXgeKuueNLtc5nwo85B4Eij3ZHCAQGB3Sjrw&oe=6832D149&_nc_sid=10d13b',
  },
  {
    name: 'Jeremias Natalini',
    role: 'Co-Founder & Full Stack Developer',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Elías Manca Wysocki',
    role: 'Full Stack Developer',
    avatar: 'https://via.placeholder.com/80',
  },
];

const OurTeamSection: React.FC = () => {
  const theme = useTheme();
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
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#231F20',
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
                backgroundColor: theme.palette.background.paper,
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
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
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
