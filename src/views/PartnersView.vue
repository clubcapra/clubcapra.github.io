<script setup lang="ts">
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
</script>

<template>
  <section class="container px-4 mx-auto pt-20">
    <div class="pt-10">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_gold') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <img :src="EtsTypoGrise" alt="ETS TypoGrise" class="md:w-1/3" />
        <img :src="hsLogoCouleur" alt="HS logo couleur" class="md:w-1/3" />
        <img :src="automatech" alt="Automatech" class="md:w-1/3" />
        <img
          :src="ixiasoftMadcapLogoRgbC"
          alt="IXIASOFT Madcap logo RGB C"
          class="w-1/3"
        />
      </div>
    </div>

    <div class="pt-10">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_silver') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <img :src="aeets" alt="AEETS" class="md:w-1/4" />
        <img :src="stelpro" alt="stelpro" class="md:w-1/4" />
        <img :src="opnor" alt="opnor" class="md:w-1/4" />
        <img :src="altium" alt="Altium" class="md:w-1/4" />
        <img :src="hako" alt="hako" class="md:w-1/4" />
      </div>
    </div>
    <div class="pt-10 pb-20">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_bronze') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <img :src="goLabo" alt="Go Labo" class="md:w-1/5" />
        <img :src="mtt" alt="MTT" class="md:w-1/5" />
        <img :src="monday" alt="monday" class="md:w-1/5" />
        <img :src="odrive" alt="odrive" class="md:w-1/5" />
      </div>
    </div>
  </section>
</template>
