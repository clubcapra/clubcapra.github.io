// Members pictures
import davidCaron from '@clubcapra/assets/media/members/davidCaron.jpg';
import benoitMalenfant from '@clubcapra/assets/media/members/benoitMalenfant.jpg';
import kevinLarochelle from '@clubcapra/assets/media/members/kevinLarochelle.jpg';
import leoDanielGosselin from '@clubcapra/assets/media/members/leoDanielGosselin.jpg';
import gabrielLevesqueDuval from '@clubcapra/assets/media/members/gabrielLevesqueDuval.jpg';
import alexisMartin from '@clubcapra/assets/media/members/alexisMartin.jpg';

export interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  title?: string; // Default to 'Membre'
}

const NathanGT: Member = {
  name: 'Nathan Gueissaz-Teufel',
  program: 'engineering_software',
  title: 'title_captain',
};

const ÉtienneLG: Member = {
  name: 'Étienne Le Guerrier',
  program: 'engineering_electrical',
  title: 'title_co_captain',
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
  img: kevinLarochelle,
  program: 'engineering_gpa',
};

const AntonyA: Member = {
  name: 'Antony Afif',
  program: 'engineering_electrical',
};

const AntoineM: Member = {
  name: 'Antoine Maltais',
  program: 'engineering_electrical',
  title: 'title_project_manager',
};

const PhilippeD: Member = {
  name: 'Philippe Desbiens',
  program: 'engineering_electrical',
  title: 'title_project_manager',
};

const DavidC: Member = {
  name: 'David Caron',
  img: davidCaron,
  program: 'engineering_electrical',
  title: 'title_partnership_manager',
};

const ChristianB: Member = {
  name: 'Christian Bourget',
  program: 'engineering_gpa',
};

const ÉmileL: Member = {
  name: 'Émile Lacroix',
  program: 'engineering_electrical',
};

const GuyPhilippeN: Member = {
  name: 'Guy-Philippe Nadon',
  program: 'engineering_software',
};

const JeanCharlesF: Member = {
  name: 'Jean-Charles Fortin',
  program: 'engineering_gpa',
};

const DenisT: Member = {
  name: 'Denis Turk',
  program: 'engineering_software',
  title: 'title_project_manager',
};

const WilliamJ: Member = {
  name: 'William Jarry',
  program: 'engineering_software',
};

const SamuelB: Member = {
  name: 'Samuel Barbeau',
  program: 'engineering_software',
  title: 'title_project_manager',
};

const EtienneT: Member = {
  name: 'Etienne Tardif',
  program: 'engineering_software',
  title: 'title_merchandise_manager',
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
};

const PierreAlixP: Member = {
  name: 'Pierre-Alix Paugain',
  program: 'engineering_mechanical',
};

const SteaveJonathanI: Member = {
  name: 'Steave-Jonathan Ibrango',
  program: 'engineering_construction',
};

const YanniH: Member = {
  name: 'Yanni Haddar',
  program: 'engineering_software',
};

const ThomasJ: Member = {
  name: 'Thomas Journault',
  program: 'engineering_software',
};

const ThomasRS: Member = {
  name: 'Thomas Rousseau-Senecal',
  program: 'engineering_electrical',
};

const JaniceB: Member = {
  name: 'Janice Bessard',
  program: 'engineering_software',
};

const LouisM: Member = {
  name: 'Louis Marois',
  program: 'engineering_software',
};

const JulesL: Member = {
  name: 'Jules Lachapelle',
  program: 'engineering_gpa',
  title: 'title_project_manager',
};

const ZackaryB: Member = {
  name: 'Zackary Bélanger',
  program: 'engineering_mechanical',
  title: 'title_project_manager',
};

const AppolinaireSF: Member = {
  name: 'Appolinaire Simo-Fotso',
  program: 'engineering_mechanical',
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
};
