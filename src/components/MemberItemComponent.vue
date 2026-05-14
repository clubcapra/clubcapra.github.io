<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  name: string;
  img: string;
  program: string;
  title: string;
  link: string | undefined;
}>();

const isHovered = ref(false);
const crazyExists = ref(false);

const crazySrc = computed(() => {
  return props.img.replace(/(\.\w+)$/, '-crazy$1');
});

const preloadImage = new Image();
preloadImage.src = crazySrc.value;
preloadImage.onload = () => {
  crazyExists.value = true;
};

const currentSrc = computed(() => {
  return isHovered.value && crazyExists.value ? crazySrc.value : props.img;
});

// eslint-disable-next-line jsdoc/require-jsdoc
function handleMouseEnter() {
  isHovered.value = true;
}

// eslint-disable-next-line jsdoc/require-jsdoc
function handleMouseLeave() {
  isHovered.value = false;
}
</script>

<template>
  <div class="mt-4 pt-2">
    <div class="flex flex-col items-center text-center rounded-full p-3 py-4">
      <a v-if="link" :href="link" target="_blank" class="rounded-full">
        <div
          class="member-image-parent"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <img
            :src="currentSrc"
            class="shadow-md member-image"
            :class="{ zoomed: isHovered }"
            alt="capra member"
          />
        </div>
      </a>
      <div
        v-else
        class="member-image-parent"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <img
          :src="currentSrc"
          class="shadow-md member-image"
          :class="{ zoomed: isHovered }"
          alt="capra member"
        />
      </div>
      <div class="mt-3">
        <h4 class="text-lg font-medium mb-0">{{ name }}</h4>
        <small>{{ title }}</small>
        <br />
        <small class="text-muted">{{ program }}</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.member-title {
  font-size: 18px;
}

.member-image-parent {
  width: 256px;
  height: 256px;
  border-radius: 50%;
  overflow: hidden;
}

.member-image {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1.2);
  transform-origin: center;
  transition:
    transform 0.2s ease-in-out,
    transform-origin 0.2s ease-in-out;
}

.member-image.zoomed {
  transform: scale(1);
}
</style>
