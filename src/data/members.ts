const basePath = '@clubcapra/assets/media/members/';

export interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  crazy?: string; // Default to img
  link?: string;
  title?: string; // Default to 'Membre'
}

const NathanGT: Member = {
  name: 'Nathan Gueissaz-Teufel',
  program: 'engineering_software',
  title: 'title_co_captain',
  img: require('@clubcapra/assets/media/members/NATHAN_GUEISSAZ-TEUFEL.jpg'),
  crazy: require('@clubcapra/assets/media/members/NATHAN_GUEISSAZ-TEUFEL-crazy.jpg'),
  link: 'https://www.linkedin.com/in/nathan-gueissaz-teufel-04655b1ab/',
};

const ÉtienneLG: Member = {
  name: 'Étienne Le Guerrier',
  program: 'engineering_electrical',
  title: 'title_captain',
  img: require('@clubcapra/assets/media/members/ETIENNE_LE_GUERRIER.jpg'),
  crazy: require('@clubcapra/assets/media/members/ETIENNE_LE_GUERRIER-crazy.jpg'),
  link: 'https://www.linkedin.com/in/%C3%A9tienne-le-guerrier-4544b515a/',
};

const AntonyA: Member = {
  name: 'Antony Afif',
  program: 'engineering_electrical',
  img: require('@clubcapra/assets/media/members/ANTHONY_AFIF.jpg'),
  crazy: require('@clubcapra/assets/media/members/ANTHONY_AFIF-crazy.jpg'),
};

const AntoineM: Member = {
  name: 'Antoine Maltais',
  program: 'engineering_electrical',
  img: require('@clubcapra/assets/media/members/ANTOINE_MALTAIS.jpg'),
  crazy: require('@clubcapra/assets/media/members/ANTOINE_MALTAIS-crazy.jpg'),
  link: 'https://www.linkedin.com/in/antoine-maltais-72923017a/',
};

const PhilippeD: Member = {
  name: 'Philippe Desbiens',
  program: 'engineering_electrical',
  img: require('@clubcapra/assets/media/members/PHILIPPE_DESBIENS.jpg'),
};

const ÉmileL: Member = {
  name: 'Émile Lacroix',
  program: 'engineering_electrical',
  title: 'title_treasury',
  img: require('@clubcapra/assets/media/members/EMILE_LACROIX.jpg'),
  crazy: require('@clubcapra/assets/media/members/EMILE_LACROIX-crazy.jpg'),
};

const GuyPhilippeN: Member = {
  name: 'Guy-Philippe Nadon',
  program: 'engineering_software',
};

const DenisT: Member = {
  name: 'Denis Turk',
  program: 'engineering_software',
  img: require('@clubcapra/assets/media/members/DENIS_TURK.jpg'),
  link: 'https://www.linkedin.com/in/denisturk/',
};

const EtienneT: Member = {
  name: 'Etienne Tardif',
  program: 'engineering_software',
  title: 'title_co_captain',
  img: require('@clubcapra/assets/media/members/ETIENNE_TARDIF.jpg'),
  link: 'https://www.linkedin.com/in/etienne-tardif-57b164222/',
};

const YanniH: Member = {
  name: 'Yanni Haddar',
  program: 'engineering_software',
  img: require('@clubcapra/assets/media/members/YANNI_HADDAR.jpg'),
};

const ThomasRS: Member = {
  name: 'Thomas Rousseau-Sénécal',
  program: 'engineering_gpa',
  img: require('@clubcapra/assets/media/members/THOMAS_ROUSSEAU-SENECAL.jpg'),
  link: 'https://www.linkedin.com/in/thomas-rousseau-sénécal-14723b346/',
};

const JulesL: Member = {
  name: 'Jules Lachapelle',
  program: 'engineering_gpa',
  title: 'title_technical_director',
  img: require('@clubcapra/assets/media/members/JULES_LACHAPELLE.jpg'),
  crazy: require('@clubcapra/assets/media/members/JULES_LACHAPELLE-crazy.jpg'),
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
  img: require('@clubcapra/assets/media/members/ILIANA_DE_CARUFEL.jpg'),
  link: 'https://www.linkedin.com/in/iliana-de-carufel-855182193/',
};

const WilliamT: Member = {
  name: 'William Tremblay',
  program: 'engineering_gpa_master',
};

const ClementDJ: Member = {
  name: 'Clément Desmarais-Jadin',
  program: 'engineering_mechanical',
  img: require('@clubcapra/assets/media/members/CLEMENT_DESMARAIS-JADIN.jpg'),
  crazy: require('@clubcapra/assets/media/members/CLEMENT_DESMARAIS-JADIN-crazy.jpg'),
};

const GhanaisM: Member = {
  name: 'Ghanais Muniandy',
  program: 'engineering_gpa',
  title: 'title_social_coordinator',
  link: 'https://www.linkedin.com/in/ghanais',
  img: require('@clubcapra/assets/media/members/GHANAIS_MUNIANDY.jpg'),
  crazy: require('@clubcapra/assets/media/members/GHANAIS_MUNIANDY-crazy.jpg'),
};

const AlexisGA: Member = {
  name: 'Alexis Gabriel Aubut',
  program: 'engineering_electrical',
  link: 'www.linkedin.com/in/alexis-gabriel-aubut-03b821342',
  img: require('@clubcapra/assets/media/members/ALEXIS_AUBUT.jpg'),
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
  img: require('@clubcapra/assets/media/members/FELIX_THERIAULT.jpg'),
  crazy: require('@clubcapra/assets/media/members/FELIX_THERIAULT-crazy.jpg'),
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
  img: require('@clubcapra/assets/media/members/LOLA_HORNSPERGER.jpg'),
  crazy: require('@clubcapra/assets/media/members/LOLA_HORNSPERGER-crazy.jpg'),
};

const MayaB: Member = {
  name: 'Maya Boubekri',
  program: 'engineering_electrical',
  link: 'https://www.linkedin.com/in/maya-boubekri-guezout/',
  img: require('@clubcapra/assets/media/members/MAYA_BOUBEKRI.jpg'),
  crazy: require('@clubcapra/assets/media/members/MAYA_BOUBEKRI-crazy.jpg'),
};

const WilliamC: Member = {
  name: 'Wiliam Caouette',
  program: 'engineering_software',
  link: 'https://www.linkedin.com/in/william-caouette-979725185/',
  img: require('@clubcapra/assets/media/members/WILLIAM_CAOUETTE.jpg'),
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
  WilliamT,
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
