// Partners logos
import hsLogoCouleur from '@clubcapra/assets/media/partners/HS_logo_couleur.png';
import ixiasoftMadcapLogoRgbC from '@clubcapra/assets/media/partners/IXIASOFT-Madcap-logo-RGB-C.jpg';
import EtsTypoGrise from '@clubcapra/assets/media/partners/Logo_ETS_TypoGrise_D_EN.png';
import aeets from '@clubcapra/assets/media/partners/aeets.svg';
import altium from '@clubcapra/assets/media/partners/altium.svg';
import automatech from '@clubcapra/assets/media/partners/automatech.png';
import goLabo from '@clubcapra/assets/media/partners/go-labo.png';
import mtt from '@clubcapra/assets/media/partners/mtt.png';
import stelpro from '@clubcapra/assets/media/partners/stelpro.png';
import opnor from '@clubcapra/assets/media/partners/opnor.png';
import hako from '@clubcapra/assets/media/partners/hako.png';
import monday from '@clubcapra/assets/media/partners/monday.png';
import odrive from '@clubcapra/assets/media/partners/odrive.png';

interface Partner {
  name: string;
  img: string;
}

export const goldPartners: Partner[] = [
  {
    name: 'ETS',
    img: EtsTypoGrise,
  },
  {
    name: 'HalfSerious',
    img: hsLogoCouleur,
  },
  {
    name: 'Automatech',
    img: automatech,
  },
  {
    name: 'IXIASOFT',
    img: ixiasoftMadcapLogoRgbC,
  },
];

export const silverPartners: Partner[] = [
  {
    name: 'AEETS',
    img: aeets,
  },
  {
    name: 'Altium',
    img: altium,
  },
  {
    name: 'Stelpro',
    img: stelpro,
  },
  {
    name: 'OPNOR',
    img: opnor,
  },
  {
    name: 'Hako',
    img: hako,
  },
];

export const bronzePartners: Partner[] = [
  {
    name: 'MTT',
    img: mtt,
  },
  {
    name: 'Go Labo',
    img: goLabo,
  },
  {
    name: 'Monday',
    img: monday,
  },
  {
    name: 'ODrive',
    img: odrive,
  },
];
