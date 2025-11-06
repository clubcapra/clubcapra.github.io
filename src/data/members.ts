// Members pictures

import nathanGueissazTeufel from '@clubcapra/assets/media/members/NATHAN_GUEISSAZ-TEUFEL.jpg';
import etienneLeGuerrier from '@clubcapra/assets/media/members/ETIENNE_LE_GUERRIER.jpg';
import kevinLarochelle from '@clubcapra/assets/media/members/KEVIN_LAROCHELLE.jpg';
import antoineMaltais from '@clubcapra/assets/media/members/ANTOINE_MALTAIS.jpg';
import philippeDesbiens from '@clubcapra/assets/media/members/PHILIPPE_DESBIENS.jpg';
import denisTurk from '@clubcapra/assets/media/members/DENIS_TURK.jpg';
import davidCaron from '@clubcapra/assets/media/members/DAVID_CARON.jpg';
import christianBourget from '@clubcapra/assets/media/members/CHRISTIAN_BOURGET.jpg';
import emileLacroix from '@clubcapra/assets/media/members/EMILE_LACROIX.jpg';
import samuelBarbeau from '@clubcapra/assets/media/members/SAMUEL_BARBEAU.jpg';
import etienneTardif from '@clubcapra/assets/media/members/ETIENNE_TARDIF.jpg';
import yanniHaddar from '@clubcapra/assets/media/members/YANNI_HADDAR.jpg';
import julesLachapelle from '@clubcapra/assets/media/members/JULES_LACHAPELLE.jpg';
import thommasRousseauSenecal from '@clubcapra/assets/media/members/THOMMAS_ROUSSEAU-SENECAL.jpg';
import ilianaDeCarufel from '@clubcapra/assets/media/members/ILIANA_DE_CARUFEL.jpg';

export interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  link?: string;
  title?: string; // Default to 'Membre'
}

const NathanGT: Member = {
  name: 'Nathan Gueissaz-Teufel',
  program: 'engineering_software',
  title: 'title_co_captain',
  img: nathanGueissazTeufel,
  link: 'https://www.linkedin.com/in/nathan-gueissaz-teufel-04655b1ab/',
};

const ÉtienneLG: Member = {
  name: 'Étienne Le Guerrier',
  program: 'engineering_electrical',
  title: 'title_captain',
  img: etienneLeGuerrier,
  link: 'https://www.linkedin.com/in/%C3%A9tienne-le-guerrier-4544b515a/',
};

const BenoitM: Member = {
  name: 'Malenfant, Benoit',
  program: 'engineering_electrical',
};

const KevinL: Member = {
  name: 'Kevin Larochelle',
  program: 'engineering_gpa',
  img: kevinLarochelle,
};

const AntonyA: Member = {
  name: 'Antony Afif',
  program: 'engineering_electrical',
};

const AntoineM: Member = {
  name: 'Antoine Maltais',
  program: 'engineering_electrical',
  img: antoineMaltais,
  link: 'https://www.linkedin.com/in/antoine-maltais-72923017a/',
};

const PhilippeD: Member = {
  name: 'Philippe Desbiens',
  program: 'engineering_electrical',
  img: philippeDesbiens,
};

const DavidC: Member = {
  name: 'David Caron',
  program: 'engineering_electrical',
  img: davidCaron,
};

const ÉmileL: Member = {
  name: 'Émile Lacroix',
  program: 'engineering_electrical',
  img: emileLacroix,
};

const GuyPhilippeN: Member = {
  name: 'Guy-Philippe Nadon',
  program: 'engineering_software',
};

const DenisT: Member = {
  name: 'Denis Turk',
  program: 'engineering_software',
  title: 'title_event_manager',
  img: denisTurk,
  link: 'https://www.linkedin.com/in/denisturk/',
};

const WilliamJ: Member = {
  name: 'William Jarry',
  program: 'engineering_software',
};

const EtienneT: Member = {
  name: 'Etienne Tardif',
  program: 'engineering_software',
  title: 'title_co_captain',
  img: etienneTardif,
  link: 'https://www.linkedin.com/in/etienne-tardif-57b164222/',
};

const AngeOliveDN: Member = {
  name: 'Ange Olive Dagang Nyappa',
  program: 'engineering_software',
};

const YanniH: Member = {
  name: 'Yanni Haddar',
  program: 'engineering_software',
  img: yanniHaddar,
};

