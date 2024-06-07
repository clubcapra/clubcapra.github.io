<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';
import AutoPlay from 'embla-carousel-autoplay';
import { goldPartners, silverPartners } from '@clubcapra/data/partners';

const [emblaRef] = emblaCarouselVue({}, [AutoPlay({ delay: 5000 })]);
</script>

<template>
  <div class="md:w-3/4 md:mx-auto">
    <div ref="emblaRef" class="relative overflow-hidden">
      <div class="embla__container">
        <div
          v-for="(sponsor, index) in [...goldPartners, ...silverPartners]"
          :key="index"
          class="embla__slide"
        >
          <img :src="sponsor.img" :alt="sponsor.name" class="h-24" />
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
