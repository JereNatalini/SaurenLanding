import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "../components/MobileMenu";
import logo from "../assets/images/logo.png";

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
          width: { xs: "95%", sm: "90%", md: "80%" },
          margin: "0 auto",
          marginTop: "10px",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo clickeable */}
          <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={logo}
                alt="Sauren Logo"
                sx={{
                  width: { xs: "50%", md: "30%" },
                  height: "auto",
                }}
              />
            </Link>
          </Box>

          {/* Botones del Navbar para desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "8px",
                },
                fontWeight: "bold",
                mx: 1,
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "8px",
                },
                fontWeight: "bold",
                mx: 1,
              }}
              component={Link}
              to="/about-us"
            >
              About Us
            </Button>
            <ScrollLink
              to={"contact"}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "4px",
                    transparency: 0.8,
                  },
                  fontWeight: "bold",
                  mx: 1,
                }}
              >
                Contact
              </Button>
            </ScrollLink>
          </Box>

          {/* Menú móvil para pantallas < sm */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
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
