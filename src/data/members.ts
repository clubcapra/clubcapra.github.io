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
  title: 'title_captain',
  img: nathanGueissazTeufel,
  link: 'https://www.linkedin.com/in/nathan-gueissaz-teufel-04655b1ab/',
};

const ÉtienneLG: Member = {
  name: 'Étienne Le Guerrier',
  program: 'engineering_electrical',
  title: 'title_co_captain',
  img: etienneLeGuerrier,
  link: 'https://www.linkedin.com/in/%C3%A9tienne-le-guerrier-4544b515a/',
};

const JohnE: Member = {
  name: 'John Ephrem',
  program: 'engineering_gol',
  title: 'title_logistics_manager',
};

const GabrielMD: Member = {
  name: 'Gabriel Massicotte-Duhamel',
  program: 'engineering_mechanical',
  title: 'title_project_manager',
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
  title: 'title_project_manager',
  img: antoineMaltais,
  link: 'https://www.linkedin.com/in/antoine-maltais-72923017a/',
};

const PhilippeD: Member = {
  name: 'Philippe Desbiens',
  program: 'engineering_electrical',
  title: 'title_project_manager',
  img: philippeDesbiens,
};

const DavidC: Member = {
  name: 'David Caron',
  program: 'engineering_electrical',
  title: 'title_partnership_manager',
  img: davidCaron,
};

const ChristianB: Member = {
  name: 'Christian Bourget',
  program: 'engineering_gpa',
  img: christianBourget,
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

const JeanCharlesF: Member = {
  name: 'Jean-Charles Fortin',
  program: 'engineering_gpa',
  link: 'https://www.linkedin.com/in/jean-charles-fortin-45a0b02a5/',
};

const DenisT: Member = {
  name: 'Denis Turk',
  program: 'engineering_software',
  title: 'title_project_manager',
  img: denisTurk,
  link: 'https://www.linkedin.com/in/denisturk/',
};

const WilliamJ: Member = {
  name: 'William Jarry',
  program: 'engineering_software',
};

const SamuelB: Member = {
  name: 'Samuel Barbeau',
  program: 'engineering_software',
  title: 'title_project_manager',
  img: samuelBarbeau,
};

const EtienneT: Member = {
  name: 'Etienne Tardif',
  program: 'engineering_software',
  title: 'title_merchandise_manager',
  img: etienneTardif,
  link: 'https://www.linkedin.com/in/etienne-tardif-57b164222/',
};

const SimonB: Member = {
  name: 'Simon Biard',
  program: 'engineering_software',
};

const AngeOliveDN: Member = {
  name: 'Ange Olive Dagang Nyappa',
  program: 'engineering_software',
};

const MargotM: Member = {
  name: 'Margot Metzger',
  program: 'engineering_mechanical',
  title: 'title_project_manager',
  link: 'https://www.linkedin.com/in/margot-metzger',
};

const PierreAlixP: Member = {
  name: 'Pierre-Alix Paugain',
  program: 'engineering_mechanical',
};

const SteaveJonathanI: Member = {
  name: 'Steave-Jonathan Ibrango',
  program: 'engineering_construction',
  link: 'https://www.linkedin.com/in/steavibrango/',
};

const YanniH: Member = {
  name: 'Yanni Haddar',
  program: 'engineering_software',
  img: yanniHaddar,
};

const ThomasJ: Member = {
  name: 'Thomas Journault',
  program: 'engineering_software',
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

const LouisM: Member = {
  name: 'Louis Marois',
  program: 'engineering_software',
};

const JulesL: Member = {
  name: 'Jules Lachapelle',
  program: 'engineering_gpa',
  title: 'title_project_manager',
  img: julesLachapelle,
};

const ZackaryB: Member = {
  name: 'Zackary Bélanger',
  program: 'engineering_mechanical',
  title: 'title_project_manager',
  link: 'https://www.linkedin.com/in/zackary-belanger',
};

const AppolinaireSF: Member = {
  name: 'Appolinaire Simo-Fotso',
  program: 'engineering_mechanical',
};

const IlianaDC: Member = {
  name: 'Iliana De Carufel',
  program: 'engineering_software',
  img: ilianaDeCarufel,
  link: 'https://www.linkedin.com/in/iliana-de-carufel-855182193/',
};

const WilliamT: Member = {
  name: 'William Tramblay',
  program: 'engineering_gpa',
};

export default {
  NathanGT,
  ÉtienneLG,
  JohnE,
  GabrielMD,
  KevinL,
  AntonyA,
  AntoineM,
  PhilippeD,
  DavidC,
  ChristianB,
  ÉmileL,
  GuyPhilippeN,
  JeanCharlesF,
  DenisT,
  WilliamJ,
  SamuelB,
  EtienneT,
  SimonB,
  AngeOliveDN,
  MargotM,
  PierreAlixP,
  SteaveJonathanI,
  YanniH,
  ThomasJ,
  ThomasRS,
  JaniceB,
  LouisM,
  JulesL,
  ZackaryB,
  AppolinaireSF,
  IlianaDC,
  WilliamT,
};
