import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// We can localize to any language and any number of languages.
const resources = {
  de: {
    translation: {
      lngName: 'Deutsch',
      app_name: 'GN_tools',
      home: 'Übersicht',
      timer: 'Boss Timer',
      aetherium: 'Ätherium Rechner',
      gold: 'Gold pro Stunde',
      warning: 'Warnung!',
      warn_msg: 'An der Seite wird noch gearbeitet.',
    },
  },
  en: {
    translation: {
      lngName: 'English',
      app_name: 'GN_tools',
      home: 'Overview',
      timer: 'Boss Timer',
      aetherium: 'Aetherium Calculator',
      gold: 'Gold per hour',
      warning: 'Warning!',
      warn_msg: 'The website is under construction.',
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === 'development',
  });
export default i18next;
