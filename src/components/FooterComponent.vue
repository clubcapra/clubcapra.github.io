<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from '@clubcapra/assets/media/Capra_Cercle_Full.png';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
const email = 'capra@ens.etsmtl.ca';
const hidden = ref(false);

onMounted(() => {
  hidden.value = window.location.pathname === '/dashboard';
});
</script>

<template>
  <footer v-if="!hidden" id="footer" class="py-10 bg-black">
    <div class="container mx-auto text-white px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col gap-4 md:w-1/3">
          <img :src="logo" alt="logo" class="h-16 w-16" />
          <div class="flex flex-row items-center text-lg gap-1">
            <FontAwesomeIcon :icon="faEnvelope" class="w-6" />
            <a :href="'mailto:' + email">{{ email }}</a>
          </div>
          <div class="flex flex-row items-center text-lg gap-1">
            <FontAwesomeIcon :icon="faLocationDot" class="w-6" />
            <p>
              {{ $t('location') }}
              <br />
              {{ $t('room_number') }}
            </p>
          </div>

          <p />
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-sans font-bold text-xl md:text-2xl">
            {{ $t('our_socials') }}
          </p>
          <nav class="flex flex-row gap-4">
            <a
              class="text-xl"
              href="https://www.facebook.com/clubcapra/"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon :icon="faLinkedin" />
            </a>
            <a
              class="text-xl"
              href="https://www.instagram.com/capra_ets/"
              aria-label="Instagram"
            >
              <FontAwesomeIcon :icon="faInstagram" />
            </a>
            <a
              class="text-xl"
              href="https://www.linkedin.com/company/club-capra/"
              aria-label="FaceBook"
            >
              <FontAwesomeIcon :icon="faFacebook" />
            </a>
            <a
              class="text-xl"
              href="https://github.com/clubcapra"
              aria-label="GitHub"
            >
              <FontAwesomeIcon :icon="faGithub" />
            </a>
          </nav>
        </div>
      </div>
      <hr class="border-white my-8" />
      <div class="flex w-full">
        <p class="text-center">{{ $t('copyright') }}</p>
      </div>
    </div>
  </footer>
</template>
