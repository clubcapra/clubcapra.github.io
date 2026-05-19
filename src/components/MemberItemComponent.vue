<script setup lang="ts">
import type { Member } from '@clubcapra/data/members';
import { ref, computed } from 'vue';

import defaultAvatar from '@clubcapra/assets/media/members/avatar.png';

const props = defineProps<{
  member: Member;
  title: string;
}>();

const isHovered = ref(false);

const currentSrc = computed(() => {
  if (!props.member.img) {
    return defaultAvatar;
  }
  if (isHovered.value && props.member.crazy) {
    return props.member.crazy;
  }
  return props.member.img;
});

// eslint-disable-next-line jsdoc/require-jsdoc
function handleMouseEnter() {
  isHovered.value = true;
}

// eslint-disable-next-line jsdoc/require-jsdoc
function handleMouseLeave() {
  isHovered.value = false;
}

const image = new Image();
image.src = props.member.crazy ?? props.member.img ?? defaultAvatar;
image.onload = () => {
  // Preload the image
};
</script>

<template>
  <div class="mt-4 pt-2">
    <div class="flex flex-col items-center text-center rounded-full p-3 py-4">
      <a
        v-if="props.member.link"
        :href="props.member.link"
        target="_blank"
        class="rounded-full"
      >
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
        <h4 class="text-lg font-medium mb-0">{{ props.member.name }}</h4>
        <small>{{ props.title }}</small>
        <br />
        <small class="text-muted">{{ props.member.program }}</small>
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
