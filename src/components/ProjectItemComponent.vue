<script setup lang="ts">
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  title: String,
  // eslint-disable-next-line vue/require-default-prop
  description: String,
  // eslint-disable-next-line vue/require-default-prop
  img: String,
});
</script>

<template>
  <div class="border rounded-lg shadow-lg p-4 flex flex-col items-center">
    <img :src="img" :alt="title" class="w-full h-auto rounded mb-4" />
    <h3 class="text-2xl font-bold text-center mb-2">{{ title }}</h3>
    <p class="text-center text-black-700">{{ description }}</p>
  </div>
</template>

<style scoped>
img {
  max-height: 500px;
  object-fit: cover;
}
</style>
