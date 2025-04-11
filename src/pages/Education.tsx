import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  icon: React.ReactNode;
}

const education: Education[] = [
  {
    degree: "PhD",
    field: "Artificial Intelligence",
    institution: "UBI-University of Beira Interior",
    location: "Covilha, Portugal",
    period: "09/2024 to Current",
    icon: <SchoolIcon fontSize="large" />
  },
  {
    degree: "Master of Science",
    field: "Data Science and Analytics",
    institution: "Munster Technological University",
    location: "Cork, County Cork",
    period: "09/2022 to 09/2023",
    honors: "First Class Honours",
    icon: <SchoolIcon fontSize="large" />
  },
  {
    degree: "Post Graduation Diploma",
    field: "Data Science, Machine Learning And Neural Networks",
    institution: "DataTrained Education",
    location: "Bengaluru, India",
    period: "09/2020 to 09/2021",
    honors: "1st Division (1st Class Honours)",
    icon: <WorkspacePremiumIcon fontSize="large" />
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science And Technology",
    institution: "Beijing Institute of Technology",
    location: "Beijing, China",
    period: "09/2017 to 09/2021",
    honors: "1st class honours (Outstanding Student Award)",
    icon: <SchoolIcon fontSize="large" />
  },
  {
    degree: "Certificate of Higher Education",
    field: "Chinese Language Course",
    institution: "Northeast Normal University",
    location: "Jilin, China",
    period: "09/2016 to 09/2017",
    honors: "Graduated with 92% marks",
    icon: <LanguageIcon fontSize="large" />
  }
];

const EducationPage = () => {
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
          Education
        </Typography>
        <Stack spacing={4}>
          {education.map((edu, index) => (
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
                  {edu.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ fontWeight: 500 }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {edu.field}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {edu.location}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      {edu.period}
                    </Typography>
                    {edu.honors && (
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: 'success.main',
                          backgroundColor: 'success.light',
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 500
                        }}
                      >
                        {edu.honors}
                      </Typography>
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

export default EducationPage; 