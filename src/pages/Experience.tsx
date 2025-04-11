import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  introduction?: string;
  responsibilities: Array<{
    title: string;
    description: string;
  }>;
}

const experiences: Experience[] = [
  {
    title: "Data Scientist",
    company: "Connexus IT Ventures Limited",
    location: "Dublin, Ireland",
    period: "11/2024 to Current",
    type: "Hybrid",
    responsibilities: [
      {
        title: "Predictive Analytics Development",
        description: "Designed and implemented predictive models using Python, TensorFlow, and Snowflake to enhance business decision-making and operational efficiency."
      },
      {
        title: "Customer Behavior Analysis",
        description: "Conducted data-driven insights on customer interactions using SQL, Python, and Power BI, optimizing retention strategies and marketing campaigns."
      },
      {
        title: "Automated Data Processing Pipelines",
        description: "Developed ETL pipelines using Apache Airflow and Snowflake to streamline data ingestion, transformation, and reporting."
      },
      {
        title: "AI-Powered Fraud Detection",
        description: "Built and deployed machine learning models for anomaly detection in transaction data, improving fraud detection accuracy and reducing financial risks."
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Leveraged NLP techniques to extract insights from customer feedback and support interactions, enhancing service efficiency and customer experience."
      }
    ]
  },
  {
    title: "Data Analyst",
    company: "Laya Healthcare",
    location: "Cork, County Cork",
    period: "10/2023 to 10/2024",
    type: "",
    introduction: "Completed a year-long rotation focusing on data-driven decision-making:",
    responsibilities: [
      {
        title: "AI Gen ACW Time Analysis",
        description: "Led AI-generated call log analysis using Python, Snowflake, and Plotly, reducing After-Call Work (ACW) time through outlier detection and data exploration."
      },
      {
        title: "April Call Trend Analysis",
        description: "Analyzed call volume fluctuations using Python, Plotly, and Snowflake to identify key factors affecting 'Claims' and 'Renewals', improving engagement strategies by."
      },
      {
        title: "Call and Email Volume Analysis",
        description: "Analyzed call/email trends with SQL and Python, performing exploratory data analysis to reveal a an increase in contact rate trends relative to membership growth."
      },
      {
        title: "Third-Party Claim Detection",
        description: "Developed a TensorFlow-based machine learning model, using Seaborn for visualization and NLP to analyze Claim_Notes, enhancing model accuracy through A/B testing."
      }
    ]
  },
  {
    title: "Data Scientist (Research Assistant)",
    company: "University College Cork",
    location: "Cork",
    period: "06/2023 to 10/2023",
    type: "",
    introduction: "Completed a 5-month project in environmental analytics, improving air quality forecasting with advanced machine learning and collaborative strategies.",
    responsibilities: [
      {
        title: "Advanced Predictive Modeling",
        description: "Led data analysis at five monitoring stations using Python and R, refining predictive blending and hybrid models to accurately forecast air pollutant levels."
      },
      {
        title: "Model Development with Advanced Algorithms",
        description: "Integrated Random Forests, XGBoost, and CatBoost into complex models, significantly improving forecast reliability and accuracy."
      },
      {
        title: "Data Visualization Expertise",
        description: "Crafted detailed visualizations with Plotly to showcase data patterns and model predictions, facilitating clear communication with stakeholders."
      },
      {
        title: "Collaborative Project Leadership",
        description: "Key contributor to the BEHAV-I-AIR project, collaborating with Cork City Council and UCC's Applied Psychology department to utilize forecasts in reducing urban pollution impacts."
      }
    ]
  },
  {
    title: "Research Assistant (Data Scientist)",
    company: "University of Barishal",
    location: "Barishal, Barishal",
    period: "09/2021 to 09/2022",
    type: "",
    introduction: "Participated in advanced research projects using deep learning and statistical methods to tackle healthcare challenges:",
    responsibilities: [
      {
        title: "Dengue Disease Spread Prediction (ML/AI)",
        description: "Used Python, Scikit-learn, Azure and Hadoop for data preprocessing and analysis, enhancing precision of public health decisions."
      },
      {
        title: "Brain Tumor Detection (Deep Learning/AI)",
        description: "Developed models with Python, TensorFlow, and Keras, employing Unet and ResNet50 architectures with extensive data augmentation, improving MRI-based tumor detection accuracy."
      },
      {
        title: "Plant Disease Detection (AI/Deep Learning)",
        description: "Applied TensorFlow and Python for Convolutional Neural Networks and image processing, effectively classifying plant diseases to support agricultural interventions."
      }
    ]
  },
  {
    title: "Freelancing (Data Analyst)",
    company: "Various Online Platforms (Upwork, Fiverr)",
    location: "Online",
    period: "08/2020 to 09/2022",
    type: "",
    introduction: "Provided freelance data analysis services, enhancing client success across various industries:",
    responsibilities: [
      {
        title: "Market Segmentation Analysis",
        description: "Utilized Python and K-means clustering via Scikit-learn to identify customer segments, increasing conversion rates by 25%."
      },
      {
        title: "Sales Forecasting Model",
        description: "Employed Python's ARIMA model for time series analysis, forecasting sales trends to reduce inventory costs by 15%."
      },
      {
        title: "Customer Churn Prediction",
        description: "Developed a logistic regression model with Python and TensorFlow, analyzing user data to decrease churn by 20%."
      },
      {
        title: "Operational Efficiency Analysis",
        description: "Performed regression analysis to boost manufacturing efficiency by 30%, visualizing improvements in Power BI for stakeholders."
      }
    ]
  },
  {
    title: "Data Science Intern",
    company: "Flip Robo Technologies",
    location: "Bengaluru, Karnataka",
    period: "03/2021 to 08/2021",
    type: "",
    introduction: "As a Data Science Intern at Flip Robo Technologies, applied data science and machine learning skills to deliver actionable insights and improve operations:",
    responsibilities: [
      {
        title: "Data Analysis",
        description: "Processed complex datasets to support business decisions using Python, R, SQL, and various visualization tools."
      },
      {
        title: "Model Development",
        description: "Built and refined machine learning and deep learning models, employing A/B testing to enhance accuracy and reliability."
      },
      {
        title: "Team Collaboration",
        description: "Worked with product managers, engineers, and data scientists to align on business needs and deliver data-driven solutions that meet project and company objectives."
      }
    ]
  }
];

const ExperiencePage = () => {
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
          Work History
        </Typography>
        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Box key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={2}
                sx={{ p: 4, position: 'relative', overflow: 'hidden' }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom color="primary">
                    {exp.title}
                    {exp.type && <Typography component="span" color="text.secondary"> ({exp.type})</Typography>}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    {exp.company} - {exp.location}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {exp.period}
                  </Typography>
                  {exp.introduction && (
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mt: 2,
                        mb: 2,
                        color: 'text.primary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {exp.introduction}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ pl: 2 }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Typography
                        variant="body1"
                        sx={{ 
                          display: 'inline',
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: '1rem',
                        }}
                      >
                        {resp.title}:{' '}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{ 
                          display: 'inline',
                          color: 'text.primary',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {resp.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default ExperiencePage; 