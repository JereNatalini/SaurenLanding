import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(90deg, #005BBB 0%, #FF5722 100%)',
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Box sx={{ mt: 2 }}>
        <IconButton color="inherit" href="https://facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <LinkedinIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Política de Privacidad
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="hover">
          Términos de Servicio
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
