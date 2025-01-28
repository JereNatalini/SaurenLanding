import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import MobileMenu from '../components/MobileMenu';
import theme from '../theme';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          width: { xs: '95%', sm: '90%', md: '80%' },
          margin: '0 auto',
          marginTop: '10px',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo clickeable */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
            <Link to="/" style={{ textDecoration: 'none' }}> {/* Envuelve el logo con Link */}
              <img
                src={logo}
                alt="Sauren Logo"
                style={{
                  height: 'auto',
                  width: '100px',
                  maxWidth: '100%',
                }}
              />
            </Link>
          </Box>

          {/* Botones del Navbar para desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '8px',
                },
                fontWeight: 'bold',
                mx: 1,
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '8px',
                },
                fontWeight: 'bold',
                mx: 1,
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '4px',
                  transparency: 0.8,
                },
                fontWeight: 'bold',
                mx: 1,
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Botón del menú móvil */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MobileMenu */}
      <MobileMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;