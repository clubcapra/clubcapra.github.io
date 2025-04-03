import { createI18n } from 'vue-i18n';

type Lang = 'fr' | 'en';
const rawMessages: Record<string, Record<Lang, string>> = {
  // home
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
  our_story_title: {
    en: 'Our story',
    fr: 'Notre histoire',
  },
  our_story_content_1: {
    en: "At Capra, we are a dynamic student club from École de technologie supérieure (ÉTS) in Montréal. Since our inception in 1999, we've passionately dedicated ourselves to the fascinating world of robotics. Our journey has been one of innovation, collaboration, and hands-on learning.",
    fr: "Chez Capra, nous sommes un club étudiant dynamique de l'École de technologie supérieure (ÉTS) à Montréal. Depuis notre création en 1999, nous nous sommes passionnés pour le monde fascinant de la robotique. Notre parcours a été marqué par l'innovation, la collaboration et l'apprentissage pratique.",
  },
  our_story_content_2: {
    en: "In 2016, we decided to focus on building search and rescue robots. With our expertise, we aim to make a tangible impact on real-world emergency scenarios. From rugged terrains to critical situations, Capra's robots are designed to save lives and make a significant impact on the evolution of robotics.",
    fr: "En 2016, nous avons décidé de nous concentrer sur la construction de robots de recherche et de sauvetage. Avec notre expertise, nous visons à avoir un impact tangible sur les scénarios d'urgence réels. Des terrains accidentés aux situations critiques, les robots de Capra sont conçus pour sauver des vies et avoir un impact significatif sur l'évolution de la robotique.",
  },
  watch_our_robot_title: {
    en: 'Watch our robot in action',
    fr: 'Regardez notre robot en action',
  },
  video_robot_in_action: {
    en: 'Video of our robot in action',
    fr: 'Vidéo de notre robot en action',
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
  people_that_love_to_work_with_us: {
    en: 'People that love to work with us',
    fr: 'Ceux qui aiment travailler avec nous',
  },
  view_partner_plan: {
    en: 'View our partner plan',
    fr: 'Voir notre plan de partenariat',
  },
  // competitions
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
  // footer
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
  // team
  our_team_title: {
    en: 'Our Team',
    fr: 'Notre équipe',
  },
  team_administration_title: {
    en: 'Administration',
    fr: 'Administration',
  },
  team_administration_description: {
    en: 'Management team of the club',
    fr: 'Équipe administrative du club',
  },
  team_maintenance_title: {
    en: 'Maintenance',
    fr: 'Maintenance',
  },
  team_maintenance_description: {
    en: 'Robot maintenance team',
    fr: 'Équipe de maintenance des robots',
  },
  team_other_projects_title: {
    en: 'Other projects',
    fr: 'Autres projets',
  },
  team_other_projects_description: {
    en: 'Other projects of the club',
    fr: 'Autres projets du club',
  },
  team_member: {
    en: 'Member',
    fr: 'Membre',
  },
  title_captain: {
    en: 'Captain',
    fr: 'Capitaine',
  },
  title_co_captain: {
    en: 'Co-Captain',
    fr: 'Co-Capitaine',
  },
  title_treasury: {
    en: 'Treasury',
    fr: 'Trésorerie',
  },
  title_logistics_manager: {
    en: 'Logistics Manager',
    fr: 'Responsable Logistique',
  },
  title_project_manager: {
    en: 'Project Manager',
    fr: 'Responsable de Projet',
  },
  title_technical_director: {
    en: 'Technical Director',
    fr: 'Directeur Technique',
  },
  title_technical_director_f: {
    en: 'Technical Director',
    fr: 'Directrice Technique',
  },
  title_social_coordinator: {
    en: 'Social Coordiantor',
    fr: 'Coordinateur Social',
  },
  title_social_manager: {
    en: 'Social Manager',
    fr: 'Responsable Social',
  },
  title_event_manager: {
    en: 'Event Manager',
    fr: 'Responsable Événementiel',
  },
  title_partnership_manager: {
    en: 'Partnership Manager',
    fr: 'Responsable Partenariat',
  },
  title_merchandise_manager: {
    en: 'Merchandise Manager',
    fr: 'Responsable Marchandise',
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
  // projects
  project_roboguard_title: {
    en: 'Roboguard',
    fr: 'Roboguard',
  },
  project_roboguard_description: {
    en: 'Robot safety. It is used to analyze the battery and current. Allows remote emergency stop activation.',
    fr: "Sécurité du robot. Il est utilisé pour analyser la batterie et le courant. Permet d'enclencherer l'arrêt d'urgence à distance.",
  },
  project_stackele_title: {
    en: 'Electrical Stack',
    fr: 'Pile Électrique',
  },
  project_stackele_description: {
    en: 'Electrical components of the mobile base. It is used for power management and motor control.',
    fr: "Composantes électriques de la base mobile. Il est utilisé pour la gestion de l'alimentation et l'asservissement des moteurs.",
  },
  project_cartography_title: {
    en: '3D Mapping',
    fr: 'Cartographie 3D',
  },
  project_cartography_description: {
    en: "3D mapping and annotation of the robot's environment. It is used for autonomous navigation.",
    fr: "Cartographie 3D et annotation de l'environement du robot. Il est utilisé pour la navigation autonome.",
  },
  project_control_mobile_base_title: {
    en: 'Mobile Base Control',
    fr: 'Contrôle de la base mobile',
  },
  project_control_mobile_base_description: {
    en: 'Control of the mobile base. It is used for the movement control of the robot.',
    fr: 'Conversion des commandes de contrôle en mouvement. Perment de contrôler précisément le robot.',
  },
  project_arm_title: {
    en: 'Robotic Arm',
    fr: 'Bras robotique',
  },
  project_arm_description: {
    en: 'Robotic arm installed on the front of the robot. It is used for object manipulation and mannequin removal during search and rescue tasks.',
    fr: "Bras robotique installé sur l'avant du robot. Il est utilisé pour la manipulation d'objets et au retrait du mannequin lors des épreuves de recherche et sauvetage.",
  },
  project_gripper_title: {
    en: 'Gripper',
    fr: 'Pince Robotique',
  },
  project_gripper_description: {
    en: 'Gripper installed on the robotic arm. It is used to grasp objects such as valves or door handles. It is installed at the end of the robotic arm.',
    fr: "Pince utilisée pour saisir des objets comme des valves ou des poignées de portes. Elle est installée à l'extrémité du bras robotique.",
  },
  project_winch_title: {
    en: 'Winch',
    fr: 'Treuil',
  },
  project_winch_description: {
    en: 'Winch installed on the front of the robot. In a rescue situation, it is used to pull the mannequin.',
    fr: 'Treuil avant du robot. En situation de sauvetage, il est utilisé pour tirer le mannequin.',
  },
  project_web_title: {
    en: 'Website',
    fr: 'Site Web',
  },
  project_web_description: {
    en: 'The team website. It is used to share information about the club and projects.',
    fr: "Le site web de l'équipe. Il est utilisé pour partager les informations sur le club et les projets.",
  },
  project_topbox_title: {
    en: 'Top Box',
    fr: 'Boite Supérieure',
  },
  project_topbox_description: {
    en: 'Top box of the robot. It is used to protect the computer and other electronic components.',
    fr: "Boite supérieure du robot. Elle est utilisée pour protégé l'ordinateur de calcul et les autres composantes électroniques",
  },
  project_mobile_base_title: {
    en: 'Mobile Base',
    fr: 'Base Mobile',
  },
  project_mobile_base_description: {
    en: 'Mobile base of the robot. It is used for the movement of the robot.',
    fr: 'Partie méchanique du robot. Elle est utilisée pour le déplacement du robot.',
  },
  project_radiation_title: {
    en: 'Radiation Detector',
    fr: 'Détecteur de radiation',
  },
  project_radiation_description: {
    en: 'Radiation detector installed on the robot. It is used in scenarios in a nuclear power plant.',
    fr: 'Détecteur de radiation installé sur le robot. Il est utilisé dans des scénarios dans une centrale nucléaire.',
  },
  project_crate_title: {
    en: 'Crate',
    fr: 'Boite de transport',
  },
  project_crate_description: {
    en: 'Transport box of the robot with compartments for tools',
    fr: 'Boite de transport du robot avec des compartiments pour les outils',
  },
  project_control_board_title: {
    en: 'Controle Board',
    fr: 'Carte de contrôle',
  },
  project_control_board_description: {
    en: 'Robot control board. It is used to control the winch, multicolor LEDs and front and rear lights.',
    fr: 'Carte de contrôle du robot. Elle est utilisée pour contrôler le treuil, les LEDs multicolore et les lumières avant et arrières.',
  },
  project_launch_handler_title: {
    en: 'Launch Handler',
    fr: 'Gestionnaire de lancement',
  },
  project_launch_handler_description: {
    en: 'Robot launch handler. It is used to control the robot during the competition allowing to launch configurations specific to each event.',
    fr: 'Gestionnaire de lancement du robot. Il est utilisé pour le contrôle du robot lors de la compétition permettant de lancer des configurations propres à chaque épreuve.',
  },
  project_gui_title: {
    en: 'GUI',
    fr: 'GUI',
  },
  project_gui_description: {
    en: 'Robot GUI. It is used for robot control and visualization of the robot and its environment state.',
    fr: "Interface graphique du robot. Elle est utilisée pour le contrôle du robot et de la visualisation de l'état de celui-ci et de son environnement.",
  },
  project_control_title: {
    en: 'Control System',
    fr: 'Système de contrôle',
  },
  project_control_description: {
    en: 'Robot control system. It is used for the integration of the different systems of the robot. It is used for remote control/gamepad control of the robot.',
    fr: 'Intégration des différents systèmes du robot. Il est utilisé pour le contrôle du robot par télécommande/manette.',
  },
  project_artificial_intelligence_title: {
    en: 'Artificial Intelligence',
    fr: 'Intelligence Artificielle',
  },
  project_artificial_intelligence_description: {
    en: 'Artificial intelligence of the robot. It is used for autonomous navigation and object detection.',
    fr: "Intelligence artificielle du robot. Elle est utilisée pour la navigation autonome et la détection d'objets.",
  },
  project_support_title: {
    en: 'Stand',
    fr: 'Support',
  },
  project_support_description: {
    en: 'Robot stand. It is used to work on the robot and test motor controls.',
    fr: 'Support du robot. Il permet de travailler sur le robot et de tester les contrôles de moteur.',
  },
  // partners
  partners: {
    en: 'Partners',
    fr: 'Partenaires',
  },
  partner_principal: {
    en: 'Principal Partners',
    fr: 'Partenaires Principal',
  },
  partner_platinum: {
    en: 'Platinum Partners',
    fr: 'Partenaires Platine',
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
  // join
  our_next_competition: {
    en: 'Our next competition',
    fr: 'Notre prochaine compétition',
  },
  our_next_event: {
    en: 'Our next event',
    fr: 'Notre prochain événement',
  },
  faq: {
    en: 'FAQ',
    fr: 'FAQ',
  },
  question: {
    en: 'Q',
    fr: 'Q',
  },
  answer: {
    en: 'A',
    fr: 'R',
  },
  question_implication: {
    en: 'What is the level of implication required?',
    fr: "Quel est le niveau d'implication requis?",
  },
  answer_implication: {
    en: 'We do not impose hours on our members, but we ask for clear communication about unavailability. It is encouraged to complete hours for the Génie+ mention.',
    fr: "Nous n'imposons pas d'heures à nos membres, mais nous demandons une communication claire sur les indisponibilités. Il est encouragé de faire des heures pour la mention Génie+.",
  },
  question_skills: {
    en: 'What skills are you looking for?',
    fr: 'Quelles compétences recherchez-vous?',
  },
  answer_skills: {
    en: "We are looking for people who don't hesitate to ask the right questions and who are independent. We encourage learning and design tutorials to introduce new members. It's a plus to know Fusion, Altium and ROS.",
    fr: "Nous recherchons des gens qui n'hésitent pas à poser les bonnes questions et qui sont autonome. Nous encourageons l'apprentissage et concevons des tutoriels pour initier les nouveau membres. C'est un plus de connaitre Fusion, Altium et ROS.",
  },
  question_apply: {
    en: 'How can I apply?',
    fr: 'Comment puis-je postuler?',
  },
  answer_apply: {
    en: 'To apply, please complete the "Adhésion aux clubs étudiants" form on ÉTS Formaires and do not hesitate to visit us for more information.',
    fr: 'Pour postuler, veuillez remplir le formulaire "Adhésion aux clubs étudiants" sur ÉTS Formulaires et n\'hésitez pas à nous visiter pour plus d\'informations.',
  },
  question_recruitment_period: {
    en: 'When is the recruitment period?',
    fr: 'Quand est la période de recrutement?',
  },
  answer_recruitment_period: {
    en: 'The recruitment period typically starts in September but we accept members at any time.',
    fr: "La période de recrutement commence généralement en septembre, mais nous acceptons des membres à n'importe quel moment.",
  },
  question_visit: {
    en: 'Can I visit your club?',
    fr: 'Puis-je visiter votre club?',
  },
  answer_visit: {
    en: 'Yes! We are always happy to welcome visitors to our club. Please contact us to schedule a visit.',
    fr: "Oui! Nous sommes toujours heureux d'accueillir des visiteurs dans notre club. Veuillez nous contacter pour planifier une visite.",
  },
  passionate_students_title: {
    en: 'Passionate students',
    fr: 'Étudiants passionnés',
  },
  passionate_students_content: {
    en: 'Join our team and be part of the next generation of search and rescue robots. We are looking for passionate students who want to make a difference in the world of robotics.',
    fr: 'Rejoignez notre équipe et faites partie de la prochaine génération de robots de recherche et de sauvetage. Nous recherchons des étudiants passionnés qui veulent faire une différence dans le monde de la robotique.',
  },
  social_title: {
    en: 'Social',
    fr: 'Social',
  },
  social_content: {
    en: 'Our team not only does research and development, we also organize social events to strengthen bonds between members. Join us to learn more!',
    fr: 'Notre équipe ne fait pas seulement de la recherche et du développement, nous organisons également des événements sociaux pour renforcer les liens entre les membres. Rejoignez-nous pour en savoir plus!',
  },
  nuclear_plant_title: {
    en: 'Nuclear Power Plant',
    fr: 'Centrale Nucléaire',
  },
  nuclear_plant_content: {
    en: 'Our next competition (ENRICH 2025) will be held at the Zwentendorf nuclear power plant in Austria. We will be competing against teams from around the world to demonstrate the capabilities of our robots in a real-world emergency scenario.',
    fr: "Notre prochaine compétition (ENRICH 2025) se tiendra à la centrale nucléaire de Zwentendorf en Autriche. Nous affronterons des équipes du monde entier pour démontrer les capacités de nos robots dans un scénario d'urgence réel.",
  },
  i_will_be_there: {
    en: 'Regester',
    fr: "M'inscrire",
  },
  information_evening_title: {
    en: 'Information Evening',
    fr: "Soirée d'information",
  },
  information_evening_content: {
    en: 'We will present our club and our various projects for each department. This session is intended for all students wanting to learn more about our club, regardless of their field of study or level of experience.',
    fr: "Nous allons présenter notre club et nos divers projets pour chaque département. Cette séance est destiné à tous les étudiants voulant en apprendre plus sur notre club, peu importe leur domaine d'étude ou leur degré d'expérience.",
  },
  treat_pizza: {
    en: "and we'll treat you with pizza!",
    fr: "et on t'offre la pizza!",
  },
  meet_us: {
    en: 'Come meet us on',
    fr: 'Viens nous rencontrer le',
  },
  at_time: {
    en: 'at',
    fr: 'à',
  },
  at_location: {
    en: 'at',
    fr: 'au',
  },
  custom_robot_title: {
    en: 'Custom Robot',
    fr: 'Robot sur mesure',
  },
  custom_robot_content: {
    en: 'Our robots are tailor-made to perform specific tasks in harsh environments. From object detection to path planning, they are designed to be efficient in their operations. So, each part of our robot is custom designed by our team.',
    fr: "Nos robots sont conçus sur mesure pour effectuer des tâches spécifiques dans des environnements difficiles. De la détection d'objets à la planification de trajectoires, ils sont conçus pour être efficaces dans leurs opérations. Donc, chaques pièces de notre robot est conçu sur mesure par notre équipe.",
  },
  robot_optimisation_title: {
    en: 'Robot Optimisation',
    fr: 'Optimisation du Robot',
  },
  robot_optimisation_content: {
    en: 'Our robots are optimized to perform complex tasks with precision and efficiency. From motor control to sensor interface, they are designed to be reliable and robust in their operations. Each part is therefore optimized to be as efficient as possible.',
    fr: "Nos robots sont optimisés pour effectuer des tâches complexes avec précision et efficacité. Du contrôle moteur à l'interface de capteur, ils sont conçus pour être fiables et robustes dans leurs opérations. Chaques pièces est donc optimisé pour être le plus performant possible.",
  },
  pcb_design_title: {
    en: 'PCB Design',
    fr: 'Conception de PCB',
  },
  pcb_design_content: {
    en: 'Our robots are equipped with cutting-edge equipment that allows them to perform certain tasks. However, some specific needs require personalized electronic cards. This is why we design custom PCBs.',
    fr: "Nos robots sont équipés de matériel de pointe qui leur permet d'effectuer certaines tâches. Cependant, certains besoins spécifiques nécessitent des cartes électroniques personnalisées. C'est pourquoi nous concevons des PCB sur mesure.",
  },
  electrical_stack_title: {
    en: 'Electrical Stack',
    fr: 'Pile Électrique',
  },
  electrical_stack_content: {
    en: 'Our robots are equipped with a wide range of electrical components such as motor drivers to power supplies. We therefore have an electric stack that allows our robots to be reliable and robust in their operations while being safe.',
    fr: "Nos robots sont équipés d'une large gamme de composants électriques tels que des contrôleurs de moteur aux alimentations électriques. Nous avons donc une pile électrique qui permet à nos robots d'être fiables et robustes dans leurs opérations tout en étant sécuritaire.",
  },
  ai_title: {
    en: 'AI - Machine Learning',
    fr: 'IA - Apprentissage Machine',
  },
  ai_content: {
    en: 'During our challenges, our robots must be able to identify objects and people. Our AIs are therefore trained using machine learning algorithms to be effective in emergency scenarios.',
    fr: "Durant nos épreuves, nos robots doivent être capables d'identifier des objets et des personnes. Nos IA sont donc entraînés à l'aide d'algorithmes d'apprentissage machine pour être éfficace lors des scénarios d'urgence.",
  },
  mapping_title: {
    en: 'Mapping & Autonomy',
    fr: 'Cartographie & Autonomie',
  },
  mapping_content: {
    en: 'During our competitions, our robots must be capable of making autonomous decisions. To achieve this, they are equipped with 3D mapping, path planning and autonomy systems that allow them to navigate difficult terrain.',
    fr: "Durant nos compétitions, nos robots doivent être capables de prendre des décisions autonomes. Afin de réaliser cela, ils sont équipés de systèmes de cartographie 3D, de planification de trajectoires et d'autonomie qui leur permettent de naviguer dans des terrains difficiles.",
  },
  // pages titles
  page_home: {
    en: 'About Us',
    fr: 'À propos',
  },
  page_members: {
    en: 'Members',
    fr: 'Membres',
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
  page_join: {
    en: 'Join Us',
    fr: 'Rejoins-nous',
  },
  language: {
    en: 'Language',
    fr: 'Langue',
  },
  previous: {
    en: 'Previous',
    fr: 'Précédent',
  },
  next: {
    en: 'Next',
    fr: 'Suivant',
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
