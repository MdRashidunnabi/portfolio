import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Divider,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const menuItems = [
    { key: 'home', path: '', label: 'Home' },
    { key: 'about', path: 'about', label: 'About' },
    { key: 'experience', path: 'experience', label: 'Experience' },
    { key: 'education', path: 'education', label: 'Education' },
    { key: 'research', path: 'research', label: 'Research' },
    { key: 'contact', path: 'contact', label: 'Contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === `/${path}` || 
           (location.pathname === '/' && path === '');
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.key}
          component={Link}
          to={`/${item.path}`}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': { backgroundColor: 'action.hover' },
            color: isActive(item.path) ? 'primary.main' : 'text.primary',
          }}
        >
          <ListItemText 
            primary={item.label}
            primaryTypographyProps={{
              fontWeight: isActive(item.path) ? 600 : 400,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          bgcolor: 'background.paper', 
          borderBottom: 2,
          borderColor: 'divider',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '&:hover': {
                  opacity: 0.85,
                },
                mr: { xs: 4, md: 8 }
              }}
            >
              MD RASHIDUNNABI
            </Typography>

            {isMobile ? (
              <Box sx={{ ml: 'auto' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.key}
                    component={Link}
                    to={`/${item.path}`}
                    sx={{
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      mx: 0.5,
                      px: 2,
                      py: 1,
                      fontSize: '1.1rem',
                      fontWeight: isActive(item.path) ? 600 : 500,
                      position: 'relative',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: 8,
                        right: 8,
                        height: 3,
                        borderRadius: 1.5,
                        bgcolor: 'primary.main',
                        transform: isActive(item.path) ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.2s ease-in-out',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar; 