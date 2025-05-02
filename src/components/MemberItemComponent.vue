<script setup lang="ts">
defineProps<{
  name: string;
  img: string;
  program: string;
  title: string;
  link: string | undefined;
}>();
</script>

<template>
  <div class="mt-4 pt-2">
    <div class="flex flex-col items-center text-center rounded-full p-3 py-4">
      <a v-if="link" :href="link" target="_blank" class="rounded-full">
        <img
          :src="img"
          class="rounded-full h-64 w-64 object-cover shadow-md"
          alt="capra member"
        />
      </a>
      <img
        v-else
        :src="img"
        class="rounded-full h-64 w-64 object-cover shadow-md"
        alt="capra member"
      />
      <div class="mt-3">
        <h4 class="text-lg font-medium mb-0">{{ name }}</h4>
        <small>{{ title }}</small>
        <br />
        <small class="text-muted">{{ program }}</small>
      </div>
    </div>
  </div>
</template>

<style>
.member-title {
  font-size: 18px;
}
</style>
