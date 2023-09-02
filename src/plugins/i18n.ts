import { createI18n } from 'vue-i18n';
import enCA from '../locales/en-CA.json';
import frCA from '../locales/fr-CA.json';

type MessageSchema = typeof enCA;

const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages: {
    en: enCA as MessageSchema,
    fr: frCA as MessageSchema, // Make sure frCA follows the MessageSchema
  },
});
export default i18n;
