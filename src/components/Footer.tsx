import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 8 },
        borderTop: '2px solid',
        borderColor: 'divider',
        background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 4, sm: 6, md: 8 },
          }}
        >
          {/* About Me Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              As a Master's graduate in Data Science from Munster Technological University,
              I am currently pursuing my PhD at UBI-University of Beira Interior, focusing on
              Artificial Intelligence and Machine Learning research.
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HomeIcon fontSize="small" />
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon fontSize="small" />
                About
              </Link>
              <Link component={RouterLink} to="/experience" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkIcon fontSize="small" />
                Experience
              </Link>
              <Link component={RouterLink} to="/research" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ArticleIcon fontSize="small" />
                Research
              </Link>
              <Link component={RouterLink} to="/education" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon fontSize="small" />
                Education
              </Link>
              <Link component={RouterLink} to="/contact" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ContactMailIcon fontSize="small" />
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Contact Info Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Info
            </Typography>
            <Stack spacing={1}>
              <Link href="mailto:md.rashidunnabicit@gmail.com" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                md.rashidunnabicit@gmail.com
              </Link>
              <Link href="https://www.linkedin.com/in/mdrashidunnabi/" target="_blank" rel="noopener" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinkedInIcon fontSize="small" />
                LinkedIn Profile
              </Link>
              <Link href="tel:+351920238729" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                +351 920 238 729
              </Link>
              <Link href="https://wa.me/353874060527" target="_blank" rel="noopener" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsAppIcon fontSize="small" />
                +353 87 406 0527
              </Link>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Rua+Jose+Ramalho+85+Covilha+Portugal" 
                target="_blank" 
                rel="noopener" 
                color="text.secondary"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 1,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <LocationOnIcon fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2">
                  Rua Jose Ramalho Nº 85 3a CV DTA Covilhã, 6200-128, Portugal
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Md Rashidunnabi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 