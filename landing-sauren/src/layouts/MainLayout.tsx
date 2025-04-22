// src/layouts/MainLayout.tsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box component="main" sx={{ position: 'relative' }}>
    <Navbar />
    {children}
    <Footer />
  </Box>
);

export default MainLayout;
