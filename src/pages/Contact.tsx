import React from 'react';
import { Box, Container, Typography, Paper, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const Contact = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <LocationOnIcon />,
      title: 'Address',
      content: 'Rua Jose Ramalho Nº 85 3a\nCV DTA, Covilhã, 6200-128, Portugal',
      href: 'https://www.google.com/maps/search/?api=1&query=Rua+Jose+Ramalho+85+Covilha+Portugal'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+351920238729',
      href: 'tel:+351920238729'
    },
    {
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      content: '+353874060527',
      href: 'https://wa.me/353874060527'
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'md.rashidunnabicit@gmail.com',
      href: 'mailto:md.rashidunnabicit@gmail.com'
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      content: 'mdrashidunnabi',
      href: 'https://www.linkedin.com/in/mdrashidunnabi/'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ py: 8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Contact Me
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          {contactInfo.map((info, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 32px)',
                  md: 'calc(33.33% - 32px)',
                }
              }}
            >
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2, fontSize: '2.5rem' }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                <Link
                  href={info.href}
                  target={info.title === 'LinkedIn' || info.title === 'Address' ? '_blank' : '_self'}
                  rel={info.title === 'LinkedIn' || info.title === 'Address' ? 'noopener noreferrer' : ''}
                  sx={{ 
                    color: 'text.primary',
                    textDecoration: 'none',
                    '&:hover': { 
                      textDecoration: 'underline',
                      color: 'primary.main'
                    }
                  }}
                >
                  <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                    {info.content}
                  </Typography>
                </Link>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact; 