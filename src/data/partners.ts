// Partners logos
import hsLogoCouleur from '@clubcapra/assets/media/partners/HS_logo_couleur.png';
import ixiasoftMadcapLogoRgbC from '@clubcapra/assets/media/partners/IXIASOFT-Madcap-logo-RGB-C.jpg';
import EtsTypoGrise from '@clubcapra/assets/media/partners/Logo_ETS_TypoGrise_D_EN.png';
import aeets from '@clubcapra/assets/media/partners/aeets.svg';
import altium from '@clubcapra/assets/media/partners/altium.svg';
import automatech from '@clubcapra/assets/media/partners/automatech.png';
import mtt from '@clubcapra/assets/media/partners/mtt.png';
import stelpro from '@clubcapra/assets/media/partners/stelpro.png';
import opnor from '@clubcapra/assets/media/partners/opnor.png';
import hakko from '@clubcapra/assets/media/partners/hakko.png';
import odrive from '@clubcapra/assets/media/partners/odrive.png';
import premierTech from '@clubcapra/assets/media/partners/premier-tech.jpg';
import schunk from '@clubcapra/assets/media/partners/schunk.png';
import jaBombardier from '@clubcapra/assets/media/partners/jabombardier.png';
import systemex from '@clubcapra/assets/media/partners/systemex.png';
import anodisationQuebec from '@clubcapra/assets/media/partners/anodisation-quebec.png';
import prolab from '@clubcapra/assets/media/partners/prolab.png';
import pcbWay from '@clubcapra/assets/media/partners/pcbWay.png';
import aluminerieAlouette from '@clubcapra/assets/media/partners/aluminerie-alouette.png';
import rei from '@clubcapra/assets/media/partners/rei.png';
import usinageLR from '@clubcapra/assets/media/partners/usinage_LR.svg';
import harting from '@clubcapra/assets/media/partners/harting.svg';
import aseq from '@clubcapra/assets/media/partners/aseq.svg';

interface Partner {
  name: string;
  img: string;
  url: string;
  confirmed: boolean;
}

// TBD: FLUKE, ForceAvenir,

export const principalPartners: Partner[] = [];

export const platinumPartners: Partner[] = [
  {
    name: 'ETS',
    img: EtsTypoGrise,
    url: 'https://www.etsmtl.ca',
    confirmed: true,
  },
  {
    name: 'AEETS',
    img: aeets,
    url: 'https://www.aeets.com',
    confirmed: true,
  },
  {
    name: 'HARTING',
    img: harting,
    url: 'https://www.harting.com',
    confirmed: true,
  },
  {
    name: 'Usinage LR',
    img: usinageLR,
    url: 'https://www.facebook.com/usinageLRinc',
    confirmed: false,
  },
];

export const goldPartners: Partner[] = [
  {
    name: 'HalfSerious',
    img: hsLogoCouleur,
    url: 'https://www.halfserious.com',
    confirmed: false,
  },
  {
    name: 'IXIASOFT',
    img: ixiasoftMadcapLogoRgbC,
    url: 'https://www.ixiasoft.com',
    confirmed: false,
  },
  {
    name: 'Premier Tech',
    img: premierTech,
    url: 'https://www.premiertech.com',
    confirmed: false,
  },
  {
    name: 'SCHUNK',
    img: schunk,
    url: 'https://www.schunk.com',
    confirmed: true,
  },
  {
    name: 'Fondation J. Armand Bombardier',
    img: jaBombardier,
    url: 'https://www.fondationbombardier.ca',
    confirmed: false,
  },
  {
    name: 'Opnor',
    img: opnor,
    url: 'https://www.opnor.ca',
    confirmed: true,
  },
  {
    name: 'Systemex',
    img: systemex,
    url: 'https://www.systemex.com',
    confirmed: true,
  },
];

export const silverPartners: Partner[] = [
  {
    name: 'Automatech Robotik',
    img: automatech,
    url: 'https://www.automatechrobotik.com',
    confirmed: false,
  },
  {
    name: 'Altium',
    img: altium,
    url: 'https://www.altium.com',
    confirmed: true,
  },
  {
    name: 'Stelpro',
    img: stelpro,
    url: 'https://www.stelpro.com',
    confirmed: false,
  },
  {
    name: 'HAKKO',
    img: hakko,
    url: 'https://www.hakko.com',
    confirmed: false,
  },
  {
    name: 'ODrive',
    img: odrive,
    url: 'https://www.odriverobotics.com',
    confirmed: true,
  },
  {
    name: 'Anodisation Québec',
    img: anodisationQuebec,
    url: 'https://www.anodisationquebec.com',
    confirmed: false,
  },
  {
    name: 'ASEQ',
    img: aseq,
    url: 'https://www.aseq.ca',
    confirmed: true,
  },
];

export const bronzePartners: Partner[] = [
  {
    name: 'MTT',
    img: mtt,
    url: 'https://www.mtt136.com',
    confirmed: false,
  },
  {
    name: 'REI',
    img: rei,
    url: 'https://www.reseauei.com',
    confirmed: false,
  },
  {
    name: 'Aluminerie Alouette',
    img: aluminerieAlouette,
    url: 'https://www.alouette.com',
    confirmed: false,
  },
  {
    name: 'PCBWay',
    img: pcbWay,
    url: 'https://www.pcbway.com',
    confirmed: true,
  },
  {
    name: 'Prolab',
    img: prolab,
    url: 'https://www.prolab-technologies.com',
    confirmed: false,
  },
];
