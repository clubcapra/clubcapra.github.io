<script setup lang="ts">
defineProps<{
  /**
   * The image of the sponsor.
   */
  img: string;
}>();
</script>

<template>
  <v-sheet class="pa-2 ma-2"><v-img :src="img" /></v-sheet>
</template>
