import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

interface Skill {
  name: string;
  category: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

interface Language {
  name: string;
  level: string;
}

const technicalSkills: Skill[] = [
  { name: 'Python', category: 'Programming' },
  { name: 'R', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Neural Networks (CNN, RNN)', category: 'AI/ML' },
  { name: 'Natural Language Processing', category: 'AI/ML' },
  { name: 'Data Visualization', category: 'Tools' },
  { name: 'Power BI', category: 'Tools' },
  { name: 'Hadoop', category: 'Big Data' },
  { name: 'Spark', category: 'Big Data' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Snowflake', category: 'Cloud' },
  { name: 'Statistical Analysis', category: 'Analytics' },
  { name: 'A/B Testing', category: 'Analytics' },
  { name: 'Exploratory Data Analysis', category: 'Analytics' }
];

const softSkills: string[] = [
  'Effective communication',
  'Team collaboration',
  'Problem-solving',
  'Adaptability',
  'Leadership',
  'Project management',
  'Decision-making'
];

const certifications: Certification[] = [
  {
    title: 'Applied Machine Learning with Python',
    issuer: 'IBM',
    date: '01/01/2022'
  },
  {
    title: 'COVID-19 Pneumonia Classification (Deep learning)',
    issuer: 'Udemy',
    date: '01/10/2021'
  },
  {
    title: 'Best Admission Ambassador',
    issuer: 'Beijing Institute of Technology',
    date: '01/06/2019'
  },
  {
    title: 'Volunteer Certificate',
    issuer: 'Beijing Institute of Technology',
    date: '04/05/2018'
  },
  {
    title: 'HSK 4 (Chinese Level Test - Intermediate)',
    issuer: 'Confucius Institute, China',
    date: '17/08/2016'
  }
];

const languages: Language[] = [
  { name: 'English', level: 'Proficient (C1)' },
  { name: 'Chinese (Mandarin)', level: 'Proficient (C1)' },
  { name: 'Bengali', level: 'Native' },
  { name: 'Portuguese', level: 'Basic' }
];

const AboutPage = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 3, md: 4 }}>
          {/* Professional Summary */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              color="primary"
              sx={{ 
                fontSize: { xs: '1.75rem', md: '2.125rem' },
                mb: 2 
              }}
            >
              Professional Summary
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: '0.975rem', md: '1rem' }
              }}
            >
              As a Data Science Master's graduate from Munster Technological University,
              specializing in data science, machine learning, artificial intelligence, and
              natural language processing, I am deeply committed to advancing research in
              these areas. My academic journey has been enriched with analytical projects
              and publications in AI/ML, providing a robust foundation for data-driven
              innovation. I am particularly passionate about leveraging my skills to enhance
              predictive models and analytics strategies within academia, contributing
              significantly to research in sectors such as finance, retail, and
              telecommunications. Working in the company will enable me to deepen my
              technical and analytical skills, driving innovation and adding substantive value
              to the professional community.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: '0.975rem', md: '1rem' }
              }}
            >
              My goal is to contribute significantly to the field by developing sophisticated 
              methodologies that enhance accuracy and efficiency in the sector of Computer Vision, 
              particularly in advanced person detection and recognition systems.
            </Typography>
          </Paper>

          {/* Technical Skills */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <CodeIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Technical Skills
              </Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: { xs: 0.5, md: 1 } 
              }}
            >
              {technicalSkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill.name}
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    m: 0.5,
                    fontSize: { xs: '0.75rem', md: '0.875rem' }
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Soft Skills */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <EmojiPeopleIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Soft Skills
              </Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: { xs: 0.5, md: 1 } 
              }}
            >
              {softSkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  color="secondary"
                  variant="outlined"
                  sx={{ 
                    m: 0.5,
                    fontSize: { xs: '0.75rem', md: '0.875rem' }
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Certifications */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <WorkspacePremiumIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Certifications
              </Typography>
            </Box>
            <Stack spacing={2}>
              {certifications.map((cert, index) => (
                <Box key={index}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer} • {cert.date}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>

          {/* Languages */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <TranslateIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Languages
              </Typography>
            </Box>
            <Stack spacing={2}>
              {languages.map((language, index) => (
                <Box key={index}>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                  >
                    {language.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  >
                    {language.level}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>

          {/* Awards and Honors */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <EmojiEventsIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Awards and Honors
              </Typography>
            </Box>
            <Stack spacing={2}>
              <Box>
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                >
                  Certificate of Honor Outstanding Aides
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                >
                  Beijing Institute of Technology (China) • 01/12/2021
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {/* Extra Curricular Activities */}
          <Paper
            elevation={2}
            sx={{ p: { xs: 2, md: 4 } }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}
            >
              <GroupsIcon sx={{ color: 'primary.main' }} />
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Extra Curricular Activities
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            >
              • Led tech meetups, boosting leadership and community ties<br />
              • Presented at industry seminars, sharpening public speaking skills<br />
              • Organized coding workshops for students, enhancing teaching abilities<br />
              • Participated in hackathons, developing problem-solving skills<br />
              • Volunteered at tech conferences, expanding professional network
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage; 