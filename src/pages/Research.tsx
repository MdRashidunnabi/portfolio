import React from 'react';
import { Box, Container, Typography, Paper, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface Research {
  title: string;
  type: string;
  year: string;
  venue?: string;
  link?: string;
  dataset?: string;
  doi?: string;
  icon: React.ReactNode;
}

const research: Research[] = [
  {
    title: "Causality and \"In-the-Wild\" Video-Based Person Re-ID: A Survey",
    type: "Survey",
    year: "2025",
    venue: "SUBMITTED TO Electronics",
    link: "https://doi.org/10.48550/arXiv.2505.20540",
    icon: <ArticleIcon fontSize="large" />
  },
  {
    title: "DetReIDX: A Stress-Test Dataset for Real-World UAV-Based Person Recognition",
    type: "Dataset",
    year: "2025",
    venue: "SUBMITTED TO IEEE TRANSACTIONS ON BIOMETRICS, BEHAVIOR, AND IDENTITY SCIENCE",
    dataset: "https://www.it.ubi.pt/DetReIDX/",
    link: "https://arxiv.org/abs/2505.04793",
    icon: <ArticleIcon fontSize="large" />
  },
  {
    title: "Advanced Long-Range Person Detection in Ultra-Low Resolution Videos Using Deep Learning and Generative Modeling",
    type: "Paper",
    year: "2024",
    venue: "RECPAD 2024",
    link: "https://aprp.pt/wp-content/uploads/2025/01/RECPAD24_Proceedings.pdf",
    icon: <ArticleIcon fontSize="large" />
  },
  {
    title: "BEHAV-I-AIR Clean Air Day Roundtable – Report of Key Results and Actions",
    type: "Report",
    year: "2023",
    venue: "ResearchGate",
    doi: "10.17605/OSF.IO/CZQMW",
    icon: <MenuBookIcon fontSize="large" />
  },
  {
    title: "Predictive Analysis of Air Pollutants: Harnessing Meteorological Data to Forecast Air Quality Concentrations in Cork, Ireland",
    type: "MSc Thesis",
    year: "2023",
    venue: "Munster Technological University",
    doi: "10.5281/zenodo.15102420",
    icon: <SchoolIcon fontSize="large" />
  },
  {
    title: "Design and Implementation of Online Rental System",
    type: "BSc Thesis",
    year: "2021",
    venue: "Beijing Institute of Technology",
    doi: "10.5281/zenodo.15104130",
    icon: <SchoolIcon fontSize="large" />
  }
];

const ResearchPage = () => {
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
          Research Publications
        </Typography>
        <Stack spacing={4}>
          {research.map((item, index) => (
            <Paper
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              elevation={2}
              sx={{
                p: 4,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'scale(1.01)',
                  transition: 'transform 0.3s ease-in-out',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{ 
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 60
                }}>
                  {item.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  {item.link || item.doi ? (
                    <Link
                      href={item.link || `https://doi.org/${item.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ fontWeight: 500 }}>
                        {item.title}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  )}
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {item.type} • {item.year}
                  </Typography>
                  {item.venue && (
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      {item.venue}
                    </Typography>
                  )}
                  <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        View PDF
                      </Link>
                    )}
                    {item.dataset && (
                      <Link
                        href={item.dataset}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        Dataset
                      </Link>
                    )}
                    {item.doi && (
                      <Link
                        href={`https://doi.org/${item.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        DOI: {item.doi}
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default ResearchPage; 