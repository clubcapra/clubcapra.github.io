import { createI18n } from 'vue-i18n';

const modules = import.meta.glob('./i18n/*.ts', { eager: true });

type Lang = 'fr' | 'en';
const rawMessages: Record<string, Record<Lang, string>> = {};
for (const path in modules) {
  if (Object.prototype.hasOwnProperty.call(modules, path)) {
    Object.assign(rawMessages, (modules[path] as any).default);
  }
}

const messages: Record<Lang, Record<string, string>> = {
  fr: {},
  en: {},
};

// Converts raw messages to a Record of language keys and their corresponding translations.
for (const [key, trads] of Object.entries(rawMessages)) {
  for (const [lang, trad] of Object.entries(trads)) {
    messages[lang as Lang][key] = trad;
  }
}

const i18n = createI18n({
  legacy: false, // we must set `false`, to use Compostion API
  // Get locale from store
  locale: (localStorage.getItem('locale') as Lang) || 'fr',
  fallbackLocale: 'fr',
  allowComposition: true,
  messages,
});
export default i18n;