const ThomasRS: Member = {
  name: 'Thomas Rousseau-Sénécal',
  program: 'engineering_gpa',
  img: thommasRousseauSenecal,
  link: 'https://www.linkedin.com/in/thomas-rousseau-sénécal-14723b346/',
};

const JaniceB: Member = {
  name: 'Janice Bessard',
  program: 'engineering_software',
  link: 'https://www.linkedin.com/in/janice-b-858122331/',
};

const JulesL: Member = {
  name: 'Jules Lachapelle',
  program: 'engineering_gpa',
  title: 'title_technical_director',
  img: julesLachapelle,
};

const ZackaryB: Member = {
  name: 'Zackary Bélanger',
  program: 'engineering_gpa',
  title: 'title_partnership_manager',
  link: 'https://www.linkedin.com/in/zackary-belanger',
};

const IlianaDC: Member = {
  name: 'Iliana De Carufel',
  program: 'engineering_gpa',
  img: ilianaDeCarufel,
  link: 'https://www.linkedin.com/in/iliana-de-carufel-855182193/',
};

const WilliamT: Member = {
  name: 'William Tremblay',
  program: 'engineering_gpa_master',
};

const ClementDJ: Member = {
  name: 'Clément Desmarais-Jadin',
  program: 'engineering_mechanical',
};

const RobertoL: Member = {
  name: 'Roberto Laframboise',
  program: 'engineering_gpa',
  link: 'https://www.linkedin.com/in/roberto-laframboise-974b31326/',
};

const GhanaisM: Member = {
  name: 'Ghanais Muniandy',
  program: 'engineering_gpa',
  title: 'title_social_coordinator',
  link: 'https://www.linkedin.com/in/ghanais',
};

const WilliamC: Member = {
  name: 'William Caouette',
  program: 'engineering_software',
};

const KoffiK: Member = {
  name: 'Koffi Kpoka',
  program: 'engineering_electrical',
};

const AlexisGA: Member = {
  name: 'Alexis Gabriel Aubut',
  program: 'engineering_electrical',
  link: 'www.linkedin.com/in/alexis-gabriel-aubut-03b821342',
};

const MarieJeanneB: Member = {
  name: 'Marie-Jeanne Bazinet',
  program: 'engineering_electrical',
};

const HugoB: Member = {
  name: 'Hugo Beauregard',
  program: 'engineering_gpa',
  link: 'https://github.com/fugo56',
};

const FelixT: Member = {
  name: 'Félix Thériault',
  program: 'engineering_software',
};

const TommyV: Member = {
  name: 'Tommy Vallée',
  program: 'engineering_gpa',
  link: 'https://www.linkedin.com/in/tommy-vallee-gpa/',
};

const YoanP: Member = {
  name: 'Yoan Paradis',
  program: 'engineering_electrical',
  link: 'https://www.linkedin.com/in/yoan-paradis-56a657325',
};

const RodrigoATP: Member = {
  name: 'Rodrigo Angel Torres Pérez',
  program: 'engineering_gpa',
  link: 'https://github.com/RodriTP, https://ca.linkedin.com/in/rodrigo-angel-torres-p%C3%A9rez-8b38332b4',
};

const BenjaminT: Member = {
  name: 'Benjamin Theriault',
  program: 'engineering_software',
  title: 'title_partnership_manager',
  link: 'https://github.com/BenjaminT02',
};

const LouisSimonL: Member = {
  name: 'Louis-Simon Leclerc',
  program: 'engineering_software',
};

export default {
  NathanGT,
  ÉtienneLG,
  BenoitM,
  KevinL,
  AntonyA,
  AntoineM,
  PhilippeD,
  DavidC,
  ÉmileL,
  GuyPhilippeN,
  DenisT,
  WilliamJ,
  EtienneT,
  AngeOliveDN,
  YanniH,
  ThomasRS,
  JaniceB,
  JulesL,
  ZackaryB,
  IlianaDC,
  WilliamT,
  ClementDJ,
  RobertoL,
  GhanaisM,
  WilliamC,
  KoffiK,
  AlexisGA,
  MarieJeanneB,
  HugoB,
  FelixT,
  TommyV,
  YoanP,
  RodrigoATP,
  BenjaminT,
  LouisSimonL,
};
