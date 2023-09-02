import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    'made with love': 'Made in Montréal with',
  },
  fr: {
    'made with love': 'Fait à Montréal avec',
  },
};

type MessageSchema = (typeof messages)['en'];
const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  legacy: false, // we must set `false`, to use Compostion API
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
});
export default i18n;
