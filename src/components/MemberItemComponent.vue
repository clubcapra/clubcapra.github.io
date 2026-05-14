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
        <div class="member-image-parent">
          <img
            :src="img"
            class="rounded-full h-64 w-64 object-cover shadow-md member-image"
            alt="capra member"
          />
        </div>
      </a>
      <div v-else class="member-image-parent">
        <img
          :src="img"
          class="rounded-full h-64 w-64 object-cover shadow-md member-image"
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
}
</style>
