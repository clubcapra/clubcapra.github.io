// Members pictures

import nathanGueissazTeufel from '@clubcapra/assets/media/members/NATHAN_GUEISSAZ-TEUFEL.jpg';
import etienneLeGuerrier from '@clubcapra/assets/media/members/ETIENNE_LE_GUERRIER.jpg';
import antoineMaltais from '@clubcapra/assets/media/members/ANTOINE_MALTAIS.jpg';
import philippeDesbiens from '@clubcapra/assets/media/members/PHILIPPE_DESBIENS.jpg';
import denisTurk from '@clubcapra/assets/media/members/DENIS_TURK.jpg';
import emileLacroix from '@clubcapra/assets/media/members/EMILE_LACROIX.jpg';
import etienneTardif from '@clubcapra/assets/media/members/ETIENNE_TARDIF.jpg';
import yanniHaddar from '@clubcapra/assets/media/members/YANNI_HADDAR.jpg';
import julesLachapelle from '@clubcapra/assets/media/members/JULES_LACHAPELLE.jpg';
import thommasRousseauSenecal from '@clubcapra/assets/media/members/THOMAS_ROUSSEAU-SENECAL.jpg';
import ilianaDeCarufel from '@clubcapra/assets/media/members/ILIANA_DE_CARUFEL.jpg';
import mayaBoubekri from '@clubcapra/assets/media/members/MAYA_BOUBEKRI.jpg';
import lolaHornsperger from '@clubcapra/assets/media/members/LOLA_HORNSPERGER.jpg';
import williamCaouette from '@clubcapra/assets/media/members/WILLIAM_CAOUETTE.jpg';
import ghanaisMuniandy from '@clubcapra/assets/media/members/GHANAIS_MUNIANDY.jpg';
import clementDesmaraisJadin from '@clubcapra/assets/media/members/CLEMENT_DESMARAIS-JADIN.jpg';
import anthonyAfif from '@clubcapra/assets/media/members/ANTHONY_AFIF.jpg';
import felixTheriault from '@clubcapra/assets/media/members/FELIX_THERIAULT.jpg';

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

const AntonyA: Member = {
  name: 'Antony Afif',
  program: 'engineering_electrical',
  img: anthonyAfif
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

const ÉmileL: Member = {
  name: 'Émile Lacroix',
  program: 'engineering_electrical',
  title: 'title_treasury',
  img: emileLacroix,
};

const GuyPhilippeN: Member = {
  name: 'Guy-Philippe Nadon',
  program: 'engineering_software',
};

const DenisT: Member = {
  name: 'Denis Turk',
  program: 'engineering_software',
  img: denisTurk,
  link: 'https://www.linkedin.com/in/denisturk/',
};

const EtienneT: Member = {
  name: 'Etienne Tardif',
  program: 'engineering_software',
  title: 'title_co_captain',
  img: etienneTardif,
  link: 'https://www.linkedin.com/in/etienne-tardif-57b164222/',
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

const ClementDJ: Member = {
  name: 'Clément Desmarais-Jadin',
  program: 'engineering_mechanical',
  img: clementDesmaraisJadin,
};

const GhanaisM: Member = {
  name: 'Ghanais Muniandy',
  program: 'engineering_gpa',
  title: 'title_social_coordinator',
  link: 'https://www.linkedin.com/in/ghanais',
  img: ghanaisMuniandy,
};

const AlexisGA: Member = {
  name: 'Alexis Gabriel Aubut',
  program: 'engineering_electrical',
  link: 'www.linkedin.com/in/alexis-gabriel-aubut-03b821342',
};

const HugoB: Member = {
  name: 'Hugo Beauregard',
  program: 'engineering_gpa',
  link: 'https://github.com/fugo56',
};

const FelixT: Member = {
  name: 'Félix Thériault',
  program: 'engineering_software',
  link: 'https://www.linkedin.com/in/f%C3%A9lix-th%C3%A9riault-849b2b339/',
  img: felixTheriault,
};

const AudreyCMN: Member = {
  name: 'Audrey Carelle Mawamba Njiometio',
  program: 'engineering_gpa',
};

const SamuelKB: Member = {
  name: 'Samuel Klein-bichain',
  program: 'engineering_software',
  link: 'https://www.linkedin.com/in/samuel-klein-bichain/',
};

const MiguelDSR: Member = {
  name: 'Miguel Da Silva Rhodes',
  program: 'engineering_mechanical',
  link: 'https://www.linkedin.com/in/miguel-da-silva-4305a43b1/',
};

const LolaH: Member = {
  name: 'Lola Hornsperger',
  program: 'engineering_gpa',
  link: 'https://www.linkedin.com/in/lola-hornsperger-372353298/',
  img: lolaHornsperger,
};

const MayaB: Member = {
  name: 'Maya Boubekri',
  program: 'engineering_electrical',
  link: 'https://www.linkedin.com/in/maya-boubekri-guezout/',
  img: mayaBoubekri,
};

const WilliamC: Member = {
  name: 'Wiliam Caouette',
  program: 'engineering_software',
  link: 'https://www.linkedin.com/in/william-caouette-979725185/',
  img: williamCaouette,
};

export default {
  NathanGT,
  ÉtienneLG,
  AntonyA,
  AntoineM,
  PhilippeD,
  ÉmileL,
  GuyPhilippeN,
  DenisT,
  EtienneT,
  YanniH,
  ThomasRS,
  JulesL,
  ZackaryB,
  IlianaDC,
  ClementDJ,
  GhanaisM,
  WilliamC,
  AlexisGA,
  HugoB,
  FelixT,
  AudreyCMN,
  SamuelKB,
  MiguelDSR,
  LolaH,
  MayaB,
};
