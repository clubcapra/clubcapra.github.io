<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import etsmtl from '@clubcapra/assets/media/etsmtl.jpg';

// Set title
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
document.title = t('page_contact');
</script>

<template>
  <JumbotronVideoComponent :title="$t('contact_us')" :img="etsmtl" />
  <section id="contact-form" class="bg-white">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">{{ $t('where_to_find_us') }}</h2>
        </div>
        <div class="row text-center mt-4 justify-content-center">
          <div class="col-md-3" data-aos="fade-up">
            <span class="py-4 d-block">
              <i class="fas fa-map-marker-alt fs-40 testi-icon" />
            </span>
            <h5>EMPLACEMENT</h5>
            <p>
              1219, rue William
              <br />
              Montréal (Québec) H3C 1K3
              <br />
              Local D-2014
              <br />
            </p>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="600">
            <span class="py-4 d-block">
              <i class="fas fa-envelope fs-40 testi-icon" />
            </span>
            <h5>{{ $t('email').toUpperCase() }}</h5>
            <p>capra@ens.etsmtl.ca</p>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="800">
            <span class="py-4 d-block">
              <a href="https://www.facebook.com/clubcapra/" target="_blank">
                <i class="fab fa-facebook-f fs-40 testi-icon" />
              </a>
            </span>
            <h5>FACEBOOK</h5>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="1000">
            <span class="py-4 d-block">
              <a href="https://www.instagram.com/capra_ets/" target="_blank">
                <i class="fab fa-instagram fs-40 testi-icon" />
              </a>
            </span>
            <h5>INSTAGRAM</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
