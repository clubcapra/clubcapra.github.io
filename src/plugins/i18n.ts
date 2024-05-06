import { createI18n } from 'vue-i18n';

type Lang = 'fr' | 'en';
const rawMessages: Record<string, Record<Lang, string>> = {
  home_title: {
    en: 'Building the future of robotics together',
    fr: "Construisons l'avenir de la robotique ensemble",
  },
  home_subtitle: {
    en: 'We are a student initiative that aims to develop the next generation of search and rescue robots.',
    fr: 'Nous sommes un club étudiant qui vise à développer la prochaine génération de robots de recherche et de sauvetage.',
  },
  get_in_touch_button: {
    en: 'Get in touch with us',
    fr: 'Contactez-nous pour en savoir plus',
  },
  about_us_title: {
    en: 'About Us',
    fr: 'À propos de nous',
  },
  our_story_title: {
    en: 'Our story',
    fr: 'Notre histoire',
  },
  our_story_content_1: {
    en: 'At Capra, we are a dynamic student club affiliated with École de technologie supérieure (ÉTS) in Montréal. Since our inception in 1999, we’ve passionately dedicated ourselves to the fascinating world of robotics. Our journey has been one of innovation, collaboration, and hands-on learning.',
    fr: "Chez Capra, nous sommes un club étudiant dynamique affilié à l'École de technologie supérieure (ÉTS) à Montréal. Depuis notre création en 1999, nous nous sommes passionnés pour le monde fascinant de la robotique. Notre parcours a été marqué par l'innovation, la collaboration et l'apprentissage pratique.",
  },
  our_story_content_2: {
    en: 'In 2016, we decided to focus on building search and rescue robots. With our expertise, we aim to make a tangible impact on real-world emergency scenarios. From rugged terrains to critical situations, Capra’s robots are designed to save lives and make a significant impact on the evolution of robotics.',
    fr: "En 2016, nous avons décidé de nous concentrer sur la construction de robots de recherche et de sauvetage. Avec notre expertise, nous visons à avoir un impact tangible sur les scénarios d'urgence réels. Des terrains accidentés aux situations critiques, les robots de Capra sont conçus pour sauver des vies et avoir un impact significatif sur l'évolution de la robotique.",
  },
  watch_our_robot_title: {
    en: 'Watch our robot in action',
    fr: 'Regardez notre robot en action',
  },
  watch_our_robot_subtitle: {
    en: 'Our robot Markhor winning the best in class in Search & Rescue at EnRicH 2023',
    fr: 'Notre robot Markhor remportant le prix de la meilleure classe en recherche et sauvetage à EnRicH 2023',
  },

  copyright: {
    en: '© 2024 Club Capra. All rights reserved.',
    fr: '© 2024 Club Capra. Tous droits réservés.',
  },
  our_socials: {
    en: 'Our socials',
    fr: 'Nos réseaux sociaux',
  },
  location: {
    en: '1219 William Street, Montréal, QC H3C 1K3',
    fr: '1219 rue William, Montréal, QC H3C 1K3',
  },
  room_number: {
    en: 'Room D-2014',
    fr: 'Local D-2014',
  },
  our_team_title: {
    en: 'Our Team',
    fr: 'Notre équipe',
  },
  people_that_love_to_work_with_us: {
    en: 'People that love to work with us',
    fr: 'Ceux qui aiment travailler avec nous',
  },
  team_administration: {
    en: 'Administration',
    fr: 'Administration',
  },
  team_electrical: {
    en: 'Electrical',
    fr: 'Électrique',
  },
  team_mechanical: {
    en: 'Mechanical',
    fr: 'Mécanique',
  },
  team_member: {
    en: 'Member',
    fr: 'Membre',
  },
  team_software: {
    en: 'Software',
    fr: 'Logiciel',
  },
  title_captain: {
    en: 'Captain',
    fr: 'Capitaine',
  },
  title_co_captain: {
    en: 'Co-Captain',
    fr: 'Co-Capitaine',
  },
  title_co_captain_treasury: {
    en: 'Treasury & Co-Captain',
    fr: 'Trésorerie & Co-Capitaine',
  },
  title_electrical_team_leader: {
    en: 'Electrical Team Lead',
    fr: 'Chef Électrique',
  },
  title_mechanical_team_leader: {
    en: 'Mechanical Team Lead',
    fr: 'Chef Mécanique',
  },
  title_software_team_leader: {
    en: 'Software Team Lead',
    fr: 'Chef Logiciel',
  },
  title_technical_director: {
    en: 'Technical Director',
    fr: 'Directeur Technique',
  },
};

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
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
});
export default i18n;
