import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Close,
  Home,
  Info,
  BusinessCenter,
  Message,
  Contacts,
  Facebook,
  Twitter,
  Instagram
} from '@mui/icons-material';
import logo from '../assets/images/icono.png';

interface MobileMenuProps {
  open: boolean;
  toggleDrawer: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: '100vw',
          height: '100vh',
          backgroundColor: theme.palette.background.default,
          boxShadow: '8px 0 24px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Encabezado */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          position: 'relative'
        }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Sauren Logo"
            sx={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
            }}
          />

          {/* Botón de cerrar */}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              p: 1.5,
              border: `2px solid ${theme.palette.primary.main}`,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiSvgIcon-root': { color: 'white' }
              }
            }}
          >
            <Close sx={{ 
              fontSize: '2rem',
              color: theme.palette.primary.main 
            }}/>
          </IconButton>
        </Box>

        {/* Menú principal */}
        <List sx={{ flexGrow: 1 }}>
          {[
            { text: 'Home', icon: <Home /> },
            { text: 'About', icon: <Info /> },
            { text: 'Services', icon: <BusinessCenter /> },
            { text: 'Testimonials', icon: <Message /> },
            { text: 'Contact', icon: <Contacts /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 1.5 }}>
              <ListItemButton
                onClick={toggleDrawer}
                sx={{
                  borderRadius: '12px',
                  px: 3,
                  py: 1.5,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    transform: 'translateX(8px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                    '& .MuiListItemIcon-root': { color: 'white' },
                    '& .MuiTypography-root': { color: 'white' }
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: '40px',
                  color: theme.palette.primary.main 
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    variant: 'h5',
                    fontFamily: theme.typography.h3.fontFamily,
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Divider */}
        <Divider sx={{
          my: 3,
          borderWidth: '1px',
          borderColor: theme.palette.secondary.main,
          opacity: 0.3
        }} />

        {/* Redes sociales */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 4
        }}>
          <IconButton sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.2s ease',
            boxShadow: `0 4px 12px ${theme.palette.primary.main}40`
          }}>
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton sx={{
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.2s ease',
            boxShadow: `0 4px 12px ${theme.palette.secondary.main}40`
          }}>
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton sx={{
            backgroundColor: '#E1306C',
            color: 'white',
            '&:hover': {
              backgroundColor: '#C41E5A',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px #E1306C40'
          }}>
            <Instagram fontSize="large" />
          </IconButton>
        </Box>

        {/* Footer */}
        <Box sx={{
          textAlign: 'center',
          mt: 'auto',
          py: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: '12px',
          boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <Typography variant="button" sx={{
            color: theme.palette.text.secondary,
            letterSpacing: '1.5px'
          }}>
            © 2024 SAUREN
          </Typography>
          <Typography variant="caption" display="block" sx={{
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: '0.8rem',
            letterSpacing: '1px'
          }}>
            Innovating Excellence
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;