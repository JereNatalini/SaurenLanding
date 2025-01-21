import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box component="main">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      {children}

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
