<script lang="ts" setup>
import { ref, computed } from 'vue';
import { teamPhotosHistory } from '@clubcapra/data/team-history';

const current = ref(teamPhotosHistory.length - 1);

const next = () => {
  current.value =
    (current.value - 1 + teamPhotosHistory.length) % teamPhotosHistory.length;
};

const prev = () => {
  current.value = (current.value + 1) % teamPhotosHistory.length;
};

const goTo = (index: number) => {
  current.value = index;
};

const photo = computed(() => teamPhotosHistory[current.value]);
</script>

<template>
  <div class="relative w-full max-w-4xl mx-auto select-none">
    <!-- Main image -->
    <div
      class="relative overflow-hidden rounded-2xl aspect-video bg-black shadow-2xl"
    >
      <transition-group name="slide" tag="div">
        <img
          v-for="(item, i) in teamPhotosHistory"
          v-show="i === current"
          :key="item.year"
          :src="item.imgSrc"
          :alt="`Team photo ${item.year}`"
          class="absolute inset-0 m-auto h-full object-cover"
        />
      </transition-group>

      <!-- Year overlay -->
      <div
        class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6"
      >
        <span class="text-white font-bold text-5xl tracking-tight opacity-90">
          {{ photo.year }}
        </span>
      </div>

      <!-- Prev / Next buttons -->
      <button
        class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-2xl leading-none rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        style="padding-bottom: 5px"
        aria-label="Previous"
        @click="prev"
      >
        ‹
      </button>
      <button
        class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-2xl leading-none rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        style="padding-bottom: 5px"
        aria-label="Next"
        @click="next"
      >
        ›
      </button>
    </div>

    <!-- Dot indicators -->
    <div
      class="flex md:hidden flex-row-reverse justify-center gap-2 mt-4 flex-wrap"
    >
      <button
        v-for="(item, i) in teamPhotosHistory"
        :key="item.year"
        class="h-2 rounded-full transition-all duration-300"
        :class="
          i === current ? 'w-6 bg-black' : 'w-2 bg-black/30 hover:bg-black/60'
        "
        :aria-label="`Go to ${item.year}`"
        @click="goTo(i)"
      />
    </div>

    <!-- Year scrubber -->
    <div
      class="hidden md:flex flex-row-reverse justify-between mt-4 text-xs text-black/40 font-mono px-1"
    >
      <span
        v-for="(item, i) in teamPhotosHistory"
        :key="item.year"
        class="cursor-pointer transition-colors hover:text-black text-lg"
        :class="i === current ? 'text-black font-bold text-xl' : ''"
        @click="goTo(i)"
      >
        {{ item.year }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
