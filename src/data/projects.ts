import { Markhor, Rove, type Robot } from './robots';

export interface Project {
  name: string;
  description: string;
  wiki?: string;
  img?: string;
  versions: Version[];
}

export interface Version {
  version?: string;
  year: number;
  members: string[]; // To keep the members' names and separate them from the members' objects
  description: string;
  paper?: string;
  robot?: Robot; // To link the project to a specific robot
}

export const Roboguard: Project = {
  name: 'project_roboguard_title',
  description: 'project_roboguard_description',
  versions: [
    {
      version: 'v1',
      robot: Rove,
      year: 2023,
      members: ['David Caron', 'Benoit Malenfant', 'Amber Louis'],
      description: 'Première version de Roboguard',
    },
    {
      version: 'v2',
      robot: Rove,
      year: 2025,
      members: ['Phillipe Desbiens'],
      description: "Ajout d'un BMS et changement du système d'arrêt d'urgence",
    },
  ],
};

export const StackEle: Project = {
  name: 'project_stackele_title',
  description: 'project_stackele_description',
  versions: [
    {
      version: 'v1',
      robot: Rove,
      year: 2024,
      members: ['Antoine Maltais', 'Antony Afif', 'Kevin Larochelle'],
      description: 'Première version du stack électrique',
    },
  ],
};

export const Carthographie: Project = {
  name: 'project_cartography_title',
  description: 'project_cartography_description',
  versions: [
    {
      robot: Rove,
      year: 2024,
      members: ['Simon Roy', 'Denis Turk', 'Nathan Gueissaz-Teufel'],
      description:
        "Implémentation du SLAM et l'intégration du gyroscope et du lidar",
    },
    {
      robot: Rove,
      year: 2025,
      members: ['Denis Turk', 'Janice Bessard'],
      description: 'Intégration de capteurs de radiation',
    },
  ],
};

export const ControleBaseMobile: Project = {
  name: 'project_control_mobile_base_title',
  description: 'project_control_mobile_base_description',
  versions: [
    {
      robot: Rove,
      year: 2024,
      members: ['Iliana De Carufel', 'Simon Roy'],
      description:
        'Implémaentation de noeud ROS2 pour le contrôle des chenilles et première configuration des contrôleur moteur.',
    },
    {
      robot: Rove,
      year: 2025,
      members: ['Denis Turk', 'Jules Lachapelle', 'Ethienne Tardif'],
      description:
        'Configuration des controllers moteur et implémentation du contrôle directionnel. Contrôle des flippers.',
    },
  ],
};

export const RoboticArm: Project = {
  name: 'project_arm_title',
  description: 'project_arm_description',
  versions: [
    {
      version: 'Ovis',
      year: 2021,
      members: [],
      description:
        'Première version du bras robotique. Assemplé avec des actuateurs Kinova.',
    },
    {
      version: 'Anguora',
      year: 2024,
      members: ['Philippe-Antoine Fortin'],
      description:
        'Optimisation de la structure du bras robotique. Réduction de la masse du bras.',
    },
    {
      year: 2025,
      members: ['Jules Lachapelle', 'Ethienne Tardif'],
      description: 'Intégration de la cinématique inverse pour le bras.',
    },
  ],
};

export const Winch: Project = {
  name: 'project_winch_title',
  description: 'project_winch_description',
  versions: [
    {
      year: 2025,
      robot: Rove,
      members: ['Zackary Boulanger', 'Kevin Larochelle'],
      description: 'Première version du stack mécanique',
    },
  ],
};

export const Web: Project = {
  name: 'project_web_title',
  description: 'project_web_description',
  versions: [
    {
      year: 2020,
      members: [
        'Gabriel Lévesque-Duval',
        'Alexandre Francoeur',
        'Ludovic Vanasse',
      ],
      description: 'Refonte du site web.',
    },
    {
      year: 2024,
      members: [
        'Samuel Lachance',
        'Denis Turk',
        'Raphael Vigneault',
        'Jacob Clermont',
        'David Caron',
      ],
      description: 'Migration du site web vers un nouveau framework (VUE).',
    },
    {
      year: 2025,
      members: ['Gabriel Lévesque-Duval', 'Denis Turk', 'Simon St-André'],
      description: 'Refonte du site web.',
    },
  ],
};

export const TopBox: Project = {
  name: 'project_topbox_title',
  description: 'project_topbox_description',
  versions: [
    {
      year: 2024,
      robot: Rove,
      members: ['Antony Afif', 'Antoine Maltais', 'Kevin Larochelle'],
      description:
        'Première version du top box pour le robot. Protège le matériel de cartographie et de vision.',
    },
  ],
};

export const BaseMobile: Project = {
  name: 'project_mobile_base_title',
  description: 'project_mobile_base_description',
  versions: [
    {
      version: 'v1',
      year: 2024,
      robot: Rove,
      members: ['Kevin Larochelle'],
      description: 'Première version de la base mobile pour le robot Rove.',
    },
    {
      version: 'Moteur roue',
      year: 2024,
      robot: Rove,
      members: [
        'Kevin Larochelle',
        'Léo-Daniel Gosselin',
        'Philippe-Antoine Fortin',
      ],
      description: 'Modification des moteurs de la base mobile.',
    },
  ],
};

