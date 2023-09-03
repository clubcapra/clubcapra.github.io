<script setup lang="ts">
defineProps<{
  title: string;
  video?: string;
  single?: boolean;
}>();
</script>

<template>
  <div class="jumbotron d-flex align-items-center">
    <h1 class="text-h4 mb-4">{{ title }}</h1>
    <video v-if="video" class="bg-video" preload="true" autoplay muted>
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>
