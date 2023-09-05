import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    'made with love': 'Made in Montréal with',
    'Our Team': 'Our Team',
    'Our prototypes': 'Our prototypes',
    learn_more: 'Learn more',
    mission_description:
      'Capra builds robots since 1999. Our mission changed in 2016 when we decided to specialize in search and rescue robotics.',
    multidisciplinary_team:
      'Our multidisciplinary team is ready to face any challenge !',
    prototype_description:
      'Capra builds robots since 1999. Our mission changed in 2016 when we decided to specialize in search and rescue robotics.',
  },
  fr: {
    'made with love': 'Fait à Montréal avec',
    'Our prototypes': 'Nos prototypes',
    'Our Team': 'Notre équipe',
    learn_more: 'En savoir plus',
    mission_description:
      'Capra builds robots since 1999. Our mission changed in 2016 when we decided to specialize in search and rescue robotics.',
    multidisciplinary_team:
      'Notre équipe multidisciplinaire est toujours prête à faire face aux différents défis !',
    prototype_description:
      'L’équipe Capra conçoit des robots depuis 1999. Notre mission a changé depuis 2016 pour nous spécialiser en robotique de recherche et secourisme.',
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
