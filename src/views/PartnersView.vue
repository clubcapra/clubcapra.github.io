<script setup lang="ts">
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
</script>

<template>
  <JumbotronVideoComponent :title="$t('partners')" />
  <section id="skills" class="bg-white">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap partner-title gold-title" data-aos="fade-up">
          <h2 class="section-title">Or</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-6 col-12">
            <img src="../img/partners/Logo_ETS_TypoGrise_D_EN.png" />
          </div>
          <div class="col-md-6 col-12">
            <img src="../img/partners/HS_logo_couleur.png" />
          </div>
          <div class="col-md-6 col-12">
            <img src="../img/partners/automatech.png" />
          </div>
          <div class="col-md-6 col-12">
            <img src="../img/partners/IXIASOFT-Madcap-logo-RGB-C.jpg" />
          </div>
          <div class="col-md-6 col-12">
            <img src="../img/partners/CG_LOGO_CIR.png" />
          </div>
        </div>
        <div class="title-wrap partner-title silver-title" data-aos="fade-up">
          <h2 class="section-title">Argent</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-3 col-6">
            <img src="../img/partners/aeets.png" />
          </div>
          <div class="col-md-3 col-6">
            <img src="../img/partners/altium.svg" />
          </div>
        </div>
        <div class="title-wrap partner-title bronze-title" data-aos="fade-up">
          <h2 class="section-title">Bronze</h2>
        </div>
        <div class="row justify-content-center align-items-center py-5">
          <div class="col-md-2 col-4">
            <img src="../img/partners/go-labo.png" />
          </div>
          <div class="col-md-2 col-4">
            <img src="../img/partners/mtt.png" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mt-3 text-center">
            <button
              class="btn btn-primary"
              onClick="location.href='documents/CAPRA_PlanPartenariat.pdf'"
            >
              DÉCOUVRIR LE PLAN DE PARTENARIAT
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
