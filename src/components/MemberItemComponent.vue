<script setup lang="ts">
defineProps<{
  name: string;
  img: string;
  program: string;
  title?: string;
}>();
</script>

<template>
  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    <div class="team text-center rounded p-3 py-4">
      <img
        :src="img"
        class="img-fluid avatar avatar-medium shadow rounded-pill"
        alt="capra member"
      />
      <div class="content mt-3">
        <h4 class="member-title mb-0">{{ name }}</h4>
        <small v-if="title">{{ title }}</small>
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
