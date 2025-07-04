
import React from 'react';
import HeroSectionMomentos from './HeroSectionMomentos';
import FeaturesSectionMomentos from './FeaturesSectionMomentos';
import AboutProjectSectionMomentos from './AboutProjectSectionMomentos';
import CallToActionSectionMomentos from './CallToActionSectionMomentos';
import { Box } from '@mui/material';

const MomentosPage: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'transparent' }}>
      <HeroSectionMomentos />
      <AboutProjectSectionMomentos />
      <FeaturesSectionMomentos />
      <CallToActionSectionMomentos />
    </Box>
  );
};

export default MomentosPage;
