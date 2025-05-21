import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Place,
  Phone,
} from "@mui/icons-material";
import theme from "../theme";
import logo from "../assets/images/logo.png";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#333333",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Columna izquierda: Enlaces de compañía */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.background.paper,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Compañía
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Link
                href="/about-us"
                color="inherit"
                underline="hover"
                sx={{ mb: 1.5, color: theme.palette.background.paper }}
              >
                Sobre nosotros
              </Link>
              <Box
                component={ScrollLink}
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                sx={{ 
                  mb: 1.5, 
                  color: theme.palette.background.paper,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: theme.palette.primary.main
                  }
                }}
              >
                Servicios
              </Box>
              
              <Box
                component={ScrollLink}
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                sx={{ 
                  mb: 1.5, 
                  color: theme.palette.background.paper,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: theme.palette.primary.main
                  }
                }}
              >
                Proyectos
              </Box>
            </Box>
          </Grid>

          {/* Columna central: Logo y redes sociales */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Sauren Logo"
              style={{
                height: "auto",
                width: "40%",
                maxWidth: "180px",
                marginBottom: "1.5rem",
              }}
            />
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link href="https://facebook.com" color="inherit">
                <Facebook
                  sx={{
                    fontSize: 28,
                    color: theme.palette.background.paper,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                />
              </Link>
              <Link href="https://twitter.com" color="inherit">
                <Twitter
                  sx={{
                    fontSize: 28,
                    color: theme.palette.background.paper,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                />
              </Link>
              <Link href="https://linkedin.com" color="inherit">
                <LinkedIn
                  sx={{
                    fontSize: 28,
                    color: theme.palette.background.paper,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                />
              </Link>
            </Box>
          </Grid>

          {/* Columna derecha: Contacto */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.background.paper,
                textAlign: { xs: "center", md: "right" },
              }}
            >
              Contacto
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-end" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Place
                  sx={{
                    fontSize: 20,
                    mr: 1,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.background.paper }}
                >
                  Hugo Alberto Garcia 1603, Córdoba
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Email
                  sx={{
                    fontSize: 20,
                    mr: 1,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.background.paper }}
                >
                  ventas@sauren.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Phone
                  sx={{
                    fontSize: 20,
                    mr: 1,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.background.paper }}
                >
                  +54 351 7 336655
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{ borderTop: "1px solid", borderColor: "#FF6600", pt: 4, mt: 4 }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.background.paper }}
            textAlign="center"
          >
            © {new Date().getFullYear()} Sauren. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
