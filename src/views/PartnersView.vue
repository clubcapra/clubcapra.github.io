<script setup lang="ts">
import partnerHandshake from '@clubcapra/assets/media/partners-handshake.jpg';
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Documents
import planPartenariat from '@clubcapra/assets/documents/CAPRA_PlanPartenariat.pdf';

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
  <JumbotronVideoComponent
    :title="$t('page_partners')"
    :img="partnerHandshake"
  />
  <section class="bg-white">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap partner-title gold-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_gold') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-6 col-12">
            <img :src="EtsTypoGrise" alt="ETS TypoGrise" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="hsLogoCouleur" alt="HS logo couleur" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="automatech" alt="Automatech" />
          </div>
          <div class="col-md-6 col-12">
            <img
              :src="ixiasoftMadcapLogoRgbC"
              alt="IXIASOFT Madcap logo RGB C"
            />
          </div>
        </div>
        <div class="title-wrap partner-title silver-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_silver') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-3 col-6">
            <img :src="aeets" alt="AEETS" />
          </div>
          <div class="col-md-3 col-6">
            <img :src="stelpro" alt="stelpro" />
          </div>
          <div class="col-md-3 col-6">
            <img :src="opnor" alt="opnor" />
          </div>
          <div class="col-md-3 col-6">
            <img :src="altium" alt="Altium" />
          </div>
          <div class="col-md-3 col-6">
            <img :src="hako" alt="hako" />
          </div>
        </div>
        <div class="title-wrap partner-title bronze-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_bronze') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-2 col-4">
            <img :src="goLabo" alt="Go Labo" />
          </div>
          <div class="col-md-2 col-4">
            <img :src="mtt" alt="MTT" />
          </div>
          <div class="col-md-2 col-4">
            <img :src="monday" alt="monday" />
          </div>
          <div class="col-md-2 col-4">
            <img :src="odrive" alt="odrive" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mt-3 text-center">
            <!--
              **Removal of partnership plan for a short moment. WIP -- will be added back by march 1st**
            <a class="btn btn-primary" :href="planPartenariat" target="_blank">
              {{ $t('discover_our_partnership').toUpperCase() }}
            </a>
            -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.partner-title {
  border-radius: 4rem;
  padding: 1rem;
}

.gold-title {
  background-color: gold;
}

.silver-title {
  background-color: rgb(173, 173, 173);
}

.bronze-title {
  background-color: rgba(170, 84, 63, 0.884);
}
</style>
