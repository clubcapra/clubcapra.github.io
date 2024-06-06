import { createI18n } from 'vue-i18n';

type Lang = 'fr' | 'en';
const rawMessages: Record<string, Record<Lang, string>> = {
  home_title: {
    en: 'Building the future of robotics together',
    fr: "Construisons l'avenir de la robotique ensemble",
  },
  home_subtitle: {
    en: 'We are a student club that aims to develop the next generation of search and rescue robots.',
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
    en: 'Our robot Markhor winning the best in class in Search & Rescue award at EnRicH 2023',
    fr: 'Notre robot Markhor remportant le prix du meilleur robot en recherche et sauvetage à EnRicH 2023',
  },
  robots_design_title: {
    en: 'Robots designed from',
    fr: 'Robots conçus de',
  },
  scratch_title: {
    en: 'scratch',
    fr: 'A à Z',
  },
  robots_design_content: {
    en: 'Our robots are designed and built from scratch by our team of dedicated students. We use cutting-edge technologies and innovative designs to create robots that can navigate through challenging terrains and save lives.',
    fr: "Nos robots sont conçus et construits de A à Z par notre équipe d'étudiants dévoués. Nous utilisons des technologies de pointe et des conceptions innovantes pour créer des robots capables de naviguer dans des terrains difficiles et de sauver des vies.",
  },
  powered_by_title: {
    en: 'Powered by',
    fr: 'Alimenté par',
  },
  ai: {
    en: 'AI',
    fr: "l'IA",
  },
  powered_by_content: {
    en: 'Our robots are equipped with artificial intelligence that enables them to make autonomous decisions in real-time. From object detection to path planning, our robots are designed to be intelligent and efficient in their operations.',
    fr: "Nos robots sont équipés d'intelligence artificielle qui leur permet de prendre des décisions autonomes en temps réel. De la détection d'objets à la planification de trajectoires, nos robots sont conçus pour être intelligents et efficaces dans leurs opérations.",
  },
  view_projects_button: {
    en: 'View our projects',
    fr: 'Voir nos projets',
  },
  global_impact_title: {
    en: 'Impact on a global scale',
    fr: "Impact à l'échelle mondiale",
  },
  global_impact_content: {
    en: 'Our robots participate in international competitions and events every year. We have showcased our robots in countries like Thailand, Germany, Austria, and Australia. Our goal is to make a global impact and inspire the next generation of roboticists.',
    fr: "Nos robots participent à des compétitions et événements internationaux chaque année. Nous avons présenté nos robots dans des pays comme la Thaïlande, l'Allemagne, l'Autriche et l'Australie. Notre objectif est de faire un impact mondial et d'inspirer la prochaine génération de roboticiens.",
  },
  competitions_title: {
    en: 'Our competitions',
    fr: 'Nos compétitions',
  },
  notable_tasks_title: {
    en: 'Notable tasks',
    fr: 'Tâches notables',
  },
  zwentendorf: {
    en: 'Zwentendorf',
    fr: 'Zwentendorf',
  },
  austria: {
    en: 'Austria',
    fr: 'Autriche',
  },
  bangkok: {
    en: 'Bangkok',
    fr: 'Bangkok',
  },
  thailand: {
    en: 'Thailand',
    fr: 'Thaïlande',
  },
  dortmund: {
    en: 'Dortmund',
    fr: 'Dortmund',
  },
  germany: {
    en: 'Germany',
    fr: 'Allemagne',
  },
  sydney: {
    en: 'Sydney',
    fr: 'Sydney',
  },
  australia: {
    en: 'Australia',
    fr: 'Australie',
  },
  enrich_task_1: {
    en: 'Create a 3D map of the nuclear power plant',
    fr: 'Créer une carte 3D de la centrale nucléaire',
  },
  enrich_task_2: {
    en: 'Locate and identify radioactive sources',
    fr: 'Localiser et identifier les sources radioactives',
  },
  enrich_task_3: {
    en: 'Rescue a dummy from a hazardous area',
    fr: "Secourir un mannequin d'une zone dangereuse",
  },
  robocup2022_task_1: {
    en: 'Navigate through obstacle courses as fast as possible',
    fr: "Naviguer à travers des parcours d'obstacles le plus rapidement possible",
  },
  robocup2022_task_2: {
    en: 'Scan QR codes to collect information',
    fr: 'Scanner des codes QR pour collecter des informations',
  },
  robocup2022_task_3: {
    en: 'Use our robotic arm to pick up objects and place them in designated areas',
    fr: 'Utiliser notre bras robotique pour ramasser des objets et les placer dans des zones désignées',
  },
  robocup2021_task_1: {
    en: 'Navigate through obstacle courses as fast as possible',
    fr: "Naviguer à travers des parcours d'obstacles le plus rapidement possible",
  },
  robocup2021_task_2: {
    en: 'Use a thermal camera to detect heat sources',
    fr: 'Utiliser une caméra thermique pour détecter les sources de chaleur',
  },
  robocup2021_task_3: {
    en: 'Detect CO2 levels in the environment',
    fr: "Détecter les niveaux de CO2 dans l'environnement",
  },
  robocup2019_task_1: {
    en: 'Identify hazardous signs with our camera system',
    fr: 'Identifier les signes dangereux avec notre système de caméra',
  },
  robocup2019_task_2: {
    en: 'Navigate through obstacle courses as fast as possible',
    fr: "Naviguer à travers des parcours d'obstacles le plus rapidement possible",
  },
  learn_more: {
    en: 'Learn more',
    fr: 'En savoir plus',
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
  join_our_team_title: {
    en: 'Join our team',
    fr: 'Rejoins notre équipe',
  },
  join_our_team_content: {
    en: 'Are you passionate about robotics and want to make a difference? Join our team and be part of the next generation of search and rescue robots.',
    fr: 'Tu es passionné par la robotique et tu veux faire une différence? Rejoins notre équipe et fais partie de la prochaine génération de robots de recherche et de sauvetage.',
  },
  join_us: {
    en: 'Join us',
    fr: 'Rejoins nous',
  },
  our_team_title: {
    en: 'Our Team',
    fr: 'Notre équipe',
  },
  people_that_love_to_work_with_us: {
    en: 'People that love to work with us',
    fr: 'Ceux qui aiment travailler avec nous',
  },
  view_partner_plan: {
    en: 'View our partner plan',
    fr: 'Voir notre plan de partenariat',
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
  partners: {
    en: 'Partners',
    fr: 'Partenaires',
  },
  partner_gold: {
    en: 'Gold Partners',
    fr: 'Partenaires Or',
  },
  partner_silver: {
    en: 'Silver Partners',
    fr: 'Partenaires Argent',
  },
  partner_bronze: {
    en: 'Bronze Partners',
    fr: 'Partenaires Bronze',
  },
  engineering_mechanical: {
    en: 'Mechanical Engineering',
    fr: 'Génie Mécanique',
  },
  engineering_electrical: {
    en: 'Electrical Engineering',
    fr: 'Génie Électrique',
  },
  engineering_software: {
    en: 'Software Engineering',
    fr: 'Génie Logiciel',
  },
  engineering_gpa: {
    en: 'Automated Production Engineering',
    fr: 'Génie de la Production Automatisée',
  },
  engineering_software_master: {
    en: 'Master in Software Engineering',
    fr: 'Maîtrise en Génie Logiciel',
  },
  page_home: {
    en: 'About Us',
    fr: 'À propos',
  },
  page_team: {
    en: 'Team',
    fr: 'Équipe',
  },
  page_partners: {
    en: 'Partners',
    fr: 'Partenaires',
  },
  page_publications: {
    en: 'Publications',
    fr: 'Publications',
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
  // Get locale from store
  locale: (localStorage.getItem('locale') as Lang) || 'fr',
  fallbackLocale: 'fr',
  allowComposition: true,
  messages,
});
export default i18n;
