import React from 'react';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HeroSectionWP from './HeroSectionWP';
import FeaturesWP from './FeaturesWP';
import RoadmapWP from './RoadmapWP';
import ScrollToTopAndRender from '../../../components/ScrollToTopAndRender';
import { useTheme } from '@mui/material/styles';

const ScrollTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}
      >
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

const WePointPage: React.FC = () => {
  const theme = useTheme();

  return (
    <ScrollToTopAndRender>
      <Box sx={{ bgcolor: theme.palette.background.default, overflow: 'hidden' }}>
        <HeroSectionWP />
        <FeaturesWP />
        <RoadmapWP />
        {/* We will add a CTA section later */}
        <ScrollTop />
      </Box>
    </ScrollToTopAndRender>
  );
};

export default WePointPage;
