export const experienceTranslations = {
  en: {
    pageTitle: 'Work History',
    hybrid: 'Hybrid',
    // Add more translations as needed
  },
  zh: {
    pageTitle: '工作经历',
    hybrid: '混合办公',
    // Add more translations as needed
  },
  bn: {
    pageTitle: 'কর্ম ইতিহাস',
    hybrid: 'হাইব্রিড',
    // Add more translations as needed
  },
  pt: {
    pageTitle: 'Histórico Profissional',
    hybrid: 'Híbrido',
    // Add more translations as needed
  },
  // Add more languages as needed
};

export type Language = keyof typeof experienceTranslations;
export type TranslationKey = keyof typeof experienceTranslations.en;

export const getTranslation = (language: Language, key: TranslationKey): string => {
  return experienceTranslations[language]?.[key] || experienceTranslations.en[key];
}; 