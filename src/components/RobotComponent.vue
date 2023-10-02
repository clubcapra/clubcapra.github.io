<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import { inject } from 'vue';
import type { Robot } from '@clubcapra/views/RobotsView.vue';

defineProps<{
  robot: Robot;
}>();
</script>
<template>
  <div class="section">
    <JumbotronVideoComponent
      v-if="robot.mediaType == 'img'"
      :title="robot.name"
      :img="robot.source"
    />
    <JumbotronVideoComponent
      v-else-if="robot.mediaType == 'video'"
      :title="robot.name"
      :video="robot.source"
    />
  </div>
  <div
    v-for="(section, i) in robot.sections"
    :key="i"
    class="section section-overlay"
  >
    <div class="section-medias">
      <template v-for="(media, i) in section.medias" :key="i">
        <!-- Video -->
        <video
          v-if="media.mediaType == 'video'"
          loop
          muted
          playsinline
          data-autoplay
        >
          <source :src="media.source" type="video/mp4" />
        </video>
        <!-- Image -->
        <img
          v-else-if="media.mediaType == 'img'"
          :src="media.source"
          class="section-image"
        />
      </template>
    </div>
    <div class="layer">
      <h1>{{ section.title }}</h1>
    </div>
  </div>
</template>
