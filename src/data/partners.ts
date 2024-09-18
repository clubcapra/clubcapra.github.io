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
import monday from '@clubcapra/assets/media/partners/monday.png';
import odrive from '@clubcapra/assets/media/partners/odrive.png';
import premierTech from '@clubcapra/assets/media/partners/premier-tech.jpg';
import schunk from '@clubcapra/assets/media/partners/schunk.png';
import jaBombardier from '@clubcapra/assets/media/partners/jabombardier.png';
import systemex from '@clubcapra/assets/media/partners/systemex.png';
import anodisationQuebec from '@clubcapra/assets/media/partners/anodisation-quebec.png';
import prolab from '@clubcapra/assets/media/partners/prolab.png';
import pcbWay from '@clubcapra/assets/media/partners/pcbWay.png';
import pretATable from '@clubcapra/assets/media/partners/pret-a-table.avif';
import aluminerieAlouette from '@clubcapra/assets/media/partners/aluminerie-alouette.png';
import rei from '@clubcapra/assets/media/partners/rei.png';
import usinageLR from '@clubcapra/assets/media/partners/usinage_LR.svg';
import harting from '@clubcapra/assets/media/partners/harting.svg';

interface Partner {
  name: string;
  img: string;
  url: string;
}

export const principalPartners: Partner[] = [];

export const platinumPartners: Partner[] = [
  {
    name: 'ETS',
    img: EtsTypoGrise,
    url: 'https://www.etsmtl.ca',
  },
  {
    name: 'AEETS',
    img: aeets,
    url: 'https://www.aeets.com',
  },
  {
    name: 'Usinage LR',
    img: usinageLR,
    url: 'https://www.facebook.com/usinageLRinc',
  },
];

export const goldPartners: Partner[] = [
  {
    name: 'HalfSerious',
    img: hsLogoCouleur,
    url: 'https://www.halfserious.com',
  },
  {
    name: 'IXIASOFT',
    img: ixiasoftMadcapLogoRgbC,
    url: 'https://www.ixiasoft.com',
  },
  {
    name: 'Premier Tech',
    img: premierTech,
    url: 'https://www.premiertech.com',
  },
  {
    name: 'SCHUNK',
    img: schunk,
    url: 'https://www.schunk.com',
  },
  {
    name: 'Fondation J. Armand Bombardier',
    img: jaBombardier,
    url: 'https://www.fondationbombardier.ca',
  },
  {
    name: 'HARTING',
    img: harting,
    url: 'https://www.harting.com',
  },
];

export const silverPartners: Partner[] = [
  {
    name: 'Automatech Robotik',
    img: automatech,
    url: 'https://www.automatechrobotik.com',
  },
  {
    name: 'Altium',
    img: altium,
    url: 'https://www.altium.com',
  },
  {
    name: 'Stelpro',
    img: stelpro,
    url: 'https://www.stelpro.com',
  },
  {
    name: 'Opnor',
    img: opnor,
    url: 'https://www.opnor.ca',
  },
  {
    name: 'HAKKO',
    img: hakko,
    url: 'https://www.hakko.com',
  },
  {
    name: 'ODrive',
    img: odrive,
    url: 'https://www.odriverobotics.com',
  },
  {
    name: 'Anodisation Québec',
    img: anodisationQuebec,
    url: 'https://www.anodisationquebec.com',
  },
  {
    name: 'Systemex',
    img: systemex,
    url: 'https://www.systemex.com',
  },
];

export const bronzePartners: Partner[] = [
  {
    name: 'MTT',
    img: mtt,
    url: 'https://www.mtt136.com',
  },
  {
    name: 'monday.com',
    img: monday,
    url: 'https://www.monday.com',
  },
  {
    name: 'REI',
    img: rei,
    url: 'https://www.reseauei.com',
  },
  {
    name: 'Aluminerie Alouette',
    img: aluminerieAlouette,
    url: 'https://www.alouette.com',
  },
  {
    name: 'Prêt à Table',
    img: pretATable,
    url: 'https://www.pretatable.ca',
  },
  {
    name: 'PCBWay',
    img: pcbWay,
    url: 'https://www.pcbway.com',
  },
  {
    name: 'Prolab',
    img: prolab,
    url: 'https://www.prolab-technologies.com',
  },
];
