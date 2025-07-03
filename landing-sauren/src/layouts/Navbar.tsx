import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "../components/MobileMenu";
import logoLight from "../assets/images/logo.png";
import logoDark from "../assets/images/logoBlanco.webp";

import DarkModeSwitch from "../components/DarkModeSwitch";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{
          width: "100%",
          left: 0,
          right: 0,
          margin: "0 auto",
          padding: { xs: "0 16px", sm: "0 24px", md: "0 48px" },
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={theme.palette.mode === 'dark' ? logoDark : logoLight}
                alt="Sauren Logo"
                sx={{
                  height: { xs: "40px", md: "50px" },
                  width: "auto",
                }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 1, lg: 2 },
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/about-us"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              About Us
            </Button>

            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <Button
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                Contact
              </Button>
            </ScrollLink>
            <DarkModeSwitch />
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              display: { xs: "flex", md: "none" },
              color: theme.palette.text.primary,
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MobileMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
