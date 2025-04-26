// src/layouts/Navbar.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(prev => !prev);

  return (
    <>
      <AppBar
        position="absolute"     // deja que el navbar se vaya al hacer scroll
        color="transparent"
        elevation={0}            // sin sombra
        sx={{
          top: 0,
          left: 0,
          right: 0,
          width: { xs: '100%', sm: '95%', md: '90%', lg: '80%' },
          mx: 'auto',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={logo}
                alt="Sauren Logo"
                sx={{ width: { xs: '50%', md: '30%' }, height: 'auto' }}
              />
            </Link>
          </Box>
          
          {/* Links para pantallas ≥ sm */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { xs: 1, sm: 2 } }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/about-us', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Button
                key={to}
                component={Link}
                to={to}
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  mx: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '8px',
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Menú móvil para pantallas < sm */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MobileMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
