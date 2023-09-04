<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  icon: string;
}>();
</script>

<template>
  <v-card
    data-aos="fade-up"
    variant="outlined"
    style="border-color: transparent"
  >
    <span :class="`lnr lnr-${icon} lnr-icon fs-40 py-4 d-block`" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ content }}</v-card-text>
  </v-card>
</template>
