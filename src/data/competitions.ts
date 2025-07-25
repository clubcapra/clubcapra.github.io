import enrich2025 from '@clubcapra/assets/media/zwentendorf_2025/team.png';
import elrob2024 from '@clubcapra/assets/media/trier/team.png';
import enrich2023 from '@clubcapra/assets/media/zwentendorf_2023/zwentendorf_team1.avif';
import robocup2022 from '@clubcapra/assets/media/bangkok/team_2022.jpg';
import robocup2021 from '@clubcapra/assets/media/dortmund/team2021.jpg';
import robocup2019 from '@clubcapra/assets/media/sydney/comp_team_2019.jpg';

import dummy from '@clubcapra/assets/media/elrob/dummy.png';
import map from '@clubcapra/assets/media/elrob/map.png';
import rocks from '@clubcapra/assets/media/elrob/rocks.png';
import motherNature from '@clubcapra/assets/media/elrob/mother_nature.png';

import {
  type Location,
  thun,
  zwentendorf,
  trier,
  bangkok,
  dortmund,
  sydney,
} from './locations';

export interface Task {
  title: string;
  description?: string;
  image?: string;
}

export interface Competition {
  title: string;
  description?: string;
  year: number;
  location: Location;
  link?: string;
  image: string;
  tasks: Task[];
}

export const nextCompetition: Competition = {
  title: 'ELROB',
  description: 'elrob_difficulties',
  year: 2026,
  location: thun,
  link: 'https://elrob.org/elrob-2026',
  image: motherNature,
  tasks: [
    {
      title: 'task_mapping_photorealistic',
      description: 'task_elrob_mapping_description',
      image: map,
    },
    {
      title: 'task_autonomous_navigation',
      description: 'task_elrob_mule_description',
      image: rocks,
    },
    {
      title: 'task_rescue_hazardous',
      description: 'task_elrob_rescue_hazardous_description',
      image: dummy,
    },
  ],
};

export const competitions: Competition[] = [
  {
    image: enrich2025,
    title: 'EnRicH',
    year: 2025,
    location: zwentendorf,
    link: 'https://enrich2025.european-robotics.eu/',
    tasks: [
      { title: 'task_mapping_nuclear_power_plant' },
      { title: 'task_nuclear_source' },
      { title: 'task_rescue_hazardous' },
    ],
  },
  {
    image: elrob2024,
    title: 'ELROB',
    year: 2024,
    location: trier,
    link: 'https://elrob.org/elrob-2024',
    tasks: [
      { title: 'task_mapping_photorealistic' },
      { title: 'task_autonomous_navigation' },
      { title: 'task_rescue_hazardous' },
    ],
  },
  {
    image: enrich2023,
    title: 'EnRicH',
    year: 2023,
    location: zwentendorf,
    link: 'https://enrich2023.european-robotics.eu/',
    tasks: [
      { title: 'task_mapping_nuclear_power_plant' },
      { title: 'task_nuclear_source' },
      { title: 'task_rescue_hazardous' },
    ],
  },
  {
    image: robocup2022,
    title: 'Robocup',
    year: 2022,
    location: bangkok,
    link: 'https://2022.robocup.org/',
    tasks: [
      { title: 'task_fast_navigation' },
      { title: 'task_qr_scan' },
      { title: 'task_object_manipulation' },
    ],
  },
  {
    image: robocup2021,
    title: 'Robocup German Open',
    year: 2021,
    location: dortmund,
    tasks: [
      { title: 'task_fast_navigation' },
      { title: 'task_thermal_detection' },
      { title: 'task_co2_detection' },
    ],
  },
  {
    image: robocup2019,
    title: 'RoboCup',
    year: 2019,
    location: sydney,
    link: 'https://2019.robocup.org/',
    tasks: [
      { title: 'task_hazardous_sign_detection' },
      { title: 'task_fast_navigation' },
    ],
  },
];
