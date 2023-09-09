<script setup lang="ts">
// Components
import SponsorItemComponent from './SponsorItemComponent.vue';

// Sponsor logos
import hsLogoCouleur from '@clubcapra/assets/media/partners/HS_logo_couleur.png';
import ixiasoftMadcapLogoRgbC from '@clubcapra/assets/media/partners/IXIASOFT-Madcap-logo-RGB-C.jpg';
import logoETSTypoGrise from '@clubcapra/assets/media/partners/Logo_ETS_TypoGrise_D_FR_1.jpg';
import aeets from '@clubcapra/assets/media/partners/aeets.svg';
import altium from '@clubcapra/assets/media/partners/altium.svg';
import automatech from '@clubcapra/assets/media/partners/automatech.png';
import goLabo from '@clubcapra/assets/media/partners/go-labo.png';
import mtt from '@clubcapra/assets/media/partners/mtt.png';

const sponsorsUp = [
  { img: logoETSTypoGrise },
  { img: hsLogoCouleur },
  { img: automatech },
  { img: ixiasoftMadcapLogoRgbC },
];
const sponsorsDown = [
  { img: altium },
  { img: aeets },
  { img: mtt },
  { img: goLabo },
];
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(sponsor, i) in sponsorsUp" :key="i">
        <sponsor-item-component :img="sponsor.img" />
      </v-col>

      <v-responsive width="100%" />

      <v-col v-for="(sponsor, i) in sponsorsDown" :key="i">
        <sponsor-item-component :img="sponsor.img" />
      </v-col>
    </v-row>
  </v-container>
</template>
