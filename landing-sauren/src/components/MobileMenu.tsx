import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, Divider } from '@mui/material';
import { Home, Info, Contacts } from '@mui/icons-material';

interface MobileMenuProps {
  open: boolean;
  toggleDrawer: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{
          width: 280,
          backgroundColor: 'background.default',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Encabezado del Menú */}
        <Box
          sx={{
            py: 3,
            px: 2,
            textAlign: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Sauren
          </Typography>
        </Box>

        <Divider />

        {/* Lista de opciones */}
        <List sx={{ flexGrow: 1, py: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleDrawer}
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              }}
            >
              <ListItemIcon>
                <Home sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleDrawer}
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              }}
            >
              <ListItemIcon>
                <Info sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleDrawer}
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              }}
            >
              <ListItemIcon>
                <Contacts sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        {/* Footer del menú */}
        <Box
          sx={{
            py: 2,
            px: 2,
            textAlign: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2025 Sauren. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
