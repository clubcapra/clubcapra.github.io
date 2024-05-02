<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';
import AutoPlay from 'embla-carousel-autoplay';
import aeets from '@clubcapra/assets/media/partners/aeets.png';
import monday from '@clubcapra/assets/media/partners/monday.png';
import odrive from '@clubcapra/assets/media/partners/odrive.png';
import opnor from '@clubcapra/assets/media/partners/opnor.png';
import stelpro from '@clubcapra/assets/media/partners/stelpro.png';

const [emblaRef] = emblaCarouselVue({}, [AutoPlay({ delay: 5000 })]);

const sponsors = [
  {
    image: aeets,
    alt: 'AEETS',
  },
  {
    image: monday,
    alt: 'Monday',
  },
  {
    image: odrive,
    alt: 'ODrive',
  },
  {
    image: opnor,
    alt: 'Opnor',
  },
  {
    image: stelpro,
    alt: 'Stelpro',
  },
];
</script>

<template>
  <div class="md:w-3/4 md:mx-auto">
    <div ref="emblaRef" class="relative overflow-hidden">
      <div class="embla__container">
        <div
          v-for="(sponsor, index) in sponsors"
          :key="index"
          class="embla__slide"
        >
          <img :src="sponsor.image" :alt="sponsor.alt" class="h-24" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla__container {
  backface-visibility: hidden;
  display: flex;
  margin-left: -1rem;
}
.embla__slide {
  flex: 0 0 60%;
  min-width: 0;
  margin-left: 1rem;
  transition: opacity 0.2s ease-in-out;

  @media (min-width: 768px) {
    flex: 0 0 20%;
  }
}
</style>
