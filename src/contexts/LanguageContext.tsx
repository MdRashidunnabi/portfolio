import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  languageLabel: string;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  languageLabel: 'Language'
});

const languageLabels: { [key: string]: string } = {
  en: 'Language',
  zh: '語言',
  bn: 'ভাষা',
  pt: 'Idioma',
  es: 'Idioma',
  fr: 'Langue',
  de: 'Sprache',
  ja: '言語',
  ko: '언어',
  hi: 'भाषा'
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [languageLabel, setLanguageLabel] = useState(languageLabels.en);

  useEffect(() => {
    // Detect user's language from browser
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code.toLowerCase();
        
        // Map country codes to language codes
        const countryToLanguage: { [key: string]: string } = {
          cn: 'zh',
          hk: 'zh',
          tw: 'zh',
          bd: 'bn',
          in: 'hi',
          pt: 'pt',
          br: 'pt',
          // Add more country to language mappings as needed
        };

        // Set the language label based on detected country
        const detectedLanguage = countryToLanguage[countryCode] || 'en';
        setLanguageLabel(languageLabels[detectedLanguage] || languageLabels.en);
      } catch (error) {
        console.error('Error detecting language:', error);
        setLanguageLabel(languageLabels.en);
      }
    };

    detectLanguage();
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setLanguageLabel(languageLabels[lang] || languageLabels.en);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languageLabel }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 