export const DetecteurRadiation: Project = {
  name: 'project_radiation_title',
  description: 'project_radiation_description',
  versions: [
    {
      version: 'v1',
      year: 2024,
      robot: Markhor,
      members: ['Amber Louis', 'David Caron'],
      description: 'Première version du détecteur de radiation',
    },
    {
      version: 'Pin Diode',
      year: 2025,
      robot: Rove,
      members: ['Émile Lacrois', 'Thomas Rousseau-Sénécal'],
      description:
        'Détecteur de radiation angulaire. Utilisé pour détecter les sources de radiation.',
    },
    {
      version: 'Geiger',
      year: 2025,
      robot: Rove,
      members: ['David Caron'],
      description:
        'Détecteur de radiation général. Utilisé pour la cartographie.',
    },
  ],
};

export const Crate: Project = {
  name: 'project_crate_title',
  description: 'project_crate_description',
  versions: [
    {
      year: 2025,
      robot: Rove,
      members: [
        'Margot Metzger',
        'Pierre-Alix Paugain',
        'Steave-Jonathan Ibrango',
      ],
      description:
        'Première version afin de transporter le robot avec des compartiments pour les outils',
    },
  ],
};

export const ControlBoard: Project = {
  name: 'project_control_board_title',
  description: 'project_control_board_description',
  versions: [
    {
      version: 'v1',
      robot: Rove,
      year: 2024,
      members: ['Antoine Maltais', 'Denis Turk'],
      description: 'Première version de la carte de contrôle',
    },
  ],
};

export const LaunchHandler: Project = {
  name: 'project_launch_handler_title',
  description: 'project_launch_handler_description',
  versions: [
    {
      version: 'ROS1',
      robot: Markhor,
      year: 2024,
      members: ['Gabriel Lévesque-Duval'],
      description: 'Première version du launch handler.',
    },
    {
      version: 'ROS2',
      robot: Rove,
      year: 2025,
      members: ['Simon Roy', 'Denis Turk'],
      description: 'Deuxième version du launch handler.',
    },
  ],
};

export const GUI: Project = {
  name: 'project_gui_title',
  description: 'project_gui_description',
  versions: [
    {
      version: 'Capra Web UI',
      robot: Markhor,
      year: 2018,
      members: [
        'Charles Giguere',
        'Gabriel Lévesque-Duval',
        'Francis Lemaire',
        'Simon Pepin',
        'Alexis Martin',
        'Marc-Olivier Champagne',
        'Samuel Lachance',
        'Simon Roy',
        'Ludovic Vanasse',
      ],
      description: 'GUI pour le robot Markhor',
    },
    {
      version: 'Foxglove',
      robot: Rove,
      year: 2025,
      members: ['Simon Roy', 'Denis Turk', 'Alexis Martin'],
      description: 'GUI pour le robot Rove',
    },
  ],
};

export const Controle: Project = {
  name: 'project_control_title',
  description: 'project_control_description',
  versions: [
    {
      version: 'Manette de jeu',
      robot: Markhor,
      year: 2023,
      members: [],
      description: 'Première version du stack mécanique',
    },
    {
      version: 'Manette de jeu',
      robot: Rove,
      year: 2024,
      members: ['Denis Turk', 'Simon Roy'],
      description:
        'Controle du robot avec une manette de jeu incluant le gripper, le bras et la TPV',
    },
    {
      version: 'Space mouse',
      robot: Rove,
      year: 2025,
      members: ['Yanni Haddar'],
      description: 'Deuxième version du stack mécanique',
    },
  ],
};

export const ArtificialIntelligence: Project = {
  name: 'project_artificial_intelligence_title',
  description: 'project_artificial_intelligence_description',
  versions: [
    {
      version: 'Pose Detection',
      year: 2024,
      members: ['Samuel Barbeau', 'Nathan Gueissaz-Teufel'],
      description:
        "Création d'une IA pour détecter les poses humaines. Utilisé pour interpréter les requêtes.",
    },
    {
      version: 'Shepperd',
      year: 2025,
      members: ['Samuel Barbeau'],
      description:
        "Création d'une IA style assistant virtuel. Utilisé pour interpréter les requêtes et identifier les objets dans l'environnement.",
    },
  ],
};

export const Support: Project = {
  name: 'project_support_title',
  description: 'project_support_description',
  versions: [
    {
      year: 2025,
      members: ['Gabriel Massicotte-Duhamel'],
      description:
        "Création d'un support pour le robot afin de tester et travailler sur le robot.",
    },
  ],
};

export const projects: Project[] = [
  Roboguard,
  StackEle,
  Carthographie,
  ControleBaseMobile,
  RoboticArm,
  Winch,
  Web,
  TopBox,
  BaseMobile,
  DetecteurRadiation,
  Crate,
  ControlBoard,
  LaunchHandler,
  GUI,
  Controle,
  ArtificialIntelligence,
  Support,
];
