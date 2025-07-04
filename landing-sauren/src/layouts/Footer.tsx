import React from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Place,
  Phone,
} from "@mui/icons-material";
import logoLight from "../assets/images/logo.png";
import logoDark from "../assets/images/logoBlanco.webp";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.background.paper,
        py: 6,
        mt: "auto",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: 0 }}>
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={theme.palette.mode === 'dark' ? logoDark : logoLight}
                alt="Sauren Logo"
                sx={{
                  height: "auto",
                  width: "120px",
                  filter: theme.palette.mode === 'dark' ? 'drop-shadow(0 0 5px rgba(255,255,255,0.3))' : 'none',
                  transition: 'filter 0.3s ease-in-out',
                }}
              />
            </RouterLink>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about-us"
              color="inherit"
              underline="none"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              About Us
            </Link>
            <Link
              component={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              color="inherit"
              underline="none"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              Contact
            </Link>
            <Link
              component={ScrollLink}
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              color="inherit"
              underline="none"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              Services
            </Link>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:ventas@sauren.com"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Email fontSize="large" />
            </IconButton>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              <Place sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
              Hugo Alberto Garcia 1603, Córdoba
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              <Phone sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
              +54 351 7 336655
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              mt: 4,
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              width: "100%",
            }}
            textAlign="center"
          >
            © {new Date().getFullYear()} Sauren.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;