import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Button, Box, Stack, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #f7f7ff 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start',
          gap: { xs: 4, md: 8 },
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: '1100px',
          mx: 'auto'
        }}>
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '65%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
                  fontWeight: 700,
                  color: '#1a1a1a',
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Hi, I'm MD RASHIDUNNABI
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.1rem' },
                  fontWeight: 600,
                  color: '#2d2d2d',
                  mb: 4
                }}
              >
                Data Scientist & AI Researcher
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  color: '#4a4a4a',
                  mb: 3,
                  lineHeight: 1.8,
                  maxWidth: '90%'
                }}
              >
                As a Data Science Master's graduate from Munster Technological University with a deep focus on machine learning applications in healthcare, I am passionately pursuing a doctoral program to further refine and expand my expertise in data science and AI.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  color: '#4a4a4a',
                  mb: 5,
                  lineHeight: 1.8,
                  maxWidth: '90%'
                }}
              >
                Currently pursuing a PhD in Artificial Intelligence at UBI-University of Beira Interior, specializing in computer vision and deep learning applications.
              </Typography>
              <Stack 
                direction="row" 
                spacing={3}
                sx={{ mt: 2 }}
              >
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  sx={{
                    bgcolor: '#3366FF',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#2952CC'
                    }
                  }}
                >
                  About Me
                </Button>
                <Button
                  component={Link}
                  to="/research"
                  variant="outlined"
                  sx={{
                    borderColor: '#3366FF',
                    color: '#3366FF',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#2952CC',
                      color: '#2952CC',
                      bgcolor: 'rgba(51, 102, 255, 0.04)'
                    }
                  }}
                >
                  View Research
                </Button>
              </Stack>
            </motion.div>
          </Box>
          
          <Box sx={{ 
            position: 'relative',
            width: { xs: '280px', md: '400px' },
            height: { xs: '280px', md: '400px' },
            mx: { xs: 'auto', md: 0 },
            mt: { xs: 2, md: 6 },
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            border: '4px solid white',
            backgroundColor: '#fff'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ 
                width: '100%', 
                height: '100%',
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="/portfolio/Images/1720882263587.jpeg"
                alt="MD RASHIDUNNABI"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block'
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 