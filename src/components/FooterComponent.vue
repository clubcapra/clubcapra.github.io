<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
</script>

<template>
  <footer class="pt-10 bg-black">
    <div class="container mx-auto text-white px-4">
      <div class="flex flex-col gap-8 items-center">
        <h2 class="font-sans font-bold text-3xl md:text-4xl">
          Get in touch with us
        </h2>
        <div class="flex flex-row gap-4">
          <a
            class="border border-white rounded-full"
            href="mailto:clubcapra@etsmtl.ca"
          >
            <FontAwesomeIcon
              :icon="faEnvelope"
              size="2x"
              class="p-4 aspect-square"
            />
          </a>
          <a
            class="border border-white rounded-full"
            href="https://www.facebook.com/clubcapra/"
          >
            <FontAwesomeIcon
              :icon="faLinkedin"
              size="2x"
              class="p-4 aspect-square"
            />
          </a>
          <a
            class="border border-white rounded-full"
            href="https://www.instagram.com/capra_ets/"
          >
            <FontAwesomeIcon
              :icon="faInstagram"
              size="2x"
              class="p-4 aspect-square"
            />
          </a>
          <a
            class="border border-white rounded-full"
            href="https://www.linkedin.com/company/club-capra/"
          >
            <FontAwesomeIcon
              :icon="faFacebook"
              size="2x"
              class="p-4 aspect-square"
            />
          </a>
          <a
            class="border border-white rounded-full"
            href="https://github.com/clubcapra"
          >
            <FontAwesomeIcon
              :icon="faGithub"
              size="2x"
              class="p-4 aspect-square"
            />
          </a>
        </div>
        <div>
          <p class="text-center">© 2024 Club Capra. All rights reserved.</p>
          <p class="text-center mb-0">
            {{ $t('made_with_love') }}
            <FontAwesomeIcon :icon="faHeart" />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
