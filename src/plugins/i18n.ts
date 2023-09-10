import { createI18n } from 'vue-i18n';

type Lang = 'fr' | 'en';
const rawMessages: Record<string, Record<Lang, string>> = {
  btn_discover_our_partnership_plan: {
    en: 'Discover our partnership plan',
    fr: 'Découvrir notre plan de partenariat',
  },
  btn_learn_more: {
    en: 'Learn more',
    fr: 'En savoir plus',
  },
  btn_our_robots: {
    en: 'Our robots',
    fr: 'Nos robots',
  },
  competition_robocuprescue_description: {
    en: 'Robo Cup Rescue is our main competition. It is the biggest robotics competition that takes place every year in a different country. Our first participation was in Australia in 2019.',
    fr: "La RoboCup Rescue est notre principale compétition. Il s'agit de la plus grande compétition de robotique au monde et se tient chaque année dans un pays différent. Notre première participation fut en 2019 en Australie.",
  },
  discover_our_partnership: {
    en: 'Discover our partnership plan',
    fr: 'Découvrir le plan de partenariat',
  },
  email: {
    en: 'Email',
    fr: 'Courriel',
  },
  made_with_love: {
    en: 'Made in Montréal with',
    fr: 'Fait à Montréal avec',
  },
  mission_compete_description: {
    en: 'Participate and stand out in robotics competitions around the world.',
    fr: 'Participer et se démarquer dans des compétitions de robotique à travers le monde.',
  },
  mission_compete_title: {
    en: 'Compete',
    fr: 'Compétitionner',
  },
  mission_save_lives_description: {
    en: "Use robotics to create solutions that can have a direct impact on people's lives.",
    fr: 'Utiliser la robotique afin de créer des solutions qui peuvent avoir un impact direct sur la vie des gens.',
  },
  mission_save_lives_title: {
    en: 'Save lives',
    fr: 'Sauver des vies',
  },
  mission_train_future_engineers_description: {
    en: 'Push our members to develop multiple new engineering skills.',
    fr: 'Pousser nos membres à développer une multitude de compétences en ingénierie.',
  },
  mission_train_future_engineers_title: {
    en: 'Train future engineers',
    fr: 'Former les ingénieurs de demain',
  },
  our_code_description: {
    en: 'Using ROS, C++ et Python we are developping a robot platform that can be used by any robot. This platform can then be controlled by our Web user interface that is made with React and TypeScript. Our entire code base is open source because we want to make robotics easily accessible by everyone.',
    fr: "En utilisant ROS, C++ et Python nous développons une plateforme de contrôle de robot qui peut être utilisé par n'importe quel robot. Notre plateforme est contrôlée à l'aide de notre interface web qui est faite en React et TypeScript. Notre code en entier est open source afin de rendre la robotique facilement accessible à tous.",
  },
  our_code_title: {
    en: 'Our',
    fr: 'Notre',
  },
  our_mission_title: {
    en: 'Our mission',
    fr: 'Notre mission',
  },
  our_prototypes_description: {
    en: 'Capra builds robots since 1999. Our mission changed in 2016 when we decided to specialize in search and rescue robotics.',
    fr: 'L’équipe Capra conçoit des robots depuis 1999. Notre mission a changé depuis 2016 pour nous spécialiser en robotique de recherche et secourisme.',
  },
  our_prototypes_title: {
    en: 'Our prototypes',
    fr: 'Nos prototypes',
  },
  our_robots: {
    en: 'Our Robots',
    fr: 'Nos Robots',
  },
  our_team_description: {
    en: 'Our multidisciplinary team is ready to face any challenge !',
    fr: 'Notre équipe multidisciplinaire est toujours prête à faire face aux différents défis !',
  },
  our_team_title: {
    en: 'Our Team',
    fr: 'Notre équipe',
  },
  page_contact: {
    en: 'Contact',
    fr: 'Contact',
  },
  page_competitions: {
    en: 'Competitions',
    fr: 'Compétitions',
  },
  page_home: {
    en: 'Capra',
    fr: 'Capra',
  },
  page_partners: {
    en: 'Partners',
    fr: 'Partenaires',
  },
  page_ressources: {
    en: 'Ressources',
    fr: 'Ressources',
  },
  page_robots: {
    en: 'Robots',
    fr: 'Robots',
  },
  partner_gold: {
    en: 'Gold',
    fr: 'Or',
  },
  partner_silver: {
    en: 'Silver',
    fr: 'Argent',
  },
  partner_bronze: {
    en: 'Bronze',
    fr: 'Bronze',
  },
  people_that_love_to_work_with_us: {
    en: 'People that love to work with us',
    fr: 'Ceux qui aiment travailler avec nous',
  },
  see_our_github: {
    en: 'See our Github',
    fr: 'Voir notre Github',
  },
  where_to_find_us: {
    en: 'Where to find us?',
    fr: 'Où nous trouver ?',
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
