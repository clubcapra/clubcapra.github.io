<script setup lang="ts">
import logoETSTypoGrise from '@clubcapra/assets/media/partners/Logo_ETS_TypoGrise_D_FR_1.jpg';
import hsLogoCouleur from '@clubcapra/assets/media/partners/HS_logo_couleur.png';
import automatech from '@clubcapra/assets/media/partners/automatech.png';
import ixiasoftMadcapLogoRgbC from '@clubcapra/assets/media/partners/IXIASOFT-Madcap-logo-RGB-C.jpg';
import altium from '@clubcapra/assets/media/partners/altium.svg';
import aeets from '@clubcapra/assets/media/partners/aeets.svg';
import mtt from '@clubcapra/assets/media/partners/mtt.png';
import goLabo from '@clubcapra/assets/media/partners/go-labo.png';

const sponsos = [
  // ignore le premier pour l'instant
  // { img: 'img/partners/Logo_ETS_TypoGrise_D_FR_1.jpg' },
  { img: hsLogoCouleur },
  { img: automatech },
  { img: ixiasoftMadcapLogoRgbC },
  { img: altium },
  { img: aeets },
  { img: mtt },
  { img: goLabo },
];
</script>

<template>
  <div class="col-md-12 client-holder">
    <div class="client-slider owl-carousel justify-content-center">
      <div class="client-item justify-content-center">
        <img class="img-responsive" :src="logoETSTypoGrise" />
      </div>

      <div v-for="sponso in sponsos" :key="sponso.img" class="client-item">
        <img class="img-responsive" :src="sponso.img" />
      </div>
    </div>
  </div>
</template>
