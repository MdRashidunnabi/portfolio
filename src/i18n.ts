import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export type TranslationKeys = {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    research: string;
    contact: string;
    language: string;
  };
  home: {
    greeting: string;
    title: string;
    intro: string;
    current: string;
    buttons: {
      about: string;
      research: string;
    };
  };
};

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
    returnNull: false;
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
  }
}

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        research: 'Research',
        contact: 'Contact',
        language: 'Language'
      },
      home: {
        greeting: "Hi, I'm MD RASHIDUNNABI",
        title: "Data Scientist & AI Researcher",
        intro: "As a Data Science Master's graduate from Munster Technological University with a deep focus on machine learning applications in healthcare, I am passionately pursuing a doctoral program to further refine and expand my expertise in data science and AI.",
        current: "Currently pursuing a PhD in Artificial Intelligence at UBI-University of Beira Interior, specializing in computer vision and deep learning applications.",
        buttons: {
          about: "About Me",
          research: "View Research"
        }
      }
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns: ['translation'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n; 