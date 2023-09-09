<script setup lang="ts">
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Documents
import plantPartenariat from '@clubcapra/assets/documents/CAPRA_PlanPartenariat.pdf';

// Partners logos
import EtsTypoGrise from '@clubcapra/assets/media/partners/Logo_ETS_TypoGrise_D_EN.png';
import hsLogoCouleur from '@clubcapra/assets/media/partners/HS_logo_couleur.png';
import automatech from '@clubcapra/assets/media/partners/automatech.png';
import ixiasoftMadcapLogoRgbC from '@clubcapra/assets/media/partners/IXIASOFT-Madcap-logo-RGB-C.jpg';
import cgLogoCir from '@clubcapra/assets/media/partners/CG_LOGO_CIR.png';
import aeets from '@clubcapra/assets/media/partners/aeets.svg';
import altium from '@clubcapra/assets/media/partners/altium.svg';
import goLabo from '@clubcapra/assets/media/partners/go-labo.png';
import mtt from '@clubcapra/assets/media/partners/mtt.png';
</script>

<template>
  <JumbotronVideoComponent :title="$t('partners')" />
  <section id="skills" class="bg-white">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap partner-title gold-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_gold') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-6 col-12">
            <img :src="EtsTypoGrise" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="hsLogoCouleur" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="automatech" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="ixiasoftMadcapLogoRgbC" />
          </div>
          <div class="col-md-6 col-12">
            <img :src="cgLogoCir" />
          </div>
        </div>
        <div class="title-wrap partner-title silver-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_silver') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-3 col-6">
            <img :src="aeets" />
          </div>
          <div class="col-md-3 col-6">
            <img :src="altium" />
          </div>
        </div>
        <div class="title-wrap partner-title bronze-title" data-aos="fade-up">
          <h2 class="section-title">{{ $t('partner_bronze') }}</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-2 col-4">
            <img :src="goLabo" />
          </div>
          <div class="col-md-2 col-4">
            <img :src="mtt" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mt-3 text-center">
            <a class="btn btn-primary" :href="plantPartenariat">
              {{ $t('discover_our_partnership').toUpperCase() }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
